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