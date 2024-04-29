export const apiBaseUrl = 'http://188.166.203.164';

export async function GetData() {
  const apiResponse = await fetch(`${apiBaseUrl}/static/test.json`);
  const data = await apiResponse.json();

  return data;
}
