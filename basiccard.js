/**
	Basic Card implementation

	Arguments:
	`front`: type = string. Front text of the card
	`back`: type = string. Back text of the card 
*/
var BasicCard = function(front, back){
	//Make sure `front` and `back` parameters are string or instance of string.
	//and not empty. If not a string or empty, throw an error
	if(typeof front !== 'string' && front instanceof String === false){
		this.throwError('Parameter `front` must be a string.');
	} else if(front.trim() == ''){
		this.throwError('Parameter `front` can`t be empty.');
	}

	if(typeof back !== 'string' && back instanceof String === false){
		this.throwError('Parameter `back` must be a string.');
	} else if(back.trim() == ''){
		this.throwError('Parameter `back` can`t be empty.');
	}


	if(this instanceof BasicCard){
		this.front = front;
		this.back = back;
	} else {
		return new BasicCard();
	}
};

//Method to print card
BasicCard.prototype.printCard = function(){
	console.log('****************************************');
	console.log('Front: ' + this.front);
	console.log('Back: ' + this.back);
}
//throwError method
BasicCard.prototype.throwError = function(err){
	throw new Error(err);
}

module.exports = BasicCard;