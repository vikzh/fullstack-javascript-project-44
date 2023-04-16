import { getRandomInRange } from '../utils.js';

const makeProgression = (start, step, n) => {
  const progression = [];
  let currentIteration = start;
  for (let i = 0; i < n; i += 1) {
    progression.push(currentIteration);
    currentIteration += step;
  }

  return progression;
};

const generateRound = () => {
  const progressionLength = getRandomInRange(5, 10);
  const progressionStart = getRandomInRange(0, 100);
  const progressionStep = getRandomInRange(0, 100);

  const progression = makeProgression(progressionStart, progressionStep, progressionLength);

  const numberOfelementToHide = getRandomInRange(0, progression.length - 1);
  const answer = progression[numberOfelementToHide].toString();
  progression[numberOfelementToHide] = '..';

  return [progression.join(' '), answer];
};

export default generateRound;
