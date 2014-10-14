$(document).ready(function(){
  toggleSong("#justin", "#baby")
  toggleSong("#selena", "#come-and-get-it")
  toggleSong("#miley",  "#wrecking-ball")

  colorizeSong("#baby")
  colorizeSong("#come-and-get-it")
  colorizeSong("#wrecking-ball")

  increaseText("#baby")
  increaseText("#come-and-get-it")
  increaseText("#wrecking-ball")

  decreaseText("#baby")
  decreaseText("#come-and-get-it")
  decreaseText("#wrecking-ball")

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

  function colorizeSong(songID){
    var song = $(songID)

    song.find("#colorize").click(function(){
      song.toggleClass("colorize")
    })
  }

  function increaseText(songID){
    var song = $(songID)

    song.find("#increase-text-size").click(function(){
      var fontSize = parseInt(song.css("font-size").slice(0, -2))

      song.css("font-size", fontSize + (fontSize * 0.1) + "px")
    })
  }

  function decreaseText(songID){
    var song = $(songID)

    song.find("#decrease-text-size").click(function(){
      var fontSize = parseInt(song.css("font-size").slice(0, -2))

      song.css("font-size", fontSize - (fontSize * 0.1) + "px")
    })
  }
});
