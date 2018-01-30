import { generalSearch, artistSearch, albumSearch, trackSearch, playlistSearch } from './search';
import { getAlbum, getAlbumTracks, getAlbums } from './album';

import { API_BASE_PATH } from './config';
// module.exports = {
//   generalSearch,
//   artistSearch,
//   albumSearch,
//   trackSearch,
//   playlistSearch,
//   getAlbum,
//   getAlbumTracks,
//   getAlbums,
// };

export default class SpotifyWrapper {
  constructor(options) {
    this.basePath = options.basePath || API_BASE_PATH;
    this.token = options.token || API_BASE_PATH;
  }
  request(url) {
    const header = {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };
    fetch(url, header);
  }
}
