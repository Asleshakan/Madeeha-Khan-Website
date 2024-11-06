export async function getAboutData<T>(): Promise<T> {
    const response = await fetch(`api/about/`);
    const body = await response.json();
    return body;
}
