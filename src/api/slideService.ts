import axios from "axios";

const api = axios.create({ baseURL: 'https://redundant-nanny-h662-43ed6282.koyeb.app/api' });

export function getAllSeries() {
    return api.get('/series');
}

export function getSeries(id: number) {
    return api.get(`/series/${id}`);
}

export function getSlide(id: number) {
    return api.get(`/slides/${id}`);
}