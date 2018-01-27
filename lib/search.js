'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.playlistSearch = exports.trackSearch = exports.albumSearch = exports.artistSearch = exports.generalSearch = undefined;

var _config = require('./config');

var _utils = require('./utils');

var generalSearch = function generalSearch(query, type) {
  return fetch(_config.API_BASE_PATH + '/search?q=' + query + '&type=' + type, _config.API_HEADER).then(_utils.toJSON);
};

var playlistSearch = function playlistSearch(query) {
  return generalSearch(query, 'playlist');
};
var artistSearch = function artistSearch(query) {
  return generalSearch(query, 'artist');
};
var albumSearch = function albumSearch(query) {
  return generalSearch(query, 'album');
};
var trackSearch = function trackSearch(query) {
  return generalSearch(query, 'track');
};

exports.generalSearch = generalSearch;
exports.artistSearch = artistSearch;
exports.albumSearch = albumSearch;
exports.trackSearch = trackSearch;
exports.playlistSearch = playlistSearch;