import SpotifyWrapper from '../src/index';

global.fetch = require('node-fetch');

const spotifyWrapper = new SpotifyWrapper({ token: 'BQDoBFgimiq8Hp6bHz4Tox-kbCsaFwrccblpa9SBaBhqRlfSrPBszqT-NCigt5R95FeSIlcxh1nuGs-YoOuYy28tCyFX-nBs4vTJGJ9etM5wX6ZcfeMbDBRuG-svYJv8ggmzloiAn9qMK_g' });
const responsePromise = spotifyWrapper.search.artists("Strokes");
const trowSucess = items => items.map(item => process.stdout.write(`- ${item.name}\n`));
responsePromise
  .then(data => trowSucess(data.artists.items)); 
