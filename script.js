function isPalindrome(word){

  var wordLng = word.length;

  var resFalse = "la parola non è palindroma";
  var resTrue = "la parola è palindroma";

  for(var i= 0; i<wordLng;i++){
    if(word[i] !== word[wordLng-(i+1)]){
      // console.log("nonpal");
      return resFalse;
    }
  }

  return resTrue;

}
// isPalindrome, IO TI INVOCO !!!!
// var wordRnd = "ANNA";
// isPalindrome(wordRnd);
// console.log(isPalindrome(wordRnd));


function sum (value1,value2){
  return value1+value2;
}

function getRnd (min,max){
  var minRnd = min;
  var maxRnd = max - minRnd + 1;
  var numRnd = Math.floor(Math.random()*maxRnd)+minRnd;
  return numRnd;
}

function winnerIs (numero){
  if (numero % 2 == 0){
    return "pari";
  } else {
    return "dispari";
  }
}

var oddPairUser = prompt("pari o dispari").toLowerCase();
var user = parseInt(prompt("numero da 1 a 5"));
var rnd = getRnd(1,5);
var sum = sum(user,rnd);
console.log("Scelta utente:",oddPairUser,"Num utente:",user,"Num Cpu:" ,rnd,"Somma Tot:", sum);

var winner = winnerIs(sum);

if(winner == oddPairUser) {
  console.log( "VINCE UTENTE !!!!");
} else {
  console.log( "VINCE CPU !!!!");
}
