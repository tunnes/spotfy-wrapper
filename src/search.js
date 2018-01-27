import { API_HEADER, API_BASE_PATH } from './config';
import { toJSON } from './utils';

const generalSearch = (query, type) =>
  fetch(`${API_BASE_PATH}/search?q=${query}&type=${type}`, API_HEADER).then(toJSON);

const playlistSearch = query => generalSearch(query, 'playlist');
const artistSearch = query => generalSearch(query, 'artist');
const albumSearch = query => generalSearch(query, 'album');
const trackSearch = query => generalSearch(query, 'track');

export { generalSearch, artistSearch, albumSearch, trackSearch, playlistSearch };
