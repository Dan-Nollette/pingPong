//User Interface (UI or Front-End)
$(document).ready(function(){
  $("#ping-pong-form").submit(function(event){
    var numberInput = parseFloat($("#number-input").val());
    var output = pingPongReplacer(numberInput);
    $("li").remove();
    $("#output").append(output);
    event.preventDefault();
  });
});

function pingPongReplacer(number){
  if (number !== number || number % 1 !== 0 || number <= 0){
    alert ("That is not a valid input. Please enter a whole number greater than one.");
  } else {
    var outputString = "";
    for(var i = 0; i < number; i++){
      outputString += "<li>" + (i + 1) + "</li>";
    }
    return outputString;
  }
};
