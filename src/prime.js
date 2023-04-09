const isPrime = (num) => {
	for(let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
        if(num % i === 0) return false;
    }
    return num > 1;
}

const generateRandomNumber = (max, min) => Math.round(Math.random() * (max - min) + min);

const generateQuestionAndAnswer = () => {
	const randomNumber = generateRandomNumber(0, 100);

	const answer = isPrime(randomNumber) ? 'yes' : 'no';

	return [randomNumber.toString(), answer];
}

export default generateQuestionAndAnswer;
