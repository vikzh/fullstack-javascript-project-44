import runEngine from '../index.js';
import { getRandomInRange } from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.\n';

const calculateAnswer = (operation, number1, number2) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Operator ${operation} - is incorrect`);
  }
};

const generateRound = () => {
  const [number1, number2] = [getRandomInRange(0, 100), getRandomInRange(0, 100)];
  const mathOperation = ['+', '-', '*'];

  const randomMathOperation = mathOperation.at(getRandomInRange(0, 2));

  const question = `${number1} ${randomMathOperation} ${number2}`;
  const answer = calculateAnswer(randomMathOperation, number1, number2).toString();

  return [question, answer];
};

export default () => runEngine(generateRound, rules);
