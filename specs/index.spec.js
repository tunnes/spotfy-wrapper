/* eslint-disable */
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
sinonStubPromise(sinon);
chai.use(sinonChai);

global.fetch = require('node-fetch');

import SpotifyWrapper  from '../src/index';

describe('SpotifyWrapper', () => {
    let spotifyWrapper;
    let fetchedStub;

    beforeEach(() => {
        spotifyWrapper = new SpotifyWrapper({token: 'bar'});
        fetchedStub = sinon.stub(global, 'fetch');
        fetchedStub.returnsPromise();
    });

    afterEach(function(){
        fetchedStub.restore()
    });

    it('Should a `spotifyWrapper` instantiable', () => {
        expect(spotifyWrapper).to.be.an.instanceOf(SpotifyWrapper);
    });
    
    it('Should receive `url` with attribute', () => {
        expect(spotifyWrapper.url).to.be.eql('https://api.spotify.com/v1')
    });
    
    it("Should have default path when it's not parameterized", () => {
        expect(spotifyWrapper.url).to.be.eql('https://api.spotify.com/v1');
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
        spotifyWrapper = new SpotifyWrapper({token: 'bar'});
        spotifyWrapper.request('url');
        expect(fetchedStub).to.have.been.calledWith('url');
    });
    // precisa estar utilizando o headers certo.
    it('Should request with correct request headers', () => {
        let spotify = new SpotifyWrapper({
            token: 'foo'
        });
    
        const headers = {
            headers: {
                Authorization: `'Bearer foo'`,
            },
        };
    
        spotify.request('url');
        expect(fetchedStub).to.have.been.calledWith('url', headers);
    });
});