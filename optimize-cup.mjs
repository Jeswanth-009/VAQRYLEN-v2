import fs from 'fs';
import sharp from 'sharp';
import { NodeIO } from '@gltf-transform/core';
import { dedup, prune, draco } from '@gltf-transform/functions';
import { KHRDracoMeshCompression } from '@gltf-transform/extensions';
import draco3d from 'draco3d';

const io = new NodeIO();
io.registerExtensions([KHRDracoMeshCompression]);
io.registerDependencies({
  'draco3d.encoder': await draco3d.createEncoderModule(),
});

const doc = await io.read('public/assets/models/cup.glb');
const root = doc.getRoot();

// 1) Resize every texture to at most 512x512, re-encode as JPEG q=80.
const textures = root.listTextures();
console.log(`Textures found: ${textures.length}`);
for (const tex of textures) {
  const img = tex.getImage();
  if (!img) continue;
  const before = img.byteLength;
  const resized = await sharp(img, { limitInputPixels: false })
    .resize({ width: 512, height: 512, fit: 'inside', withoutEnlargement: true })
    .rotate()
    .jpeg({ quality: 80, mozjpeg: true })
    .toBuffer();
  tex.setImage(new Uint8Array(resized.buffer, resized.byteOffset, resized.byteLength));
  console.log(`  ${(before/1024).toFixed(0)} KB -> ${(resized.byteLength/1024).toFixed(0)} KB`);
}

// 2) Draco-compress the geometry.
await doc.transform(
  dedup(),
  prune({ pruneMaterials: false, pruneMeshes: false, pruneExtensions: false }),
  draco({
    method: 'edgebreaker',
    encodeSpeed: 0,
    decodeSpeed: 5,
    quantizePosition: 10,
    quantizeNormal: 8,
    quantizeColor: 6,
    quantizeTexcoord: 10,
    quantizeGeneric: 10,
  }),
);

await io.write('public/assets/models/cup-optimized.glb', doc);

const orig = fs.statSync('public/assets/models/cup.glb').size;
const opt = fs.statSync('public/assets/models/cup-optimized.glb').size;
console.log('---');
console.log('Original:', Math.round(orig/1024) + ' KB');
console.log('Optimized:', Math.round(opt/1024) + ' KB');
console.log('Reduction:', Math.round((1 - opt/orig)*100) + '%');

const buf = fs.readFileSync('public/assets/models/cup-optimized.glb');
const jsonLen = new DataView(buf.buffer, buf.byteOffset, buf.byteLength).getUint32(12, true);
const json = JSON.parse(new TextDecoder().decode(new Uint8Array(buf.buffer, buf.byteOffset + 20, jsonLen)));
console.log('extensionsUsed:', JSON.stringify(json.extensionsUsed));
console.log('buffer byteLength:', json.buffers?.[0]?.byteLength);
