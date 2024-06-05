import { useState } from 'react';
import Wordbox from '../Wordbox';
import wordList from '../../word-list';
import './style.css';

// TODO: temporary disable function - remove next line when you start using it
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const generateWord = (size: number) => {
  const sizeIndex = size === undefined
    ? Math.floor(Math.random() * wordList.length)
    : size - 3;
  
  if (sizeIndex < 0 || sizeIndex >= wordList.length) {
    return null;
  }
  
  const words = wordList[sizeIndex];
  const wordIndex = Math.floor(Math.random() * words.length);
  return words[wordIndex];
};



const Stage = () => {
  const [mistakes, useMistakes] = useState <number>(0);

  const onMistakes = () => {
    useMistakes(mistakes + 1);
  }

  const startWord = () : string[] => {
    const words: Array<string> = [];
    for (let i = 0; i<3; i++){
      const word = generateWord(6);
      if(typeof word === 'string'){ 
        words.push(word);
      }
    }
    return (words);
  }
  
  const [words, setWord] = useState<string[]>(startWord());

  const handleFinish = () => {
    const word = generateWord(6);
    if (typeof word === 'string'){
      words.shift()
      return setWord([...words, word]);
    }
    return setWord(['']);
  }

  return (
    <div className="stage">
      <div className="stage__mistakes">Chyb: {mistakes}</div>
      <div className="stage__words">
        {words.map((word) => <Wordbox word={word} key={word} onFinish={handleFinish} active={word === words[0]?true : false} onMistakes={onMistakes}/>)}
      </div>
    </div>
  );
};

export default Stage;
