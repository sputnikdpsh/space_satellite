import { API_URL } from "../config/API_CONFIG";

export const getData = async () => {
    const res = await fetch(`${API_URL}/api/gallery`);

    if (!res.ok) {
        throw new Error(`Ошибка HTTP: ${res.status}`);
    }

    const response = await res.json();
    return response.gallery;
};