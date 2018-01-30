import { generalSearch, artistSearch, albumSearch, trackSearch, playlistSearch } from './search';

import album from './album';

import { API_BASE_PATH } from './config';

export default class SpotifyWrapper {
  constructor(options) {
    this.url = options.url || API_BASE_PATH;
    this.token = options.token;
    this.album = album.bind(this)();
  }
  request(url) {
    const headers = {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };
    return fetch(url, headers);
  }
}
