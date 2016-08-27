
$(document).ready(function(){
  $("#heading").html("Testing 3");

  $("#testbtn").on("click", function(){
    $("#heading").html("Testing 444");

    $("body").html("hello");
  });


});


