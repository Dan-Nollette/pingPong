//User Interface (UI or Front-End)
$(document).ready(function(){
  $("#ping-pong-form").submit(function(event){
    var numberInput = $("#number-input").val();
    var output = numberInput;
    $("#output").text(output);
    event.preventDefault();
  });
});
