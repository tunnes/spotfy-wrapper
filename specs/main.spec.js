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

import { generalSearch, artistSearch, albumSearch, trackSearch, playlistSearch  } from '../src/main'; // Important! not use extension files for example main.js

global.fetch = require('node-fetch'); // Active node-fetch to global spec scope.

describe("Spotfy Wrapper", function() {
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
    it("Should exist a search", function(){
      expect(generalSearch).to.exist;
    });
    
    it("Should search is an function", function(){
      expect(generalSearch).to.be.a('function');
    });

    it("Should search call fetch request", function(){
      generalSearch();
      expect(fetchedStub).to.have.been.calledOnce;
    });
  });
  describe("General Search", function(){
    context("With one type in request parameter", function(){
      it("Should send fetch request to correct URL resource", function(){
        const artists = generalSearch('Strokes', 'artist');
        expect(fetchedStub).to.have.been.calledWith("https://api.spotify.com/v1/search?q=Strokes&type=artist");

        const album = generalSearch('Strokes', 'album');
        expect(fetchedStub).to.have.been.calledWith("https://api.spotify.com/v1/search?q=Strokes&type=album");
      });
    });

    context("With multiple types in request parameter", function(){
      it("Should send fetch request to correct URL resource", function(){
        const artists = generalSearch('Strokes', ['artist','track']);
        expect(fetchedStub).to.have.been.calledWith("https://api.spotify.com/v1/search?q=Strokes&type=artist,track")
      });
    });
    
    it("Should return JSON data in fetch response", function(){
      promiseStub.resolves({ body: "json" });
      const response = generalSearch("Strokes", "artist");
      expect(response.resolveValue).to.be.eql({ body: "json" });
    });
  });

  describe("Artists Search", function(){
    it("Should call fetch function", function(){
      artistSearch("Strokes");
      expect(fetchedStub).to.have.been.calledOnce;
    });
    it("Should send fetch request to correct URL resource", function(){
      artistSearch("Strokes");
      expect(fetchedStub).to.have.been.calledWith("https://api.spotify.com/v1/search?q=Strokes&type=artist")
    });
    it("Should return JSON data in fetch response", function(){
      promiseStub.resolves({ body: "json" });
      const response = artistSearch("Strokes");
      expect(response.resolveValue).to.be.eql({ body: "json" });
    });
  });

  describe("Albums Search", function(){
    it("Should call fetch function", function(){
      albumSearch("Reptia");
      expect(fetchedStub).to.have.been.calledOnce;
    });
    it("Should send fetch request to correct URL resource", function(){
      albumSearch("Reptia");
      expect(fetchedStub).to.have.been.calledWith("https://api.spotify.com/v1/search?q=Reptia&type=album")
    });
    it("Should return JSON data in fetch response", function(){
      promiseStub.resolves({ body: "json" });
      const response = albumSearch("Reptia");
      expect(response.resolveValue).to.be.eql({ body: "json" });
    });
  });

  describe("Tracks Search", function(){
    it("Should call fetch function", function(){
      trackSearch("Otherside");
      expect(fetchedStub).to.have.been.calledOnce;
    });
    it("Should send fetch request to correct URL resource", function(){
      trackSearch("Otherside");
      expect(fetchedStub).to.have.been.calledWith("https://api.spotify.com/v1/search?q=Otherside&type=track")
    });
    it("Should return JSON data in fetch response", function(){
      promiseStub.resolves({ body: "json" });
      const response = trackSearch("Otherside");
      expect(response.resolveValue).to.be.eql({ body: "json" });
    });
  });

  describe("Playlist Search", function(){
    it("Should call fetch function", function(){
      playlistSearch("Indezinho");
      expect(fetchedStub).to.have.been.calledOnce;
    });
    it("Should send fetch request to correct URL resource", function(){
      playlistSearch("Indezinho");
      expect(fetchedStub).to.have.been.calledWith("https://api.spotify.com/v1/search?q=Indezinho&type=playlist")
    });
    it("Should return JSON data in fetch response", function(){
      promiseStub.resolves({ body: "json" });
      const response = playlistSearch("Indezinho");
      expect(response.resolveValue).to.be.eql({ body: "json" });
    });
  });
});
