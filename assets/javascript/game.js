$(document).ready(function() {
//function that picks random number between 19 and 120 

var targetNumber = function(){
  randomInt(19-120)
  return Math.floor(math.random()*101 + 19);
  
}
console.log("targetNumber");

$("#number-to-guess").text(targetNumber);

var counter = 0;

//Giving value to crystals
var num1 = math.floor(math.random() * 11 + 1);
var num2 = math.floor(math.random() * 11 + 1);
var num3 = math.floor(math.random() * 11 + 1);
var num4 = math.floor(math.random() * 11 + 1);
  
});

var imageCrystalOne = $("<img>");
var imageCrystalTwo = $("<img>");
var imageCrystalThree = $("<img>");
var imageCrystalFour = $("<img>");

imageCrystalOne.addClass("crystal-image");
imageCrystalTwo.addClass("crystal-image");
imageCrystalThree.addClass("crystal-image");
imageCrystalFour.addClass("crystal-image");

