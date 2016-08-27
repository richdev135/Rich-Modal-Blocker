
$(document).ready(function(){
  $("#heading").html("Testing 3");

  $("#testbtn").on("click", function(){
    $("#heading").html("Testing 444");

  chrome.tabs.executeScript(null,{file:"scripts.js"});
  });

  function doit() {
    $("body").html("hello");
  }

});


