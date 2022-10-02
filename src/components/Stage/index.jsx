import React, { useState } from 'react';
import Wordbox from '../Wordbox';
import './style.css';

const Stage = () => {
  const [word, setWord] = useState('JAHODA');
  
  const handleDone = () => {
    setWord(null);
  };

  return (
    <div className="stage">
      {word === null ? null : <Wordbox word={word} onDone={handleDone} />}
    </div>
  );
};

export default Stage;
