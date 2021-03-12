function isPalindrome(word){

  var wordLng = word.length;

  var resTrue = "la parola non è palindroma";
  var resFalse = "la parola è palindroma";

  for(var i= 0; i<wordLng;i++){
    if(word[i] !== word[wordLng-(i+1)]){
      // console.log("nonpal");
      return resTrue;
    } else {
      // console.log("palprov");
      return resFalse;
    }
  }

}
// isPalindrome, IO TI INVOCO !!!!
// var wordRnd = prompt("dimmi parola");
// isPalindrome(wordRnd);
// console.log(isPalindrome(wordRnd));


var oddPairUser = prompt("pari o dispari");
var user = parseInt(prompt("numero da 1 a 5"));


function sum (value1,value2){
  var sum = value1+value2;
  return sum;
}

function getRnd (){
  var numRnd = Math.floor(Math.random()*5)+1;
  return numRnd;
}



var rnd = getRnd();
var sum = sum(user,rnd);
console.log(oddPairUser, user, rnd, sum);
var whoWin = "dispari";
if(sum % 2 == 0){
  whoWin = "pari";
}

var winner = "cpu VINCE";
if(whoWin == oddPairUser){
  winner = "user VINCE";
}

console.log(winner);
