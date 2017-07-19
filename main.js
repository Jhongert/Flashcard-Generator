var BasicCard = require('./basiccard');
var ClozeCard = require('./clozecard');
var inquirer = require('inquirer');

var basic = [];
var cloze = [];
var newCard = true;

var menu = function(){
  if(newCard)
	inquirer.prompt([
		{
			type: 'list',
			name: 'choice',
			message: 'Choose a type of card:',
			choices: ['Basic', 'Cloze', 'Done']
		}
	]).then(function(response){
		switch(response.choice){
			case 'Basic':
				inquirer.prompt([
					{
						type: 'input',
						name: 'front',
						message: 'Type the front of the card:',
						validate: function (value) {
					      	return value.trim()  == '' ? false : true;
					    }
					},
					{
						type: 'input',
						name: 'back',
						message: 'Type the back of the card:',
						validate: function (value) {
					      	return value.trim()  == '' ? false : true;
					    }
					},
				]).then(function(answers){
					var card = new BasicCard(answers.front, answers.back);
					basic.push(card);
					console.log('Card added.');
					menu();
				});
				break;
			case 'Cloze':
				var fullText;

				inquirer.prompt([
					{
						type: 'input',
						name: 'text',
						message: 'Type the text of the card:',
						validate: function (value) {
					      	if (value.trim()  == '')
					      	    return  false;
					      	else {
					      		fullText = value.trim();
					      		return true;
					      	}
					    }
					},
					{
						type: 'input',
						name: 'cloze',
						message: 'Type the cloze of the card:',
						validate: function (value) {
					      	if(value.trim() == ''){
								return false;
					      	} else if(fullText.search(value.trim()) == -1){
								console.log(' (The cloze deletion does not appear in the input text.)');
								return false;
							} else return true;
					    }
					},
				]).then(function(answers){
					var card = new ClozeCard(answers.text, answers.cloze);
					cloze.push(card);
					console.log('Card added.');
					menu();
				});
				break;
			default:
				newCard = false;
				menu();
		}
	});
  else{
	if(basic.length > 0){
		console.log('Basic cards:');
		for(var i = 0; i < basic.length; i++){
			basic[i].printCard();
		}
	}
	if(cloze.length > 0){
		console.log(cloze.length);
		console.log('Cloze cards:');
		for(var i = 0; i < cloze.length; i++){
			cloze[i].printCard();
		}
	}
  }
}

menu();