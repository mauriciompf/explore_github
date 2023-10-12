export default async function fetchData() {
    const API_URL = "https://api.github.com/users/mauriciompf";
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error);
    }
}
