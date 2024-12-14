import {API_GALLERY_URL, API_TOKEN} from "../config/API_CONFIG";

export const getData = async () => {
    const res = await fetch(API_GALLERY_URL, {
        headers: {
            authorization: `Bearer ${API_TOKEN}`,
        },
    });
    const { data } = await res.json();
    return data;
}