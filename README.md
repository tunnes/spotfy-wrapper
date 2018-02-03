# Spotify Wrapper

[![Build Status](https://travis-ci.org/tunnes/spotfy-wrapper.svg?branch=master)](https://travis-ci.org/tunnes/spotify-wrapper)
[![Coverage Status](https://coveralls.io/repos/github/tunnes/spotfy-wrapper/badge.svg?branch=master)](https://coveralls.io/github/tunnes/spotify-wrapper?branch=master)   

An simple and humanized JavaScript interface wrapper to [Spotify API](https://developer.spotify.com/web-api/).

## Browser Support 
This wrapper was implemented using [Fetch API](https://github.com/whatwg/fetch) and this resource is supported in the following browsers: 

![Chrome](https://www.iconsdb.com/icons/preview/black/chrome-xl.png) | ![Firefox](https://www.iconsdb.com/icons/preview/black/firefox-xl.png) | ![Opera](https://www.iconsdb.com/icons/preview/black/opera-xl.png) | ![Safari](https://www.iconsdb.com/icons/preview/black/safari-xl.png) | ![IE](https://www.iconsdb.com/icons/preview/black/internet-explorer-xl.png) |
--- | --- | --- | --- | --- |
39+ ✔ | 42+ ✔ | 29+ ✔ | 10.1+ ✔ | Nope ✘ |

### Dependencies
The only dependency of this API is a [fetch](https://github.com/whatwg/fetch) to make requests to 
[Spotify web API](https://developer.spotify.com/web-api/). For environments that don't offer support to fetch, you will need to provide an
[polifyl](https://github.com/github/fetch) to browsers or [polifyl](https://www.npmjs.com/package/node-fetch) to node

### Installing
To install is very simple, see the follow example:

```
$ npm install spotify-wrapper --save
```
## Usage

### ES6
```js
// To import an specific method: 
   import { method } from 'spotify-wrapper';

// To import all: 
   import * as spotifyWrapper from 'spotify-wrapper';
```
### CommonJS
```js
var spotifyWrapper = require('spotify-wrapper');
```
### UMD in Browsers
```html
<!-- Not minified -->
<script src="spotify-wrapper.umd.js"></script>

<!-- Or minified -->
<script src="spotify-wrapper.umd.min.js"></script>
```
After that the library is be avaliable to the Global as `spotifyWrapper`.
Follow an example:
```js
const albums = spotifyWrapper.searchAlbums('Strokes');
```

## Methods
> Follow the methods that the library provides.

### **generalSearch(query, types)**
> Search information about artists, albums, tracks and playlists, you can also check in [Spotify API Console](https://developer.spotify.com/web-api/console/get-search-item).
 
 | Argument | Type              | Options                                 |
 |----------|-------------------|-----------------------------------------|
 |`query`   |*String*           | 'Any search query'                      |
 |`type`    |*Array of Strings* | ['artist', 'album', 'track', 'playlist']|

 ```js
 generalSearch('Strokes', ['artists', 'album'])
    .then( data => {
        // Do what you want with response.
    });
 ```

 ### **playlistSearch(query)**
> Search playlists an our informations, you can also check in [Spotify API Console](https://developer.spotify.com/web-api/console/get-search-item) with type defined as *playlist*.
 
 | Argument | Type     | Options            |
 |----------|----------|--------------------|
 | `query`  | *String* | 'Any search query' |
 
 ```js
 playlistSearch('Strokes')
    .then( data => {
        // Do what you want with response.
    });
 ```

 ### **artistSearch(query)**
> Search for artists avaliable on spotify, you can also check in [Spotify API Console](https://developer.spotify.com/web-api/console/get-search-item) with type defined as *artist*.
 
 | Argument | Type     | Options            |
 |----------|----------|--------------------|
 | `query`  | *String* | 'Any search query' |
 
 ```js
 artistSearch('Strokes')
    .then( data => {
        // Do what you want with response.
    });
 ```

 ### **albumSearch(query)**
> Search for albums avaliable on spotify, you can also check in [Spotify API Console](https://developer.spotify.com/web-api/console/get-search-item) with type defined as *album*.

 | Argument | Type     | Options            |
 |----------|----------|--------------------|
 | `query`  | *String* | 'Any search query' |
 
 ```js
 albumSearch('Strokes')
    .then( data => {
        // Do what you want with response.
    });
 ```
 
 ## **trackSearch(query)**
> Search for tracks avaliable on spotify, you can also check in [Spotify API Console](https://developer.spotify.com/web-api/console/get-search-item) with type defined as *track*.
 
 | Argument | Type     | Options            |
 |----------|----------|--------------------|
 | `query`  | *String* | 'Any search query' |

 ```js
 trackSearch('Strokes')
    .then( data => {
        // Do what you want with response.
    });
 ```

 ### **getAlbum(albumID)**
> Get an specific album by ID you can check and test in [Spotify API Console](https://developer.spotify.com/web-api/console/get-album/).
 
 | Argument | Type     | Options                           |
 |----------|----------|-----------------------------------|
 | `ID`     | *String* | 'Specific SpotifyAlbumID'          |
 
 ```js
 getAlbum('0sNOF9WDwhWunNAHPD3Baj')
    .then( data => {
        // Do what you want with response.
    });
 ```

 ### **getAlbumTracks(albumID)**
> Get all avaliable tracks of an specific album by album ID you can check and test in [Spotify API Console](https://developer.spotify.com/web-api/console/get-album/).

 | Argument | Type     | Options                           |
 |----------|----------|-----------------------------------|
 | `ID`     | *String* | 'Specific SpotifyAlbumID'          |

 ```js
 getAlbumTracks('0sNOF9WDwhWunNAHPD3Baj')
    .then( data => {
        // Do what you want with response.
    });
 ```

 ### **getAlbums([albumID])**
> Get various albums by array of album ID you can check and test in [Spotify API Console](https://developer.spotify.com/web-api/console/get-album/).

| Argument | Type               | Options                           |
|----------|--------------------|-----------------------------------|
| `IDs`    | *Array of Strings* | 'Specific SpotifyAlbumID'          |
 
 ```js
 getAlbums(['0sNOF9WDwhWunNAHPD3Baj','1sNA78WDwhTunDAHS6SDAj'])
    .then( data => {
        // Do what you want with response.
    });
 ```

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Ayrton Felipe** - *Initial work* - [PurpleBooth](https://github.com/tunnes)

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

> To My current instructor for this course [Willian Justen](https://github.com/willianjusten/) to provide a good explanation and examples of this methodology of development.
