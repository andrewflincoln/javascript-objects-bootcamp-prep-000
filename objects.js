

var playlist = { Bowie: "Heroes" }

function updatePlaylist(list, newArtist, newSong) {
  list.[newArtist] = newSong
  return list
}
