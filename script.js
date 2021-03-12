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
var wordRnd = prompt("dimmi parola");
isPalindrome(wordRnd);
console.log(isPalindrome(wordRnd));
