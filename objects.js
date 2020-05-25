var playlist={Prince:"song1"};
function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName]=songTitle;
return playlist;
  }
  function removeFromPlaylist(playlist, artistName){
  Object.assign({artistName:"song"});
    delete artistName.song;
    return playlist;
      
  }