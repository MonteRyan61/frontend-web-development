//No need for script tag when in javaScript 3
function quiz(){
	let score = 0;
	let num;
	let question;
    let answer;
	let quiz_questions = [
	  'How many moons does Earth have?',
	  'How many moons does Saturn have?',
	  'How many moons does Venus have?'] //was missing end bracket ERROR 4
	;
	let quiz_answers = [1, 82, 0];
	
	//get total number of questions 
	let totalQuestion = quiz_questions.length; //needed .length to actually get the count in quiz_question ERROR 5
	
	//generate random number for question
	num = Math.floor(Math.random() * 3); //ERROR 6 num was already defined no need for let
		
	for(count = 0; count < totalQuestion; count++){ // Error 7 Incorrectly formated for. Was missing ; after the 0  also needed to be < not <=
		question = quiz_questions[num];
		answer = prompt(question);
		if (answer == quiz_answers[num]) { //ERROR neds to be double equal
			score++; //Error 8 needs to be score++; not score+;
			alert("Correct!");
		} else {
			alert("Wrong");
		}
		num++;
		if (num == totalQuestion) { //Error 9 was num = totalQuestion needs to be equality check num == totalQuestion
			num = 0;
        } //Error 10. Was missing a } to close the if statement
    } //Error 11 was missing {} for the for loop 
    //ERROR the right was wrong do not want this to be printed multiple times
    //Had to change this to get it to write into the correct area
    const questionAreaText = document.getElementById("questionArea");
    questionAreaText.innerHTML += "<p>You got " + score + " out of " + totalQuestion + " questions correct.</p>";
}