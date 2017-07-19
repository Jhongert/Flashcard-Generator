/**
	Cloze Card implementation

	Arguments:
	`text`: type = string. Full text of the card
	`cloze`: type = string. Cloze-deleted portion of the text 
*/
var ClozeCard = function(text, cloze){
	//Make sure `text` and `cloze` parameters are string or instance of string.
	//I'm using trim, search and replace methods, if the parameter is not a string this will
	//produce and error. Also make sure they are not empty.
	//if is not a string or is empty, throw an error
	if(typeof text !== 'string' && text instanceof String === false){
		this.throwError('Parameter `text` must be a string.');
	} else if(text.trim() == ''){
		this.throwError('Parameter `text` can`t be empty.');
	}

	if(typeof cloze !== 'string' && cloze instanceof String === false){
		this.throwError('Parameter `cloze` must be a string.');
	} else if(cloze.trim() == ''){
		this.throwError('Parameter `cloze` can`t be empty.');
	}


	//Check if cloze text appears in input text, if not throw an error
	if(text.search(cloze) == -1){
		this.throwError('The cloze deletion does not appear in the input text.');
	}


	if(this instanceof ClozeCard){
		this.cloze = cloze;
		this.partial = text.replace(cloze, '...');
		this.fullText = text;
	} else {
		return new ClozeCard();
	}
};

//Method to print card
ClozeCard.prototype.printCard = function(){
	console.log('****************************************');
	console.log('Cloze: ' + this.cloze);
	console.log('Partial text: ' + this.partial);
	console.log('Full text: ' + this.fullText);
}

//throwError method
ClozeCard.prototype.throwError = function(err){
	throw new Error(err);
}
module.exports = ClozeCard;