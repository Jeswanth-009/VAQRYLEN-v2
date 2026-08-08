// Form submission endpoints (Google Apps Script web apps).
// Replace these URLs with your deployed Apps Script web app URLs:
//   1. Create a Google Sheet for WAITLIST entries
//   2. Extensions -> Apps Script -> paste the doPost handler
//   3. Deploy -> New deployment -> Web app (Execute as: Me, Access: Anyone)
//   4. Copy the /exec URL and paste it below

const WAITLIST_URL = 'https://script.google.com/macros/s/PLACEHOLDER_WAITLIST/exec';
const INQUIRY_URL = 'https://script.google.com/macros/s/PLACEHOLDER_INQUIRY/exec';

export async function submitWaitlist(data: Record<string, unknown>) {
  return postForm(WAITLIST_URL, data);
}

export async function submitInquiry(data: Record<string, unknown>) {
  return postForm(INQUIRY_URL, data);
}

async function postForm(url: string, data: Record<string, unknown>) {
  if (url.includes('PLACEHOLDER_')) {
    throw new Error('Form endpoint not configured yet.');
  }
  const response = await fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(data),
  });
  return response;
}
