import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
});

export function getAllSeries() {
  return api.get("/series");
}

export function getSeries(id: string) {
  return api.get(`/series/${id}`);
}

export function getSlide(id: string) {
  return api.get(`/slides/${id}`);
}
