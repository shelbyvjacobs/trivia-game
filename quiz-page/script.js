// PSEUDOCODE
// create the variables:
// and array of ojects for the questions
// a variable score set to zero to track the score
// variable response that is empty to collect the user's responses


//MULTIPLE CHOICE; change to radio buttons? silver level
const questions =[
	{q: "When was bubble gum invented? \n (a) 1892 \n (b) 1928 \n (c) 1901",
	a: "b"
	},
	{q: "What is the official bubble gum of Major League Baseball? \n (a) Bubble Yum \n (b) Dubble Bubble \n (c) Bazooka",
	a: "a"
	},
	{q: "How many tons of gum are chewed every year? \n (a) 10,000 \n (b) 1,000,000 \n (c) 100,000",
	a: "c"
	}
];

let questionSection = document.querySelector("#questionSection");
let rightOrWrong = document.querySelector("#rightOrWrong");
const nextButton = document.querySelector(".next");
const startButton = document.querySelector(".start");
const mainGame = document.querySelector(".mainGame");
const form = document.querySelector('#form');
let score = 0;


//start the game
startButton.addEventListener("click", startGame);
function startGame () {
	startButton.classList.add("hide");
	mainGame.classList.remove("hide");
};

// function askQuestion () {
// 	for (let i=0; i<questions.length; i++){
// 		questionSection.innerText = questions[i].q;
// 		//for some reason on the last question is showing.
// 		//all of the questions just simultaneously/very rapidly .innerText-ing, and I only see the last one because that's where it stops...
// 		//console shows all of the questions!
// 	}
// }
// askQuestion();

function checkAnswer (index) {
	// console.log(questions[index].q)
	questionSection.innerText = questions[index].q;
	form.addEventListener("submit", function(evt){
		evt.preventDefault();
		let response = evt.target.querySelector("#response").value;
		console.log(response); //logs 3 times for each answer
		if (response.toLowerCase() == questions[index].a){
			score++
			rightOrWrong.style.color = "green"
			rightOrWrong.style.fontSize = "40px";
			rightOrWrong.innerText = "Correct!"
			nextButton.classList.remove("hide");
			//move on to next question
		} else if (response == ""){
			rightOrWrong.style.color = "black"
			rightOrWrong.style.fontSize = "20px";
			rightOrWrong.innerText = "Please enter an answer!"
		} else {
			rightOrWrong.style.color = "red"
			rightOrWrong.style.fontSize = "40px";
			rightOrWrong.innerText = "Incorrect!"
			nextButton.classList.remove("hide");
		}
	})
};

for (let i=0; i<questions.length; i++){
	console.log(i); //instantly logs every index in the array
	// questions.forEach(checkAnswer()); //what do I pass in as a parameter?
	checkAnswer(i);
};

//next button
nextButton.addEventListener("click", function(evt){
	evt.preventDefault();
	// console.log("next button clicked!")
	//load next question; i++
});

//instructions modal
const modal = document.querySelector(".modal");
const instructions = document.querySelector(".instructions");

instructions.addEventListener("click", function(evt){
	evt.preventDefault();
	modal.style.display = "block";
});

//close modal
window.addEventListener("click", function(evt) {
	evt.preventDefault();
	if (evt.target == modal) {
		modal.style.display = "none";
	}
});


// nextButton.addEventListener("click", function(evt){
// 	i+=1;
// })

// trigger this only when all of the questions have been answered.
// if (questions[i] == questions.length) {
// console.log("You got " + score + "/" + questions.length + " correct!");
// };

