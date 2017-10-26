var rom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
var num = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

var transform = function(input){
  var romanNumeral = "";
  if (input === 0) {
    return "Invalid Number";
  } else if (input > 3999) {
    return "Invalid Number";
  }
  for (var i = 0; i < rom.length; i++) {
    while (input >= num[i]) {
      romanNumeral += rom[i];
      input -= num[i];
    }
  }
  return romanNumeral;
};

$(document).ready(function(){
  $("#roman-form").submit(function(event){
    event.preventDefault();


    var userInput = parseInt($("#number-input").val());

    var romanNumeral = transform(userInput);
    alert(romanNumeral);
  });
});
