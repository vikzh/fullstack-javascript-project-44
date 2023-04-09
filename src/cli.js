import readlineSync from 'readline-sync';

export default (questionLine) => readlineSync.question(questionLine);
