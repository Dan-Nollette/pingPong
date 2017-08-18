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

// $(document).ready(function(){
//     $("#multi-input-form").submit(function(event){
//     var numbersWithMultiples = [];
//     var changeTo =[];
//     var changedAlready = [];
//     var numberInputAdvanced = parseFloat($("#number-input-advanced").val());
//     for (var i = 0; i < numberInputAdvanced ; 1++) {
//       changedAlready.push(false);
//     }
//
//     numbersWithMultiples.push(parseFloat($("#numberToChange-" + i).val());
//     changeTo.push("wordToChange-" + i);
//
//     for(var j = 0; j * numbersWithMultiples[i] < numberInputAdvanced; j++){
//       if (changedAlready[j * numbersWithMultiples[i]]) {
//
//       }
//     }
//   });
// });



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
    var outputString = "<form action=\"index.html\" id=\"multi-input-form\" method=\"post\"\><div class=\"form-group\"><label for=\"number-input-advanced\">Enter the number to count up to here:</label><input id=\"number-input-advanced\" type=\"text\" class=\"form-group\"></div><br><br>";
    var index = 0;
    for (; index < number; index++){
      outputString +=
      "<div class=\"form-group\"\><label for=\"numberToChange-" + index + "\"\>Enter a number to have it's multiples changed:</label><input id=\"numberToChange-" + index + "\" type=\"text\" class=\"form-group\"><label for=\"wordToChange-" + index + "\">Enter the word you would like change it to:</label><input id=\"wordToChange-" + index + "\" type=\"text\" class=\"form-group\"></div>";
    }
    outputString += "<button type=\"submit\" class=\"btn\">Ping Pong!</button></div></form>"
    return outputString;
  }
};
