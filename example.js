//This example demonstrate how to implement BasicCard and ClozeCard modules

var BasicCard = require('./basiccard');
var ClozeCard = require('./clozecard');

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

console.log('-------- Basic Card ---------------');
// "Who was the first president of the United States?"
console.log('Front: ' + firstPresident.front); 

// "George Washington"
console.log('Back: ' + firstPresident.back); 

console.log('----------------- Cloze Card --------------------');
var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log('Cloze: ' + firstPresidentCloze.cloze); 

//  ... was the first president of the United States.
console.log('Partial: ' + firstPresidentCloze.partial);

// George Washington was the first president of the United States.
console.log('Full: ' + firstPresidentCloze.fullText);

console.log('------------------- Error -------------------');
// This will throw an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");