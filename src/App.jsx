import React, {useState} from 'react'
import TextLength from './Component/TextLength/TextLength';

function App () {
    const [text, setText] =useState('');

    const handleChange = (e) =>  {
        setText(e.target.value);

    };
  return (
    <div>
        <input type="text" value={text} onChange={handleChange} />
        <p>{text.length} Characters</p>
        <TextLength      length={text.length} />
    </div>
  );
}

export default App