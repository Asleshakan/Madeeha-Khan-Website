
export async function getRelevantExperience<T>(url: string): Promise<T> {
  const response = await fetch(`${baseUrl}${url}`);
  const body = await response.json();
  return body;
}
