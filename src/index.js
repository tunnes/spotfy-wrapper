import album from './album';
import search from './search';

import API_URL from './config';
import toJSON from './utils';

export default class SpotifyWrapper {
  constructor(options) {
    this.url = options.url || API_URL;
    this.token = options.token;
    this.album = album.bind(this)();
    this.search = search.bind(this)();
  }
  request(url) {
    const headers = {
      headers: {
        Authorization: `'Bearer ${this.token}'`,
      },
    };

    return fetch(url, headers).then(toJSON);
  }
}
