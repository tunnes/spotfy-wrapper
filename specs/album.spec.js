/* eslint-disable */

import chai, { expect } from 'chai';
import { getAlbum, getAlbumTracks, getAlbums } from '../src/album'

import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

// get albums
// get albumTracks

describe('Album Wrapper', () => {
    let fetchStub;
    let promiseStub;

    beforeEach(() => {
        fetchStub = sinon.stub(global, 'fetch');
        promiseStub = fetchStub.returnsPromise();
    });
    afterEach(() => {
        fetchStub.restore();
    });

    describe('Smoke', () => {
        it('Should `getAlbum` function exist', () => {
            expect(getAlbum).to.exist;
        });
        it('Should `getAlbumTracks` function exist', () => {
            expect(getAlbumTracks).to.exist;
        });
        it('Should `getAlbums` function exist', () => {
            expect(getAlbums).to.be.exist;
        });
    });
    describe('Get Albums', () => {
        // precisa fazer a requisição
        it('Should call fetch request', () => {
            getAlbum('0sNOF9WDwhWunNAHPD3Baj');
            expect(fetchStub).has.be.calledOnce;
        });
        
        // precisa fazer a requisição com os parametros corretos.
        it('Should call fetch request with correct parameter', () => {
            getAlbum('0sNOF9WDwhWunNAHPD3Baj');
            expect(fetchStub).has.be.calledWith("https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj");
        });

        // precisa retornar o formato correto.
        it('Should fetch response returns the correct data', () => {
            promiseStub.resolves({ album: 'name' });
            const albumResponse = getAlbum('0sNOF9WDwhWunNAHPD3Baj');
            expect(albumResponse.resolveValue).to.be.eql({ album: 'name' });
        });
    });
    describe('Get Tracks', () => {
        // precisa fazer a requisicao
        it('Should call fetch request', () => {
            getAlbumTracks('0sNOF9WDwhWunNAHPD3Baj');
            expect(fetchStub).to.be.calledOnce;
        });
        // precisa chamar o parametro correto
        it('Should call fetch request with correct parameter', () => {
            getAlbumTracks('0sNOF9WDwhWunNAHPD3Baj');
            expect(fetchStub).to.be.calledWith("https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj/tracks")
        });
        // precisa retornar o dado certo.
        it('Should fetch response returns the correct data', () => {
            promiseStub.resolves({ tracks: 'name' });
            let tracksResponse = getAlbumTracks('0sNOF9WDwhWunNAHPD3Baj');
            expect(tracksResponse.resolveValue).to.be.eql({ tracks: 'name' });
        });
    });
    describe('Get Albums', () => {
        // precisa verificar se esta chamando o fetch
        it('Should call fetch request', () => {
            getAlbums(['41MnTivkwTO3UUJ8DrqEJJ','6JWc4iAiJ9FjyK0B59ABb4']);
            expect(fetchStub).to.have.calledOnce;
        });
        
        // precisa ver se o reponse ta chamando a url certa
        it('Should call fetch request with correct parameter', () => {
            getAlbums(['41MnTivkwTO3UUJ8DrqEJJ','6JWc4iAiJ9FjyK0B59ABb4']);
            expect(fetchStub).to.have.calledWith('https://api.spotify.com/v1/albums/?ids=41MnTivkwTO3UUJ8DrqEJJ,6JWc4iAiJ9FjyK0B59ABb4');
        });

        // precisa ver se o response é o certo.
        it('Should fetch response returns the correct data', () => {
            promiseStub.resolves({ album: 'name' });
            let albumsResponse = getAlbums(['41MnTivkwTO3UUJ8DrqEJJ','6JWc4iAiJ9FjyK0B59ABb4']);
            expect(albumsResponse.resolveValue).to.be.eql({ album: 'name' });
        });
    });
});
