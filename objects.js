var playlist={Prince:"song1", guy:"song2"};
function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName]=songTitle;
return playlist;
  }
  function removeFromPlaylist(playlist, artistName){
    delete playlist.artistName;
      
  }