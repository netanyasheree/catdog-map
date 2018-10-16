var winner;
var createPet = function(name, nameS, color) {
	var pet = {};
	pet.name = name;
	pet.pollResults = null;
	pet.color = color;
	pet.nameS = nameS;
	pet.totalStatesWon = 0;

	return pet;
};

//creating pets passing in names and rgb colors
var cat = createPet("Cat States", "cats", [190, 183, 223]);
var dog = createPet("Dog States", "dogs", [119, 191, 163]);


cat.pollResults = [1,1,1,1,1.1,1.1,1.57,1.1,1.5,1.1,1,1.1,1.1,1.1,1.1,1.1,1,1,1,1.66,1.83,1.87,1.1,1.1,1,1,1,1.1,1.1,1.46,1.1,1,1.4,1,1.1,1.39,1,1.1,1.43,1.1,1,1.1,1,1,1.1,1.65,1.1,1.1,1,1.1,1.1];

dog.pollResults = [1.1,1,1.25,1.35,1,1,1,1,1,1,1.15,1,1,1,1,1,1.1,1.1,1.27,1,1,1,1,1,1.27,1.2,1.1,1,1,1,1,1.32,1,1.1,1,1,1.27,1,1,1,1.1,1,1.23,1.29,1,1,1,1,1.1,1,1];


tallyStatesWon = function() {
	for (var i = 0; i < cat.pollResults.length; i++) {
		if (cat.pollResults[i] > dog.pollResults[i]) {
			cat.totalStatesWon++;
		} else if (cat.pollResults[i] < dog.pollResults[i]) {
			dog.totalStatesWon++;
		}
	}
 };
 

var setStateResults = function(state) {

	theStates[state].winner = null;

	if (cat.pollResults[state] > dog.pollResults[state]) {
		theStates[state].winner = cat;
	} else if (cat.pollResults[state] < dog.pollResults[state]) {
		theStates[state].winner = dog;
	}

	//changing states' colors based on winner
	var stateWinner = theStates[state].winner;

	if (stateWinner !== null) {
		theStates[state].rgbColor = stateWinner.color;
	} else {
		theStates[state].rgbColor = [143, 171, 214];
	}

	//populate bottom table
	var stateResults = document.getElementById("stateResults");

	var header = stateResults.children[0].children[0];

	var stateName = header.children[0];
	stateName.innerText = theStates[state].nameFull;

	var stateAbbrev = header.children[1];
	stateAbbrev.innerText = theStates[state].nameAbbrev;

	var stateWinnerName = stateResults.children[1].children[0].children[1];
	if (stateWinner !== null) {
		stateWinnerName.innerText = stateWinner.nameS;
	} else {
		stateWinnerName.innerText = "DRAW";
	}
}

// get total #s by tallying up number of pets
tallyStatesWon();


//declare winner
if (cat.totalStatesWon > dog.totalStatesWon) {
	winner = cat.nameS;
} else if (cat.totalStatesWon < dog.totalStatesWon) {
	winner = dog.nameS;
} else {
	winner = "a draw";
}


//populate top table
var countryResults = document.getElementById("countryResults");

var row = countryResults.children[0].children[0]; //make code following clean + neat!

row.children[0].innerText = cat.name;
row.children[1].innerText = cat.totalStatesWon;
row.children[2].innerText = dog.name;
row.children[3].innerText = dog.totalStatesWon;
row.children[5].innerText = winner;
