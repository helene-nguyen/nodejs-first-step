//^Readline is a module of Node.js allows the reading of input stream line by line
const colors = require('colors');
//!GET READLINE MODULE
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin, //access via global // entrée en standard 
    output: process.stdout // what we want to display on the terminal // sortie en standard
});

//Below the code

//~ask question
//Here we ask a question and get the asnwer to display it into the console
//here we will have a call back that we can get
/* rl.question("Do you know how to use it ?", (answer) => {
    console.log(`My answer is ${answer}`)
    rl.close(); // quit the app, close the interface
}) */

//~another way to ask question
/* rl.setPrompt('You know that you can give only one response ?'); //set a question
rl.prompt(); //call the prompt to display on terminal
rl.on('line', (answer) => {
    console.log(`Your answer is ${answer}`);
    rl.close();
}); */

//~listening function
rl.on('line', (write) => {
    console.log(`I know what you are writing ! It's [ "${write}" ] `.bgMagenta.black)
});

//~pause event
//
/* rl.on('pause', () => {
	console.log('Paused Event is invoked');
}); */

//~resume event
//This event is invoked whenever the input is resumed
/* rl.on('resume', () => {
    console.log('Resume Event is invoked.');
}); */

//~SIGINT ctrl+c -> don't know what it means 
/* rl.on('SIGINT', () => {
	rl.question('Exit (y or n)? ', (input) => {
	if (input.match(/^y(es)?$/i)) { rl.pause(); }
	});
}); */

//~SIGCONT : cet événement est invoqué lorsqu'un processus qui a été envoyé en arrière-plan à l'aide de SIGTSTP
//~SIGTSTP est à nouveau ramené au processus en cours d'exécution

