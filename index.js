function gibberish(input) {
  // code here
  var strarray = input.split('');
  var returned = strarray.map(function(letter) {
    if (letter === "o") {
      return "0";
    } else if (letter === "i") {
      return "1";
    } else if (letter === "e") {
      return "3";
    } else if (letter === "a") {
      return "4";
    } else if (letter === "s") {
      return "5";
    } else {
      return letter;
    }
  });
  return returned.join('');

}

// don't touch below this line :wink:
// --------------------------------------------------------------

var text = 'Un chasseur sachant chasser sans son chien est un bon chasseur';
var converted = gibberish(text);
var verif = 'Un ch4553ur 54ch4nt ch4553r 54n5 50n ch13n 35t un b0n ch4553ur';
console.info('Your text:    ' + converted,
          '\nVerification: ' + verif);

if (converted !== verif) {
 throw new Error('PWND!')
}
console.info(':clap: w311 d0n3! :dancers:');

console.info(gibberish("Hello World!!!!"));