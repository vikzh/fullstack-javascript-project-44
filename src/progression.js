const makeProgression = (start, step, n) => {
  const progression = [];
  let currentIteration = start;
  for (let i = 0; i < n; i += 1) {
    progression.push(currentIteration);
    currentIteration += step;
  }

  return progression;
};

const generateRandomNumber = (max, min) => Math.round(Math.random() * (max - min) + min);

const generateQuestionAndAnswer = () => {
  const progressionLength = generateRandomNumber(5, 10);
  const progressionStart = generateRandomNumber(0, 100);
  const progressionStep = generateRandomNumber(0, 100);

  const progression = makeProgression(progressionStart, progressionStep, progressionLength);

  const numberOfelementToHide = generateRandomNumber(0, progression.length - 1);
  const answer = progression[numberOfelementToHide];
  progression[numberOfelementToHide] = '..';

  return [progression.join(' '), answer.toString()];
};

export default generateQuestionAndAnswer;
