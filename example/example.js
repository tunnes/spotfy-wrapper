import SpotifyWrapper from '../src/index';

global.fetch = require('node-fetch');

const spotifyWrapper = new SpotifyWrapper({ token: 'BQB4CrPO9UIGFg_C7NzeARw9YCy_Ix4UsZ8AMckZgTUMPQzgShOQ4ovhHm4vsOovMgD9XoSEzq8G4XDRRhcegRJdRDqD591T8Xf2dLXdvowoqeRByU0MhipL0bTbUvyrn6q2u12ak4f0apQ' });
const responsePromise = spotifyWrapper.search.artists("Strokes");
const trowSucess = items => items.map(item => process.stdout.write(`- ${item.name}\n`));
responsePromise
  .then(data => trowSucess(data.artists.items)); 
