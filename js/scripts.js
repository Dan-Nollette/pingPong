//User Interface (UI or Front-End)
$(document).ready(function(){
  $("#ping-pong-form").submit(function(event){
    var numberInput = parseFloat($("#number-input").val());
    var output = pingPongReplacer(numberInput);
    $("#output li").remove();
    $("#output").append(output);
    event.preventDefault();
  });

  $("#StandardOrAdvanced").change(function(event){
    event.preventDefault();
    $("#ping-pong-form").toggle();
    $(".advanced-forms").toggle();
  });

  $("#numberOfMultiples").submit(function(event){
    event.preventDefault();
    var advancedInput = parseFloat($("#advanced-input").val());
    var advancedOutput = formIterator(advancedInput);
    $("#manyMultiples").append(advancedOutput);
  });
});




//Business Logic (Back-End)
function pingPongReplacer(number){
  if (number !== number || number % 1 !== 0 || number <= 0){
    alert ("That is not a valid input. Please enter a whole number greater than one.");
  } else {
    var outputString = "";
    for(var i = 1; i <= number; i++){
      if (i % 15 === 0){
        outputString += "<li>ping-pong</li>";
      }else if (i % 5 === 0){
        outputString += "<li>pong</li>";
      } else if (i % 3 === 0){
        outputString += "<li>ping</li>";
      } else {
        outputString += "<li>" + i + "</li>";
      }
    }
    return outputString;
  }
};

function formIterator(number){
  if (number !== number || number % 1 !== 0 || number <= 0){
    alert ("That is not a valid input. Please enter a whole number greater than one.");
  } else {
    var outputString = "<form action=\"index.html\" id=\"input-form-" + index + "method=\"post\"\>";
    var index = 0;
    for (; index < number; index++){
      outputString +=
      "<div class=\"form-group\"\><label for=\"numberToChange\"\>Enter a number to have it's multiples changed:</label><input id=\"numberToChange\" type=\"text\" class=\"form-group\"><label for=\"wordToChange\">Enter the word you would like change it to:</label><input id=\"wordToChange-" + index + "\" type=\"text\" class=\"form-group\">";
    }
    outputString += "<button type=\"submit\" class=\"btn\">Ping Pong!</button></div></form>"
    return outputString;
  }
};
