

//


var btn = document.getElementById("btn");

//	btn.addEventListener("click", function() {

function Quiz (score, count, right, wrong, status ){
	
	this.score = score;
	this.count = count;
	this.right = right;
	this.wrong = wrong;
	this.status = status;
};




btn.addEventListener("click", function() {				
							
				var i = 0;
				var ii = 0;
				var choices = [];
				var random_choices = [];
				var choiceString ="";	
				
				
								
				//set quiz properties to new quiz
				var quiz = new Quiz;
				quiz.score=0;
				quiz.count=0; // the question number
				quiz.right=0;
				quiz.status=true; //test has begun
				
								
				var  ourRequest = new XMLHttpRequest();
				ourRequest.open('GET', 'http://localhost/cdl/json/exam-3.json');
						
							ourRequest.onload = function(){
									var ourData = JSON.parse(ourRequest.responseText);
													
																							
												//log test status
												console.log(status);
												
														//fill a new array with the wrong answers and push in the right answer
														for (i=0; i < ourData[quiz.count].answer.wrong.length; i++) {
																
															//	console.log (ourData[0].answer.wrong.length);								
																choices[i] = ourData[quiz.count].answer.wrong[i];
														};
												
												//push the right anwer into the array choices and then randomize the order into a new arraw random_choices
													choices.push(ourData[quiz.count].answer.right);										
													random_choices = shuffle(choices);
													
														// create a string of html inputs 	
														
														choiceString += "<form class=\"w3-container w3-card-4\">"
															for (i=0; i < choices.length; i++) {
																		choiceString += "<p><input class=\"w3-check\" type=\"checkbox\"  value=\"" + random_choices[i] + "\"> " + random_choices[i] + "</p>";
																		
															};
													choiceString += "</form> <br>"
													
													
													renderQuestion(ourData[quiz.count].question);
													renderAnswers(choiceString);
													//renderExplination(ourData[0].explination);
													
													quiz.count ++;
													_("position").innerHTML = quiz.count + " of " + ourData.length;
													console.log(quiz.count);
													
													var move_bar = function(x) {
														
															var elem = document.getElementById("myBar"); 
															var width = quiz.count;
											
															elem.style.width = width + '%'; 
													
													};
													
													
									
							};
						
				
			ourRequest.send();
			
			btn.innerHTML="check answer";
			

	});


function move(x) {
			
    
}



function _(x) {
	return document.getElementById(x);
	
}



// render functions
		function renderQuestion(question) {
			
			document.getElementById("quiz").innerHTML = question;
		}
		function renderExplination(explination) {
			
			
			document.getElementById("explination").innerHTML = explination;
		}

		function renderAnswers(answers) {
				
				document.getElementById("choice").innerHTML = answers;
			
		}






// shuffle function
		function shuffle(array) {
		  var currentIndex = array.length, temporaryValue, randomIndex;

		  // While there remain elements to shuffle...
		  while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		  }

		  return array;
		}



