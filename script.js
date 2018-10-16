var winner;
var createPolitician = function(name, partyColor) {
	var politician = {};
	politician.name = name;
	politician.electionResults = null;
	politician.partyColor = partyColor;

	politician.tallyVotes = function() {
		this.totalVotes = 0;

		for (var i = 0; i < this.electionResults.length; i++) {
			this.totalVotes = this.totalVotes + this.electionResults[i];
		}
	};

	return politician;
};

//creating politicians passing in names and rgb party colors
var sandra = createPolitician("Sandra Dee", [132, 17, 11]);
var veronica = createPolitician("Veronica Mars", [245, 141, 136]);

console.log("Sandra's color is " + sandra.partyColor);
console.log("Veronica's color is " + veronica.partyColor);

sandra.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

veronica.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

sandra.electionResults[9] = 1;
veronica.electionResults[9] = 28;

sandra.electionResults[4] = 17;
veronica.electionResults[4] = 38;

sandra.electionResults[43] = 11;
veronica.electionResults[43] = 27;

console.log("Sandra's revised count for Florida is " + sandra.electionResults[9]);

console.log(veronica.electionResults);

var setStateResults = function(state) {

	theStates[state].winner = null;

	if (sandra.electionResults[state] > veronica.electionResults[state]) {
		theStates[state].winner = sandra;
	} else if (sandra.electionResults[state] < veronica.electionResults[state]) {
		theStates[state].winner = veronica;
	}

	//changing states' colors based on winner
	var stateWinner = theStates[state].winner;

	if (stateWinner !== null) {
		theStates[state].rgbColor = stateWinner.partyColor;
	} else {
		theStates[state].rgbColor = [11, 32, 57];
	}

	//populate bottom table
	var stateResults = document.getElementById("stateResults");

	var header = stateResults.children[0].children[0];

	var stateName = header.children[0];
	stateName.innerText = theStates[state].nameFull;

	var stateAbbrev = header.children[1];
	stateAbbrev.innerText = theStates[state].nameAbbrev;

	var politician1 = stateResults.children[1].children[0];
	politician1.children[0].innerText = sandra.name;
	politician1.children[1].innerText = sandra.electionResults[state];

	var politician2 = stateResults.children[1].children[1];
	politician2.children[0].innerText = veronica.name;
	politician2.children[1].innerText = veronica.electionResults[state];

	var stateWinnerName = stateResults.children[1].children[2].children[1];
	if (stateWinner !== null) {
		stateWinnerName.innerText = stateWinner.name;
	} else {
		stateWinnerName.innerText = "DRAW";
	}
}

//get total votes #s by tallying up votes
sandra.tallyVotes();
veronica.tallyVotes();

//console log total votes
console.log(sandra.totalVotes);
console.log(veronica.totalVotes);

//declare winner
if (sandra.totalVotes > veronica.totalVotes) {
	winner = sandra.name;
} else if (sandra.totalVotes < veronica.totalVotes) {
	winner = veronica.name;
} else {
	winner = "a draw";
}

console.log("The results are in and it's " + winner + "!");


//populate top table
var countryResults = document.getElementById("countryResults");

//make code following clean + neat!
var row = countryResults.children[0].children[0];

row.children[0].innerText = sandra.name;
row.children[1].innerText = sandra.totalVotes;
row.children[2].innerText = veronica.name;
row.children[3].innerText = veronica.totalVotes;
row.children[5].innerText = winner;


/*
var makePBJ = function (breadType)
{
	var pbj = {};
	pbj.bread = breadType;
	pbj.contents = "peanut butter & jelly";
	pbj.announcePBJ = function()
	{
		console.log("PB&J on " + this.bread + ", ready to eat!");
	};

	pbj.announcePBJ();

	return pbj;
};

var pbj1 = makePBJ("white");
var pbj2 = makePBJ("gluten-free");

//getting at and assigning values for object instances
pbj2.contents = "crunchy peanut butter & strawberry jam";



var dancer = {};
dancer.favoriteDances = ["Harlem Shake", "Tango", "Waltz"];

dancer.danceAll = function() {
	for (var i = 0; i < this.favoriteDances.length; i++) {
	var nameOfDance = this.favoriteDances[i];
	console.log("I'm dancing the " + nameOfDance + "!");
	}
};

dancer.danceAll();



*/