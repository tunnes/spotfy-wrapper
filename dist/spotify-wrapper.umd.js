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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _search = __webpack_require__(2);

var _album = __webpack_require__(4);

var _album2 = _interopRequireDefault(_album);

var _config = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpotifyWrapper = function () {
  function SpotifyWrapper(options) {
    _classCallCheck(this, SpotifyWrapper);

    this.url = options.url || _config.API_BASE_PATH;
    this.token = options.token;
    this.album = _album2.default.bind(this)();
  }

  _createClass(SpotifyWrapper, [{
    key: 'request',
    value: function request(url) {
      var headers = {
        headers: {
          Authorization: 'Bearer ' + this.token
        }
      };
      return fetch(url, headers);
    }
  }]);

  return SpotifyWrapper;
}();

exports.default = SpotifyWrapper;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.playlistSearch = exports.trackSearch = exports.albumSearch = exports.artistSearch = exports.generalSearch = undefined;

var _config = __webpack_require__(0);

var _utils = __webpack_require__(3);

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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var toJSON = exports.toJSON = function toJSON(data) {
  return data.json();
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = album;
function album() {
  var _this = this;

  return {
    getAlbum: function getAlbum(albumID) {
      return _this.request(_this.url + "/albums/" + albumID);
    },
    getTracks: function getTracks(albumID) {
      return _this.request(_this.url + "/albums/" + albumID + "/tracks");
    },
    getAlbums: function getAlbums(arrayAlbumID) {
      return _this.request(_this.url + "/albums/?ids=" + arrayAlbumID);
    }
  };
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=spotify-wrapper.umd.js.map