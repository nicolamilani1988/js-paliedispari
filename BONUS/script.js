// ESERCIZIO / GIOCO 1: PARI dispari
// rendo cliccabili le img e gli span
var lis = document.getElementsByTagName("li");
for (var i=0;i<lis.length;i++){
  var li = lis[i];
  li.addEventListener("click", function(){

    var radioChecked = this.children[1];

    if(radioChecked.checked){
      radioChecked.checked = false;
    } else {
      radioChecked.checked=true;
    }

  })
}

function getSum (value1,value2){
  return value1 + value2;
}

function getRnd (min,max){
  var minRnd = min;
  var maxRnd = max - minRnd + 1;
  var numRnd = Math.floor(Math.random()*maxRnd)+minRnd;
  return numRnd;
}

function opponentChoice(value){
  if(value == "pari"){
    return "dispari";
  } else if (value == "dispari"){
    return "pari";
  }
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

  if(userNumber === undefined){
    alert("Seleziona un capitano");
  } else {

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
    var resultCaptain = document.getElementById("user-choice");
    var resultCpu = document.getElementById("cpu-choice");


    if(winner == oddPairUser || winner == opponentChoice(oddPairUser)){
      message.innerHTML = "TOTALE " + sum + "<br>";
      message.innerHTML += "VINCE " + winner.toUpperCase() + "<br>";
      resultCaptain.innerHTML = "<strong>" + userNumber + "</strong>";
      resultCpu.innerHTML = "<strong>" + cpuNumber + "</strong>";
    } else {
      alert ("seleziona Pari o Dispari");
    }

    if (winner == oddPairUser){
      message.innerHTML += "VINCE CAPITANO ";
      resultCaptain.style.backgroundColor = "green";
      resultCpu.style.backgroundColor = "red";
    } else if (winner == opponentChoice(oddPairUser)){
      message.innerHTML += "VINCE MACCHINA";
      resultCaptain.style.backgroundColor = "red";
      resultCpu.style.backgroundColor = "green";
    }

  }

})


// ESERCIZIO / GIOCO 2 : PALINDROMO
function isPalindrome(word){
  var wordLower = word.toLowerCase();
  var wordLng = wordLower.length;
  for(var i= 0; i<wordLng;i++){
    if(wordLower[i] !== wordLower[wordLng-(i+1)]){
      return false;
    }
  }
  return true;
}

var checkWord = document.getElementById("palindromo");
var playPalindrome = document.getElementById("analyze-word");
var resultPalindrome = document.getElementById("palindromo-result");

playPalindrome.addEventListener("click", function(){

  if(checkWord.value.length < 1){
    alert("inserisci una parola");
  } else {
    if (isPalindrome(checkWord.value)){
      resultPalindrome.innerHTML ="LA PAROLA " + checkWord.value + " E' PALINDROMA"
    } else {
      resultPalindrome.innerHTML ="LA PAROLA " + checkWord.value + " NON E' PALINDROMA"
    }

  }

})



// isPalindrome, IO TI INVOCO !!!!
// var wordRnd = "ANNA";
// isPalindrome(wordRnd);
// console.log(isPalindrome(wordRnd));
