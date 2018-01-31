/* eslint-disable */
/**
 * Spotfy Wrapper
 * This is an simple exercise to put in praticle some concepts learned in Js TDD course.
 * in this exercise i should use the Spotfy API to get and provide to user the follow requirements:
 * - General search by whatever thing.
 * - Search by artists, albums, playlistss and tracks.
 * */

import chai, { expect } from 'chai';

import sinon from 'sinon';                         // Import sinon to use stubs.
import sinonChai from 'sinon-chai';                // Import sinonChai Chai to use sion with Chai lib.
import sinonStupPromise from 'sinon-stub-promise'; // Import sinonStubPromise to emule an promise in node to sinon work better.

chai.use(sinonChai);      // Tells to chai to use sinonChai.
sinonStupPromise(sinon)   // Tells to sinonStupPromise to use sinon stubs.

import SpotifyWrapper from '../src/index';

global.fetch = require('node-fetch'); // Active node-fetch to global spec scope.

describe("Search Wrapper", function() {
  let spotifyWrapper = new SpotifyWrapper({ token: 'foo'});
  let fetchedStub;
  let promiseStub;
  
  beforeEach(function(){
    fetchedStub = sinon.stub(global, 'fetch');
    promiseStub = fetchedStub.returnsPromise();
  });
  
  afterEach(function(){
    fetchedStub.restore()
  });
  
  describe("Smoke", function(){
    it("Should exist a `spotifyWrapper.search.albums` function", function(){
      expect(spotifyWrapper.search.albums).to.exist;
    });
    it("Should exist a `spotifyWrapper.search.artists` function", function(){
      expect(spotifyWrapper.search.artists).to.exist;
    });
    it("Should exist a `spotifyWrapper.search.playlists` function", function(){
      expect(spotifyWrapper.search.playlists).to.exist;
    });
    it("Should exist a `spotifyWrapper.search.tracks` function", function(){
      expect(spotifyWrapper.search.tracks).to.exist;
    });
  });
  describe("Artists Search", function(){
    it("Should call fetch function", function(){
      spotifyWrapper.search.artists("Strokes");
      expect(fetchedStub).to.have.been.calledOnce;
    });
    it("Should send fetch request to correct URL resource", function(){
      spotifyWrapper.search.artists("Strokes");
      expect(fetchedStub).to.have.been.calledWith("https://api.spotify.com/v1/search?q=Strokes&type=artist")
    });
    it("Should return JSON data in fetch response", function(){
      promiseStub.resolves({ body: "json" });
      const response = spotifyWrapper.search.artists("Strokes");
      expect(response.resolveValue).to.be.eql({ body: "json" });
    });
  });

  describe("Albums Search", function(){
    it("Should call fetch function", function(){
      spotifyWrapper.search.albums("Reptia");
      expect(fetchedStub).to.have.been.calledOnce;
    });
    it("Should send fetch request to correct URL resource", function(){
      spotifyWrapper.search.albums("Reptia");
      expect(fetchedStub).to.have.been.calledWith("https://api.spotify.com/v1/search?q=Reptia&type=album")
    });
    it("Should return JSON data in fetch response", function(){
      promiseStub.resolves({ body: "json" });
      const response = spotifyWrapper.search.albums("Reptia");
      expect(response.resolveValue).to.be.eql({ body: "json" });
    });
  });

  describe("Tracks Search", function(){
    it("Should call fetch function", function(){
      spotifyWrapper.search.tracks("Otherside");
      expect(fetchedStub).to.have.been.calledOnce;
    });
    it("Should send fetch request to correct URL resource", function(){
      spotifyWrapper.search.tracks("Otherside");
      expect(fetchedStub).to.have.been.calledWith("https://api.spotify.com/v1/search?q=Otherside&type=track")
    });
    it("Should return JSON data in fetch response", function(){
      promiseStub.resolves({ body: "json" });
      const response = spotifyWrapper.search.tracks("Otherside");
      expect(response.resolveValue).to.be.eql({ body: "json" });
    });
  });

  describe("Playlist Search", function(){
    it("Should call fetch function", function(){
      spotifyWrapper.search.playlists("Indezinho");
      expect(fetchedStub).to.have.been.calledOnce;
    });
    it("Should send fetch request to correct URL resource", function(){
      spotifyWrapper.search.playlists("Indezinho");
      expect(fetchedStub).to.have.been.calledWith("https://api.spotify.com/v1/search?q=Indezinho&type=playlist")
    });
    it("Should return JSON data in fetch response", function(){
      promiseStub.resolves({ body: "json" });
      const response = spotifyWrapper.search.playlists("Indezinho");
      expect(response.resolveValue).to.be.eql({ body: "json" });
    });
  });
});
