import React, { useEffect, useState } from 'react';
import './style.css';

interface IWordboxProp {
  word: string;
  onFinish: () => void;
  active: boolean;
  onMistakes: () => void;
}

const Wordbox : React.FC<IWordboxProp> = ({ word, onFinish, active, onMistakes}) => {
  const [lettersLeft, setLetterLeft] = useState<string>(word);  
  const [mistake, setMistake] = useState<boolean>(false);

  const handleKeyUp = (e: KeyboardEvent) => {
  
    if (e.key === lettersLeft[0]){
      if (lettersLeft.length === 1){
        return onFinish();
      }

      return setLetterLeft(lettersLeft.substring(1, lettersLeft.length)), setMistake(false);
    }
    else {
      return setMistake(true), onMistakes();
    }
    
  }

  useEffect(() => {
    if(active){
      document.addEventListener('keyup', handleKeyUp);
      return () => document.removeEventListener('keyup', handleKeyUp);
    }
    
  }, [lettersLeft, active, onMistakes])
  
  return (
    <div className={mistake?"wordbox wordbox--mistake" : "wordbox"}>{lettersLeft}</div>
  );
};

export default Wordbox;
