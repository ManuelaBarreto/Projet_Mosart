const API_URL = process.env.NODE_ENV === 'production' ? 'https://api.mosaics.vbilla.fr' : 'http://localhost:3000';

export async function fetchMosaics() {
    return fetch(`${API_URL}/mosaics`).then(res => res.json());
}

export async function fetchMosaic(slug) {
    return fetch(`${API_URL}/mosaics/${slug}`).then(res => res.json());
}

export function getMosaicOriginalUrl(slug) {
    return `${API_URL}/mosaics/${slug}/original`;
}

export function getMosaicThumbnailUrl(slug) {
    return `${API_URL}/mosaics/${slug}/thumbnail`;
}

export function getMosaicTileUrl(slug, zoom, x, y) {
    return `${API_URL}/mosaics/${slug}/tiles/${zoom}/${x}_${y}`;
}
