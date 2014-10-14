$(document).ready(function(){
  toggleSong("#justin", "#baby")
  toggleSong("#selena", "#come-and-get-it")
  toggleSong("#miley",  "#wrecking-ball")

  function toggleSong(artistID, songID){
    $(artistID).click(function(){
      var song    = $(songID),
          counter = parseInt(song.find("#view-counter").text())

      hideSong(song)
      addView(song)

      function hideSong(song){
        song.toggleClass("hidden")
      }

      function addView(song){
        if (songHidden(song)) {
          counter++
          song.find("#view-counter").text(counter)
        }
      }

      function songHidden(song){
        return song.attr("class") === "song"
      }
    });
  }
});
