'use strict';

function playTheGame(){
let number = 5;
let qsextry = 4;
let qussexattempt =1;
let userconfirm = confirm('Welcome! this page build to simulate a guessing game please confirm that you want to play my game ...');
if (userconfirm === true){
  // console.log('user have confirmed and want to play');
  //set inital counter score
  let score = 0;
  //take user name and alert them with greeting including there names
  let username = prompt('to proceed plz enter your name').toUpperCase();
  // console.log('Greeting mr'+username+'\n'+'Since you choose to play my game you will have five questions answer with yes or no or y or n the result will be showing to you at the end of this game');
  alert('Greeting mr'+username+'\n'+'Since you choose to play my game you will have five questions answer with yes or no or y or n the result will be showing to you at the end of this game');
  //Questionone
  let Questionone = prompt('ANSWER WITH Y/N OR YES OR NO \n'+'AM I A VEGITARIANS?').toLowerCase();
  //answer is yes/y
  if (Questionone === 'y' || Questionone === 'yes'){
    score = score + 1;
    console.log('correct answer ');
  } else if (Questionone === 'n' || Questionone === 'no'){
    score = score - 1;
    console.log('wrong answer ');
  }else{
    alert('please enter avalid input');
    console.log('user input is valid not possible answer ');
  }

  //Questiontwo
  let Questiontwo = prompt('ANSWER WITH Y/N OR YES OR NO \n'+'AM I TALLER THAN 180CM?').toLowerCase();
  //answer is yes/y
  if (Questiontwo === 'y' || Questiontwo === 'yes'){
    score = score + 1;
    console.log('correct answer ');
  } else if (Questionone === 'n' || Questionone === 'no') {
    score = score - 1;
    console.log('wrong answer ');
  }else{
    console.log('user input is valid not possible answer ');
    alert('please enter avalid input');
  }

  //Questionthree
  let Questionthree = prompt('ANSWER WITH Y/N OR YES OR NO \n'+'WHAT DO YOU THINK ID MY FAVOURITE COLOR\n?'+'FOR BLUE ANSWER WITH:Y/YES OR RED ANSWER WITH NO/N').toLowerCase();
  //answer is NO/N COLOR IS RED
  if (Questionthree === 'y' || Questionthree === 'yes'){
    score = score - 1;
    // console.log('wrong answer ');
  } else if (Questionone === 'n' || Questionone === 'no') {
    score = score + 1;
    // console.log('correct answer ');
  }else{
    alert('please enter avalid input');
    // console.log('user input is valid not possible answer ');
  }
  //Questionfour
  let Questionfour = prompt('ANSWER WITH Y/N OR YES OR NO \n'+'WHAT DO YOU THINK IS MY EYSE COLOR\n?'+'FOR BLUE ANSWER WITH:Y/YES OR FOR BROWN ANSWER WITH NO/N').toLowerCase();
  //answer is NO/N COLOR IS BROWN
  if (Questionfour === 'yes' || Questionfour === 'y'){
    score = score - 1;
    // console.log('correct answer ');
  } else if (Questionone === 'n' || Questionone === 'no') {
    score = score + 1;
    // console.log('wrong answer ');
  }else{
    alert('please enter avalid input');
    // console.log('user input is valid not possible answer ');
  }
  //Questionfive
  let Questionfive = prompt('ANSWER WITH Y/N OR YES OR NO \n'+'WHAT DO YOU THINK IS MY GENDER\n?'+'FOR FEMALE ANSWER WITH:Y/YES OR FOR MALE ANSWER WITH NO/N').toLowerCase();
  //answer is NO/N gender IS MALE
  if (Questionfive === 'yes' || Questionfive === 'y'){
    score = score - 1;
    // console.log('wrong answer ');
  } else if (Questionone === 'n' || Questionone === 'no'){
    score = score + 1;
    // console.log('correct answer ');
  }else{
    alert('please enter avalid input');
    // console.log('user input is valid not possible answer ');
  }
  //Questionsex
  for (let index = 0; index < qsextry ; index++) {
    let userguess = prompt('mr:'+username+'\n'+'please guess anumber between 1-10'+'attempt number:'+ qussexattempt);
    if ( parseInt(userguess) === number ) {
      alert('you are correct');
      score+=1;
      break;
    } else if (parseInt(userguess) < number) {
      alert('your guess is too low');
      qussexattempt++;
    } else if (parseInt(userguess) > number){
      alert('your guess is too high');
      qussexattempt++;
    } else {
      alert('enter avalid input');
      qussexattempt++;
    }
  }
  if (qussexattempt === 3){
    score = score-1 ;
  }
  //questionseven
  var howmanytry = 1;
  let favseries =['gameofthrones', 'vikings', 'mrrobot', 'attackontitan', 'tribesofeuropa','thewalkingdead','supermanandlois','ginnygeorgia','thesinner','bridgerton',];
  for (howmanytry ; howmanytry < 7; howmanytry++) {
    var useranswer = prompt('Can you guess my favorite series?'+'\n attempet'+howmanytry);
    var guess = useranswer.toLowerCase();

    for (var j = 0; j < favseries.length; j++){
      if (guess === favseries[j]) {
        alert('Congrats you got it right!!!');
        score+=score;
        howmanytry = 7;
        break;
      }
    }
    if (howmanytry !==7){
      alert('Sorry wrong answer, try again'+'\nvisit netflix it will help you'+ howmanytry);
    }
    if (howmanytry === 7 ){
      alert('no more attempts');
      for (let index = 0; index < favseries.length; index++) {
        console.log(favseries[index]);
      }
    }
  }


  alert('thanks for playing mr:'+username+'YOUR CORRECT ANSWERS IS\n' + score + 'OUT OF 7');

}else {
  // console.log('Well youre boring');
  // console.log('he didnt confirm');
  alert('Well you are boringggggggg bye bye');
}
}
playTheGame();
alert('This guessing game was modified by Omar and drived by sadoun');
//it was simple and fun to do looking forward to update this lab
//i really have no questions
//three hour rang but the set up took most of this time
