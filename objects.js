var playlist={Prince:"song1"};
function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName]=songTitle;
return playlist;
  }
  function removeFromPlaylist(playlist, artistName){
  playlist.assign({artistName:"song"});
    delete playlist.artistName;
    return playlist;
      
  }