//This example demonstrates how to implement BasicCard and ClozeCard modules

//Require modules
var BasicCard = require('./basiccard');
var ClozeCard = require('./clozecard');

/**
Basic card implementation
Constructor name: BaisCard
Parameters: 
	- `fornt` type string
	- `back` type string
*/
var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

console.log('Basic Card');
//Print card
firstPresident.printCard();

//Result
//Front: Who was the first president of the United States?
//Back: George Washington


/**
Cloze card implementation
Constructor name ClozeCard
Parameters:
	- `text` type string
	- `cloze` type string
*/
var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

console.log('\nCloze Card');

//Print card
firstPresidentCloze.printCard();

//Result
//Cloze: George Washington
//Partial text: ... was the first president of the United States.
//Full text: George Washington was the first president of the United States.

//
console.log('\n------------------- Error -------------------');
// This will throw an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");