# Flashcard-Generator
Flashcard Generator is a backend for a basic flashcard application. The backend will essentially constitute an API that allows users to create two types of flashcards.

**1. Basic** flashcards, which have a front ("Who was the first president of the United States?"), and a back ("George Washington").

**2. Cloze-Deleted** flashcards, which present partial text ("... was the first president of the United States."), and the full text when the user requests it ("George Washington was the first president of the United States.")

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
### Dependencies
- **inquirer:** To make an interactive interface.
### Installing
Open Terminal/bash window
- Clone this repo. `git clone https://github.com/Jhongert/Flashcard-Generator.git`.
- Navigate to Flashcard-Generator folder. `cd Flashcard-Generator`.
- Install all dependencies. `npm install`.

### Application Structure
- `basiccard.js` - This file defines a Node module that exports a constructor for creating basic flashcards.
- `clozecard.js` - This file defines a Node module that exports a constructor for creating cloze-deletion flashcards
- `main.js` - This is a command line node app to create basic cards and Cloze cards.
- `example.js` - This file demonstrates how to implement BasicCard and ClozeCard modules.
- `node_modules/` - This folder contains all node modules.
- `package.json` - This file contains meta data about the app. It includes the list of dependencies to install from npm when running npm install.
- `.git/` - Git folder
- `.gitignore` - To tell git not to track node_modules files, and thus they won't be committed to Github. 
- `README.md` - This file.

## Usage
To run this app you must have node.js installed on your computer.
### example.js
Example.js just demonstrates how to implement BasicCard and ClozeCard modules.
Run `node example.js` in your terminal/bash window to see the result.
**Note** The last line on this file, will throw an error. 

### main.js
- Run `node main.js` in your terminal/bash window.
- Choose the type of card you want to create (Basic or Cloze).
- If you choose Basic
	- Type the front text of the card.
	- Then type the back text of the card.
- If you choose Cloze
	- Type the full text of the card.
	- Then type the cloze-deleted portion of the text.
- When you finish creating cards choose done.
- The app will print all cards created.

## Built With
- Node.js
- javascript

## Author
- Jhongert Fuertes