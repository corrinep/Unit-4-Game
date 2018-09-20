$(document).ready(function() {
  console.log("Ikuze!!")
 });

 //Pick random number between 19 and 120 

 var random = Math.floor(Math.random() * 102 + 19);
 $("#number-to-guess").text(random);

 console.log(random);

//Giving value to crystals
var num1 = Math.floor(Math.random() * 12 + 1);
var num2 = Math.floor(Math.random() * 12 + 1);
var num3 = Math.floor(Math.random() * 12 + 1);
var num4 = Math.floor(Math.random() * 12 + 1);
  

//variables for wins, losses and current total
var wins = 0;
var losses = 0;
var curentTotal = 0;

$("#wins").text(wins);
$("#losses").text(losses);

//Reset function
function reset() {
  var random = Math.floor(Math.random() * 102 + 19);
  $("#number-to-guess").text(random);
  var num1 = Math.floor(Math.random() * 12 + 1);
  var num2 = Math.floor(Math.random() * 12 + 1);
  var num3 = Math.floor(Math.random() * 12 + 1);
  var num4 = Math.floor(Math.random() * 12 + 1);
  currentTotal = 0;
  $("#score").text(currentTotal);
}

//On click events for crystals
$(".crystal-one").on ("click", function() {
currentTotal = currentTotal + num1;

$("#score").text(currentTotal);
})

$(".crystal-two").on ("click", function() {
  currentTotal = currentTotal + num2;
  
  $("#score").text(currentTotal);
  })

  $(".crystal-three").on ("click", function() {
    currentTotal = currentTotal + num3;
    
    $("#score").text(currentTotal);
    })

    $(".crystal-four").on ("click", function() {
      currentTotal = currentTotal + num4;
      
      $("#score").text(currentTotal);
      })

//If currentTotal is equal to random number, show win message and trigger reset

if (currentTotal === random){
  alert("You won!!!");
  wins++;
  $("#wins").text(wins);
  reset();
}

//If runningTotal is greater then to random number, show win message and trigger reset
else if (currentTotal > random){
  alert("Oops! You lost~");
  losses++;
  $("#losses").text(losses);
  reset();
}

