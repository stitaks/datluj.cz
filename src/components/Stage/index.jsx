import React, { useState } from 'react';
import Wordbox from '../Wordbox';
import './style.css';

const Stage = () => {
  const [word, setWord] = useState('jahoda');

  return (
    <div className="stage">
      <Wordbox word={word} />
    </div>
  );
};

export default Stage;
