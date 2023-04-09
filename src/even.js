const isEven = (number) => (number % 2) === 0;

const generateQuestionAndAnswer = () => {
  const question = Math.round(Math.random() * 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default generateQuestionAndAnswer;
