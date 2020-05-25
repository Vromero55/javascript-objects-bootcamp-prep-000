var playlist={Prince:"song1"};
function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName]=songTitle;
return playlist;
  }
  function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName;
   Object.assign({playlist:artistName});
    return playlist;
      
  }