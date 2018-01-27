import { artistSearch } from '../src/search';

global.fetch = require('node-fetch');

const responsePromise = artistSearch('Strokes');
const trowSucess = items => items.map(item => process.stdout.write(`- ${item.name}\n`));
responsePromise
  .then(data => trowSucess(data.artists.items));
