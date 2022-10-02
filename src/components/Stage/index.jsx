import React, { useState } from 'react';
import Wordbox from '../Wordbox';
import './style.css';

const Stage = () => {
  const [words, setWords] = useState(['jahoda']);

  return (
    <div className="stage">
      {words.map((word) => <Wordbox word={word} key={word} />)}
    </div>
  );
};

export default Stage;
