import album from './album';
import search from './search';

import { API_BASE_PATH } from './config';

export default class SpotifyWrapper {
  constructor(options) {
    this.url = options.url || API_BASE_PATH;
    this.token = options.token;
    this.album = album.bind(this)();
    this.search = search.bind(this)();
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
