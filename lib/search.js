'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = search;

function genericSearch(type, query) {
  return this.request(this.url + '/search?q=' + query + '&type=' + type);
}

function search() {
  return {
    playlists: genericSearch.bind(this, 'playlist'),
    artists: genericSearch.bind(this, 'artist'),
    albums: genericSearch.bind(this, 'album'),
    tracks: genericSearch.bind(this, 'track')
  };
}