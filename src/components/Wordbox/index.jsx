import React, { useState } from 'react';
import './style.css';

const Wordbox = ({ word, }) => {
  const [lettersLeft, setLettersLeft] = useState(word);  
  
  return (
    <div className="wordbox">{lettersLeft}</div>
  );
};

export default Wordbox;
