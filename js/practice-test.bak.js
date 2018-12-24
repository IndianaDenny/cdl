
var btn = document.getElementById("btn");
btn.addEventListener("click", function() {
var i = 0;
				var ii = 0;
				var choices = [];
				var random_choices = [];
				var choiceString ="";	
				var  ourRequest = new XMLHttpRequest();
				ourRequest.open('GET', 'http://localhost/cdl/json/exam-2.json');
						
				ourRequest.onload = function(){
				
				
									var ourData = JSON.parse(ourRequest.responseText);
									
									
									
									//fill a new array with the wrong answers and push in the right answer
									for (i=0; i < ourData[0].answer.wrong.length; i++) {
											
										//	console.log (ourData[0].answer.wrong.length);								
											choices[i] = ourData[0].answer.wrong[i];
									};
									
									//push the right anwer into the array choices and then randomize the order into a new arraw random_choices
										choices.push(ourData[0].answer.right);										
										random_choices = shuffle(choices);
										
									// create a string of html inputs 	
										for (ii=0; ii < choices.length; ii++) {
													choiceString += "<form><input type=\"radio\" value=\"" + random_choices[ii] + "\">" + random_choices[ii] + "<br></form>";
													
										};
										
										renderQuestion(ourData[0].question);
										renderExplination(ourData[0].explination);
										renderAnswers(choiceString);
				}
						
				
	ourRequest.send();
	

});

function renderTest () {
				
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



