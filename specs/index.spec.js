/* eslint-disable */
import chai, { expect } from 'chai';
import SpotifyWrapper  from '../src/index';

import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai)

global.fetch = require('node-fetch');

describe('SpotifyWrapper', () => {
    let spotifyWrapper;
    let fetchedStub;

    beforeEach(() => {
        spotifyWrapper = new SpotifyWrapper({url: 'foo', token: 'bar'});
        fetchedStub = sinon.stub(global, 'fetch');
        
    });

    afterEach(function(){
        fetchedStub.restore()
    });

    it('Should a `spotifyWrapper` instantiable', () => {
        expect(spotifyWrapper).to.be.an.instanceOf(SpotifyWrapper);
    });
    
    it('Should receive `basePath` with attribute', () => {
        expect(spotifyWrapper.basePath).to.be.eql('https://api.spotify.com/v1')
    });
    
    it("Should have default path when it's not parameterized", () => {
        expect(spotifyWrapper.basePath).to.be.eql('https://api.spotify.com/v1');
    })
    
    it('Should receive `token` with attribute', () => {        
        expect(spotifyWrapper.token).to.be.eql('bar')
    });

    // precisa existir uma metodo de requisição.
    it('Should exist the request method on `SpotifyWrapper` class', () => {
        expect(spotifyWrapper.request).to.be.a('function');
    })
    // precisa fazer a requisição para a url correta.
    it('Should request to correct URL', () => {
        spotifyWrapper.request('url')
        expect(fetchedStub).to.have.been.calledWith('url');
    });
    // precisa estar utilizando o headers certo.
    it('Should request with correct request headers', () => {
        const header = {
            headers: {
              Authorization: `Bearer bar`,
            },
        };
        spotifyWrapper.request('url')
        expect(fetchedStub).to.have.been.calledWith('url', header);
    });
});