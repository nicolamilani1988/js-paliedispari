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


function getSum (value1,value2){
  return value1 + value2;
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

var playBtn = document.getElementById("play");
play.addEventListener("click", function(){

  var myCaptains = document.getElementsByClassName("scelta-utente");

  for (var i=0;i<myCaptains.length;i++){
    var myCaptain = myCaptains[i];

    var isChecked = myCaptain.checked;

    if(isChecked){
      var userNumber = parseInt(myCaptain.dataset.choice);
    }
  }

  console.log("NUM UTENTE ", userNumber);

  var cpuNumber = getRnd(1,5);
  console.log("NUMERO CPU " , cpuNumber);

  var sum = getSum (cpuNumber , userNumber);
  console.log("SOMMA " , sum);

  var winner = winnerIs(sum);
  console.log("VINCE ",winner);

  var myChoices = document.getElementsByClassName("pari-dispari");
  for(var i=0;i<myChoices.length;i++){
    var myChoice = myChoices[i];
    var isChoiceChecked = myChoice.checked;
    if (isChoiceChecked){
      var oddPairUser = myChoice.dataset.value;
    }
  }

  console.log("la scelta utente è ",oddPairUser);


  var message = document.getElementById("final-result");

  if(winner == oddPairUser) {
    console.log( "VINCE UTENTE !!!!");
    message.innerHTML = "VINCE UTENTE";
  } else {
    console.log( "VINCE CPU !!!!");
    message.innerHTML = "VINCE CPU";
  }

})



// FUNZIONE , IO TI INVOCO !!!!!
// var oddPairUser = prompt("pari o dispari").toLowerCase();
// var user = parseInt(prompt("numero da 1 a 5"));
// var rnd = getRnd(1,5);
// var sum = sum(user,rnd);
// console.log("Scelta utente:",oddPairUser,"Num utente:",user,"Num Cpu:" ,rnd,"Somma Tot:", sum);
//
// var winner = winnerIs(sum);
//
// if(winner == oddPairUser) {
//   console.log( "VINCE UTENTE !!!!");
// } else {
//   console.log( "VINCE CPU !!!!");
// }
