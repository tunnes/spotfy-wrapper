(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["spotfyWrapper"] = factory();
	else
		root["spotfyWrapper"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var API_KEY = 'BQC3bakIJWuJ9hKWjYBf-UiB2yrpxwNQKh92avSX16M4o_SXUQh3XueKQWYzmbxuc1G1wGizrFJh07iZKpnVoDlgh0-fbdP2CNEvXmm6Cf93ILSF-SVi_mm8gzMSCa57C2d2TvWJGiSAVB8';

var API_BASE_PATH = exports.API_BASE_PATH = 'https://api.spotify.com/v1';

var API_HEADER = exports.API_HEADER = {
  headers: {
    Authorization: 'Bearer ' + API_KEY
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var toJSON = exports.toJSON = function toJSON(data) {
  return data.json();
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _search = __webpack_require__(3);

var _album = __webpack_require__(4);

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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.playlistSearch = exports.trackSearch = exports.albumSearch = exports.artistSearch = exports.generalSearch = undefined;

var _config = __webpack_require__(0);

var _utils = __webpack_require__(1);

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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbums = exports.getAlbumTracks = exports.getAlbum = undefined;

var _config = __webpack_require__(0);

var _utils = __webpack_require__(1);

var getAlbum = exports.getAlbum = function getAlbum(albumID) {
  return fetch(_config.API_BASE_PATH + '/albums/' + albumID, _config.API_HEADER).then(_utils.toJSON);
};

var getAlbumTracks = exports.getAlbumTracks = function getAlbumTracks(albumID) {
  return fetch(_config.API_BASE_PATH + '/albums/' + albumID + '/tracks', _config.API_HEADER).then(_utils.toJSON);
};

var getAlbums = exports.getAlbums = function getAlbums(arrayAlbumID) {
  return fetch(_config.API_BASE_PATH + '/albums/?ids=' + arrayAlbumID, _config.API_HEADER).then(_utils.toJSON);
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=spotify-wrapper.umd.js.map