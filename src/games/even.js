import { getRandomInRange } from '../utils.js';

const isEven = (number) => (number % 2) === 0;

const generateRound = () => {
  const question = getRandomInRange(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default generateRound;
