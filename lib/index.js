'use strict';

var _search = require('./search');

var _album = require('./album');

module.exports = {
  generalSearch: _search.generalSearch,
  artistSearch: _search.artistSearch,
  albumSearch: _search.albumSearch,
  trackSearch: _search.trackSearch,
  playlistSearch: _search.playlistSearch,
  getAlbum: _album.getAlbum,
  getAlbumTracks: _album.getAlbumTracks,
  getAlbums: _album.getAlbums
};