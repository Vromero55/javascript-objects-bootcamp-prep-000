var music={Prince:"song1"};
function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName]=songTitle;
return playlist;
  }
  function removeFromPlaylist(playlist, artistName){
    playlist=delete playlist.artistName;
    return playlist;
      
  }