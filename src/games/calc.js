import { getRandomInRange } from '../utils.js';

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

const generateRound = () => {
  const [number1, number2] = [getRandomInRange(0, 100), getRandomInRange(0, 100)];
  const mathOperation = ['+', '-', '*'];

  const randomMathOperation = mathOperation.at(getRandomInRange(0, 2));

  const question = `${number1} ${randomMathOperation} ${number2}`;
  const answer = calculateAnswer(randomMathOperation, number1, number2);

  return [question, answer.toString()];
};

export default generateRound;
