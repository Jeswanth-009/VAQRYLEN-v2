// Form submission endpoints (Google Apps Script web apps).
// Waitlist entries -> WAITLIST_URL, sample requests/inquiries -> INQUIRY_URL.
// Each Apps Script web app must run a doPost(e) handler that parses the JSON
// payload and appends it as a new row to its bound Google Sheet.

const WAITLIST_URL = 'https://script.google.com/macros/s/AKfycbw71xlT5A2pleUpOp_-F54Zx-_eFW0EwbwaZc6vNU_aYy_iB7YTyZ2u7L6vkWn1l4qZSg/exec';
const INQUIRY_URL = 'https://script.google.com/macros/s/AKfycby5JUBj0Vj9ttu5NO4Sg9ZsomGLOtLFh5sjj9PnCKlFihczukQ5XPknT9QdGVRNCg46/exec';

export async function submitWaitlist(data: Record<string, unknown>) {
  return postForm(WAITLIST_URL, data);
}

export async function submitInquiry(data: Record<string, unknown>) {
  return postForm(INQUIRY_URL, data);
}

async function postForm(url: string, data: Record<string, unknown>) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(data),
  });
  return response;
}
