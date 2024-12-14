export const API_URL = process.env.REACT_APP_API_URL;
export const API_EVENTS_URL = `${API_URL}/api/events?populate=photo`;
export const API_GALLERY_URL = `${API_URL}/api/galaries?populate=media`;
export const API_NEWS_URL = `${API_URL}/api/news?populate=photo`;
export const API_TOKEN = `${process.env.REACT_APP_API_TOKEN}`