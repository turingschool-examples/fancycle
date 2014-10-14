$(document).ready(function(){
  $("#justin").click(function(){
    var counter = parseInt($("#baby").find("#view-counter").text())

    $("#baby").toggleClass("hidden")

    if ($("#baby").attr("class") === "song hidden") { counter++ }

    $("#baby").find("#view-counter").text(counter)
  });
});
