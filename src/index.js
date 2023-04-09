import askCliInput from './cli.js';

const makeGame = (getQuestionAndAnswer, name) => {
	let wins = 0;
	for (let i = 0; i < 3; i += 1) {
		let [question, correctAnswer] = getQuestionAndAnswer();
		
		console.log(`Question: ${question}`);
		const userAnswer = askCliInput('Your answer: ');

		if (correctAnswer === userAnswer) {
			console.log('Correct!');
			wins += 1;
			continue;
		}

		console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
		console.log(`Let's try again, ${name}!`);
		break;
	}
}

export default makeGame;
