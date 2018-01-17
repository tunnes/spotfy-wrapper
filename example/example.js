global.fetch = require('node-fetch');

import { artistSearch } from '../src/main';


const responsePromise = artistSearch('Strokes');
responsePromise.then(data => data.artists.items.map(item => console.log(item.name)));
