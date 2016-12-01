// albumsSongsController
var db = require('../models');

// app.get('/api/albums/:albumId/songs', controllers.albumsSongs.index);
function index(req, res) {
  db.Album.findById(req.params.albumId, function(err, foundAlbum) {
    console.log('responding with songs:', foundAlbum.songs);
    res.json(foundAlbum.songs);
  });
}

// POST '/api/albums/:albumId/songs'
function create(req, res) {
  db.Album.findById(req.params.albumId, function(err, foundAlbum) {
    console.log(req.body);
    var newSong = new db.Song(req.body);  // dangerous, in a real app we'd validate the incoming data
    foundAlbum.songs.push(newSong);
    //sort by track number
    foundAlbum.songs.sort(function(song1, song2){
      return song1.trackNumber >= song2.trackNumber;
    });
    //change numbering
    for(var i=0; i<foundAlbum.songs.length; i++){
      foundAlbum.songs[i].trackNumber = i+1;
    }

    foundAlbum.save(function(err, savedAlbum) {
      console.log('newSong created: ', newSong);
      res.json(foundAlbum);  // responding with just the song, some APIs may respond with the parent object (Album in this case)
    });
  });
}

// app.delete('/api/albums/:albumId/songs/:songId', controllers.albumsSongs.destroy);
function destroy(req, res) {
  db.Album.findById(req.params.albumId, function(err, foundAlbum) {
    console.log(foundAlbum);
    // we've got the album, now find the song within it
    var correctSong = foundAlbum.songs.id(req.params.songId);
    if (correctSong) {
      correctSong.remove();
      //changing numbering of the songs
      for(var i=0; i<foundAlbum.songs.length; i++){
        foundAlbum.songs[i].trackNumber = i+1;
      }
      // resave the album now that the song is gone
      foundAlbum.save(function(err, saved) {
        console.log('REMOVED ', correctSong.name, 'FROM ', saved.songs);
        res.json(foundAlbum);
      });
    } else {
      res.send(404);
    }
  });

}

//app.put('/api/albums/:albumId/songs/:songId', controllers.albumsSongs.update);
function update(req, res) {
  db.Album.findById(req.params.albumId, function(err, foundAlbum) {
    console.log(foundAlbum);
    // we've got the album, now find the song within it
    var correctSong = foundAlbum.songs.id(req.params.songId);
    if (correctSong) {
      console.log(req.body);
      correctSong.trackNumber = req.body.trackNumber;
      correctSong.name = req.body.name;
      foundAlbum.save(function(err, saved) {
        console.log('UPDATED', correctSong, 'IN ', saved.songs);
        res.json(correctSong);
      });
    } else {
      res.send(404);
    }
  });

}


module.exports = {
  index: index,
  create: create,
  update: update,
  destroy: destroy
};
