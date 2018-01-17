const generalSearch = (query, type) =>
  fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`)
    .then(data => data.json);

const playlistSearch = query => generalSearch(query, 'playlist');
const artistSearch = query => generalSearch(query, 'artist');
const albumSearch = query => generalSearch(query, 'album');
const trackSearch = query => generalSearch(query, 'track');

export { generalSearch, artistSearch, albumSearch, trackSearch, playlistSearch };
