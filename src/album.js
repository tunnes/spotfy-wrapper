export default function album() {
  return {
    getAlbum: albumID => this.request(`${this.url}/albums/${albumID}`),
    getTracks: albumID => this.request(`${this.url}/albums/${albumID}/tracks`),
    getAlbums: arrayAlbumID => this.request(`${this.url}/albums/?ids=${arrayAlbumID}`),
  };
}

