
$(document).ready(function(){

  $("#testbtn").on("click", function(){
    $("#heading").html("After click");

    chrome.tabs.executeScript(null,{file:"scripts.js"});
  });
});




