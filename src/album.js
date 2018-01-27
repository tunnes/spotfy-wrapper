import { API_HEADER, API_BASE_PATH } from './config';
import { toJSON } from './utils';

export const getAlbum = albumID =>
  fetch(`${API_BASE_PATH}/albums/${albumID}`, API_HEADER).then(toJSON);

export const getAlbumTracks = albumID =>
  fetch(`${API_BASE_PATH}/albums/${albumID}/tracks`, API_HEADER).then(toJSON);

export const getAlbums = arrayAlbumID =>
  fetch(`${API_BASE_PATH}/albums/?ids=${arrayAlbumID}`, API_HEADER).then(toJSON);
