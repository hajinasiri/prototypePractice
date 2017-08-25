var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {

}


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {

}


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {

}


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {

}


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {

}


// adds a playlist to the library

var addPlaylist = function (name) {

}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

};

function Library (name, creator){
  console.log('Library Constructor This', this);
  this.name = name;
  this.creator = creator;
  this.playlists = [];
  this.tracks = [];

};


function Track(name, length, rating){
  this.name = name;
  this.length = length;
  this.rating = rating;

};

function Playlist(name){
  this.name = name;
  this.tracklist = [];
}


Playlist.prototype.addTrack = function(track){
  this.tracklist.push(track);
};



Library.prototype.addPlaylist = function(playlist){
  this.playlists.push(playlist);
};

Library.prototype.addTrack= function(track){
  this.tracks.push(track);
}


///////////////////////
var firstTrack = new Track("trackname", 10, 5);
var secondTrack = new Track("code Monkey", 23, 3);
var thirdTrack = new Track("Model", 14, 4);
var fourthTrack = new Track("Beach", 30, 5);

var mylibrary = new Library ("Shahab", "me");

var myplaylist = new Playlist("myplaylist");
var secondPlayList = new Playlist("second play list");
var thirdPlayList = new Playlist("third play list");

myplaylist.addTrack(firstTrack);
myplaylist.addTrack(secondTrack);

secondPlayList.addTrack(thirdTrack);
secondPlayList.addTrack(secondTrack);

thirdPlayList.addTrack(firstTrack);
thirdPlayList.addTrack(secondTrack);
thirdPlayList.addTrack(fourthTrack);

mylibrary.addPlaylist(myplaylist);
mylibrary.addPlaylist(secondPlayList);
mylibrary.addPlaylist(thirdPlayList);


// this function calculates the overal rating of a playlist

Playlist.prototype.overallRating = function(){
  var result =0;

  if(this.tracklist.length === 0){
    console.log(this.name, " is empty");
  }else{
    this.tracklist.forEach(function(track){
      result = result + track.rating;

    });
    console.log("the overal rating for " + this.name + " is " +result/this.tracklist.length);
  };

};

myplaylist.overallRating();

Playlist.prototype.totalDuration =function(){
  var result = 0;
  this.tracklist.forEach(function(track){
      result = result + track.length;

  });
  console.log("The total duration for " + this.name+ " is " +result);
}

myplaylist.totalDuration();


