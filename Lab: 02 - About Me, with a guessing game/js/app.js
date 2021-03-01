'use strict';
let userconfirm = confirm('Welcome! this page build to simulate a guessing game please confirm that you want to play my game ...');
if (userconfirm === true){
  //set inital counter score
  let score = 0;
  //take user name and alert them with greeting including there names
  let username = prompt('to proceed plz enter your name').toupperCase();
  console.log('Greeting mr'+username+'\n'+'Since you choose to play my game you will have five questions answer with yes or no or y or n the result will be showing to you at the end of this game');
  alert('Greeting mr'+username+'\n'+'Since you choose to play my game you will have five questions answer with yes or no or y or n the result will be showing to you at the end of this game');
  //Questionone
  let Questionone = prompt('ANSWER WITH Y/N OR YES OR NO \n'+'AM I A VEGITARIANS?').tolowreCase();
  //answer is yes/y
  if (Questionone === 'y' || Questionone === 'yes'){
    score = score + 1;
  } else {
    score = score - 1;
  }

  //Questiontwo
  let Questiontwo = prompt('ANSWER WITH Y/N OR YES OR NO \n'+'AM I TALLER THAN 180CM?').tolowreCase();
  //answer is yes/y
  if (Questiontwo === 'y' || Questiontwo === 'yes'){
    score = score + 1;
  } else {
    score = score - 1;
  }

  //Questionthree
  let Questionthree = prompt('ANSWER WITH Y/N OR YES OR NO \n'+'WHAT DO YOU THINK ID MY FAVOURITE COLOR\n?'+'FOR BLUE ANSWER WITH:Y/YES OR RED ANSWER WITH NO/N').tolowreCase();
  //answer is NO/N COLOR IS RED
  if (Questionthree === 'y' || Questionthree === 'yes'){
    score = score - 1;
  } else {
    score = score + 1;
  }
  //Questionfour
  let Questionfour = prompt('ANSWER WITH Y/N OR YES OR NO \n'+'WHAT DO YOU THINK IS MY EYSE COLOR\n?'+'FOR BLUE ANSWER WITH:Y/YES OR FOR BROWN ANSWER WITH NO/N').tolowreCase();
  //answer is NO/N COLOR IS BROWN
  if (Questionfour === 'yes' || Questionfour === 'y'){
    score = score - 1;
  } else {
    score = score + 1;
  }
  //Questionfive
  let Questionfive = prompt('ANSWER WITH Y/N OR YES OR NO \n'+'WHAT DO YOU THINK IS MY GENDER\n?'+'FOR FEMALE ANSWER WITH:Y/YES OR FOR MALE ANSWER WITH NO/N').tolowreCase();
  //answer is NO/N COLOR IS MALE
  if (Questionfive === 'yes' || Questionfive === 'y'){
    score = score - 1;
  } else {
    score = score + 1;
  }

  alert('YOUR CORRECT ANSWERS IS\n' + score + 'OUT OF 5');

} else {
  console.log('Well youre boring');
  alert('Well youre boringggggggg');
}
