var roman = [];

var transformOne = function(userInput) {
  if (userInput[3] === "4" || userInput[3] === "5" ||  userInput[3] === "6" || userInput[3] === "7" || userInput[3] === "8" || userInput[3] === "9" || userInput[3] === "0") {
    roman.push("Please enter a number 3999 or below. :)");
    userInput=[]
    return roman;
  } else if (userInput[0] === "1") {
    roman.push("I");
    return roman;
  } else if (userInput[0] === "2") {
    roman.push("II");
    return roman;
  } else if (userInput[0] === "3") {
    roman.push("III");
    return roman;
  } else if (userInput[0] === "4") {
    roman.push("IV");
    return roman;
  } else if (userInput[0] === "5") {
    roman.push("V");
    return roman;
  } else if (userInput[0] === "6") {
    roman.push("VI");
    return roman;
  } else if (userInput[0] === "7") {
    roman.push("VII");
    return roman;
  } else if (userInput[0] === "8") {
    roman.push("VIII");
    return roman;
  } else if (userInput[0] === "9") {
    roman.push("IX");
    return roman;
  } else {
    roman.push("");
    return roman;
  }

};
var transformTwo = function(userInput) {

  if (userInput[3] === "4" || userInput[3] === "5" ||  userInput[3] === "6" || userInput[3] === "7" || userInput[3] === "8" || userInput[3] === "9" || userInput[3] === "0") {
    roman.push("");
    userInput=[]
    return roman;
  } else if (userInput[1] === "1") {
    roman.push("X");
    return roman;
  } else if (userInput[1] === "2") {
    roman.push("XX");
    return roman;
  } else if (userInput[1] === "3") {
    roman.push("XXX");
    return roman;
  } else if (userInput[1] === "4") {
    roman.push("XL");
    return roman;
  } else if (userInput[1] === "5") {
    roman.push("L");
    return roman;
  } else if (userInput[1] === "6") {
    roman.push("LX");
    return roman;
  } else if (userInput[1] === "7") {
    roman.push("LXX");
    return roman;
  } else if (userInput[1] === "8") {
    roman.push("LXXX");
    return roman;
  } else if (userInput[1] === "9") {
    roman.push("XC");
    return roman;
  }
};
var transformThree = function(userInput) {

  if (userInput[3] === "4" || userInput[3] === "5" ||  userInput[3] === "6" || userInput[3] === "7" || userInput[3] === "8" || userInput[3] === "9" || userInput[3] === "0") {
    roman.push("");
    userInput=[]
    return roman;
  } else if (userInput[2] === "1") {
    roman.push("C");
    return roman;
  } else if (userInput[2] === "2") {
    roman.push("CC");
    return roman;
  } else if (userInput[2] === "3") {
    roman.push("CCC");
    return roman;
  } else if (userInput[2] === "4") {
    roman.push("CD");
    return roman;
  } else if (userInput[2] === "5") {
    roman.push("D");
    return roman;
  } else if (userInput[2] === "6") {
    roman.push("DC");
    return roman;
  } else if (userInput[2] === "7") {
    roman.push("DCC");
    return roman;
  } else if (userInput[2] === "8") {
    roman.push("DCCC");
    return roman;
  } else if (userInput[2] === "9") {
    roman.push("CM");
    return roman;
  }
};
var transformFour = function(userInput) {

  if (userInput[3] === "4" || userInput[3] === "5" ||  userInput[3] === "6" || userInput[3] === "7" || userInput[3] === "8" || userInput[3] === "9" || userInput[3] === "0") {
    roman.push("");
    userInput=[]
    return roman;
  } else if (userInput[3] === "1") {
    roman.push("M");
    return roman;
  } else if (userInput[3] === "2") {
    roman.push("MM");
    return roman;
  } else if (userInput[3] === "3") {
    roman.push("MMM");
    return roman;
  } else {

  }
};

$(document).ready(function(){
  $("#roman-form").submit(function(event){

    event.preventDefault();
    var userInput = $("#number-input").val().split("").reverse();

    var romanNumeralOne = transformOne(userInput);
    var romanNumeralTwo = transformTwo(userInput);
    var romanNumeralThree = transformThree(userInput);
    var romanNumeralFour = transformFour(userInput);
    alert(romanNumeralOne.reverse().join(""));
  });
});
