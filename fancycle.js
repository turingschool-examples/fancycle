$(document).ready(function(){
  toggleSong("#justin", "#baby");
  toggleSong("#selena", "#come-and-get-it");
  toggleSong("#miley", "#wrecking-ball");
});

function toggleSong (artist, song) {
  $(artist).click(function(){
    var buttonText  = $(this).text(),
        textLength  = buttonText.length - 1,
        text        = buttonText.substr(0, textLength),
        counterText = buttonText.charAt(textLength),
        count       = parseInt(counterText);

    if ($(song).attr("class") === "song hidden") { count++ }

    $(this).text(text + count);
    $(song).toggleClass("hidden");
  });
}
