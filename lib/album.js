'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbums = exports.getAlbumTracks = exports.getAlbum = undefined;

var _config = require('./config');

var _utils = require('./utils');

var getAlbum = exports.getAlbum = function getAlbum(albumID) {
  return fetch(_config.API_BASE_PATH + '/albums/' + albumID, _config.API_HEADER).then(_utils.toJSON);
};

var getAlbumTracks = exports.getAlbumTracks = function getAlbumTracks(albumID) {
  return fetch(_config.API_BASE_PATH + '/albums/' + albumID + '/tracks', _config.API_HEADER).then(_utils.toJSON);
};

var getAlbums = exports.getAlbums = function getAlbums(arrayAlbumID) {
  return fetch(_config.API_BASE_PATH + '/albums/?ids=' + arrayAlbumID, _config.API_HEADER).then(_utils.toJSON);
};