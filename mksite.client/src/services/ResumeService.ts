const baseUrl = process.env.NODE_ENV === "production"
  ? "https://kaserverapp-geb4fmazezhscyht.canadacentral-01.azurewebsites.net/" 
export async function getRelevantExperience<T>(url: string): Promise<T> {
  const response = await fetch(`${baseUrl}${url}`);
  const body = await response.json();
  return body;
}
