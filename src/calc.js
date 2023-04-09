const generateRandomNumber = (max, min) => Math.round(Math.random() * (max - min) + min);

const calculateAnswer = (operation, number1, number2) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return null;
  }
};

const generateQuestionAndAnswer = () => {
  const [number1, number2] = [generateRandomNumber(0, 100), generateRandomNumber(0, 100)];
  const mathOperation = ['+', '-', '*'];

  const randomMathOperation = mathOperation.at(generateRandomNumber(0, 2));

  const question = `${number1} ${randomMathOperation} ${number2}`;
  const answer = calculateAnswer(randomMathOperation, number1, number2);

  return [question, answer.toString()];
};

export default generateQuestionAndAnswer;
