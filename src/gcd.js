const gcd = (a, b) => {
  	while(a != b){
      	if(a > b) {
      		a -= b;
      	}
      	else {
          	b -= a;
      	}
  	}

  	return a;
}

const generateRandomNumber = (max, min) => Math.round(Math.random() * (max - min) + min);

const generateQuestionAndAnswer = () => {
	const [number1, number2] = [generateRandomNumber(0, 100), generateRandomNumber(0, 100)];

	const question = `${number1} ${number2}`;
	const answer = gcd(number1, number2);

	return [question, answer.toString()];
}

export default generateQuestionAndAnswer;
