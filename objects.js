var playlist={Prince:"song1"};
function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName]=songTitle;
return playlist;
  }
  function removeFromPlaylist(playlist, artistName){
  delete artistName.song;
    return removeFromPlaylist(playlist, Prince);
      
  }