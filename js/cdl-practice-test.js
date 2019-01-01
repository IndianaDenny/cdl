
//getLocation();

//global variables

let quiz = {
			
			status : false,
			score : 0,
			count : 0,
			correct : 0,
			incorrect : 0
};

let quest = [
				{ 
				question: "If an aggressive driver confronts you, what should you do?",
				image : "",
				description : "",
				explination: "When confronted with an aggressive driver, your first priority should be to get out of their way. Do not provoke the driver by making eye contact or trying to race them, and do not let yourself be provoked by them, such as by reacting to gestures.",
				right: "Try to get out of their way.",
				wrong : [
							"Make eye contact.",
							"Do not challenge them by racing.",
							"Get out and fight.",
							"Call the police."
						]	
				},
				
				{ 
				question: "If equipped with hydraulic brakes, how can the brakes be checked?",
				image : "",
				description : "",
				explination : "",
				right: "Pump the brake three times and apply firm pressure for five seconds to the brake pedal. The brake pedal should not move",
				wrong : [
							"Pump the brakes three times and apply firm pressure for five seconds to the brake pedal. The brake pedal should slowly move toward the floor",
							"Pump the brakes three times and apply firm pressure for five seconds to the brake pedal. The brake pedal should slowly rise",
							"Pump the brakes three times and apply firm pressure for five seconds to the brake pedal. THe brake pedal should be easy to push to the floor",
							"None of the above."
						]	
				},
				
				{ 
				question : "how many legs does a duck have?",
				image : "",
				description : "",
				explination : "",
				right : "2 legs",
				wrong : [
							"three legs", 
							"nine legs",
							"one legs"
						]	
				},
				
				
				{ 
				question : "how many legs does an octopus have?",
				image : "",
				description : "",
				explination : "",
				right : "8 legs",
				wrong : [
							"6 legs", 
							"10 legs",
							"20 legs",
							"4 legs",
							"7 legs",
							"24 legs"
						]	
				},
				
					{ 
				question : "how many legs does a spider have?",
				image : "",
				description : "",
				explination : "",
				right : "8 legs",
				wrong : [
							"3 legs", 
							"6 legs",
							"12 legs",
							"64 legs",
							"7 legs"
							
						]	
				}
				
				
				
			];


////////////// FUNCTIONS HERE 
function startQuiz () {
							document.getElementById('class-a').style.display='block';
							shuffle(quest);
							
							//console.log(quest);
							
							// hide start button
							//var s = document.getElementById('start');	
							//start.style="display:none";
							
							// display the quiz elements
							var x = document.getElementsByClassName('hidden').length;	
							var show = document.getElementsByClassName('hidden');
							for (i = 0; i<x; i++) {
								
								show[i].style="display:block";
								
							};					
								
								if (quiz.status == false) {	
								
								// set the status and start the quiz
								quiz.status = true; // start the quiz
															
								nextQuest();
								
								};
								
						
							
};	// end function


function nextQuest () {
	
		
	if (quiz.count >= quest.length) { // stop the quiz on the last question
	    quiz.status = false;
		console.log(quiz.status, "quiz over");
	};
	
		
	if (quiz.status == true) { 
		
		getChoices(quiz.count);// quiz started go to question number quiz.count
	};
	
		quiz.count++ // update the count after the first question. don't move
		displayStats();
};  // end function


// for each question 
	function getChoices(count) {
					
				let random_choices = [];
				let choices = [];
								question = (quest[count].question)
								choices.push (quest[count].right);
	
											for (ii = 0; ii < quest[count].wrong.length; ii++){
												
													choices.push (quest[count].wrong[ii]);
													
												};
						
						
						random_choices = shuffle(choices);
											
						askTheQuestion(count,random_choices,question);	// send choices array and question to AskTheQuestion()
	}; // end function


function askTheQuestion (count, choices, question) {
		
				
		let choiceString="";
		let i = 0;
		//let selected = question[count].right; 	// selected array is all the right answers in the current question	
	
			
			//         RENDER HTML  HERE
			//console.log(question); //log question
		
			document.getElementById('ask').innerHTML = question;		// render question 
			

			// render choices
			for ( i = 0; i < choices.length; i++){
					choiceString += "<input id=\"" + "choice" + i + "\"" + "class=\"w3-check\" type=\"checkbox\"  value=\"" + choices[i] + "\"> " + choices[i] + "<br>";
					document.getElementById("options").innerHTML =  choiceString ;
				};
			
			
			
			
			
	};	// end function



			
function checkAnswer () {
	var t=(quiz.count/quest.length)*100 + "%";
		//console.log(t);
		
		document.getElementById('myBar').style.width=t;
		
		if (quiz.status == false) {
			
			//console.log("quiz is over");
			gradeMe();
			
		}else{
	
					var check = document.getElementById('options').children;
					//console.log(check, "check");
			
					for (i=0; i < check.length; i++) { // length of child elements is 8 but only 4 checkboxes
						
						if (check[i].checked == true) { // only if the element has a checked value of true
						//	console.log(check[i].value,i, "value");
							
												if (check[i].value == quest[quiz.count-1].right) {  // if the selected answers = quest.right
													
												
													console.log("your answer is:", check[i].value);
													console.log(quest[quiz.count-1].right, "is the correct answer");
													
														
														
													quiz.score++ ; //update score
															
												
													
												}else{
										
														console.log("your answer is:", check[i].value);
														console.log("the correct answer is:",quest[quiz.count-1].right );
														
												};
							
						};
						
					
					};
				displayStats ();
				
					if (quiz.count >= quest.length) { // stop the quiz on the last question
						quiz.status = false;
						console.log(quiz.status, "quiz over");
						gradeMe();
						
					};
				nextQuest();
	
		};
	
	}; // end function		
		

function displayStats (){

					scoreStr = "score: " + quiz.score; 
					questStr = "question " + quiz.count + " of " + quest.length;
					document.getElementById('score').innerHTML = scoreStr;
					if (quiz.count <= quest.length) {
					document.getElementById('number').innerHTML = questStr;
					};
					
					//console.log("score:", quiz.score);
					console.log(questStr);
					console.log(scoreStr);
					
}	
			

		

function gradeMe(){
					
						
					
					
					var x = document.getElementsByClassName('hidden').length;	
					var show = document.getElementsByClassName('hidden');
							
							for (i = 0; i<x; i++) {
								show[i].style="display:none";
								
							};
		
					var x = document.getElementsByClassName('results').length;	
					var show = document.getElementsByClassName('results');
							
							for (i = 0; i<x; i++) {
								show[i].style="display:block";
								
							};
	
	
			resultStr = "you scored " + quiz.score + " out of " + quiz.count; 
			document.getElementById('theResults').innerHTML = resultStr;
			
		
	};
		
function _(id){ return document.getElementById(id); }	

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


	




		
