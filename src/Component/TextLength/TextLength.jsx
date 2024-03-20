import React from 'react'

function TextLength ({length}) {
  return (
    <div>
        {length < 5 ? <p>text too short</p> : length >10 ? <p>text too long</p> : null} 
    </div>
  )
}

export default TextLength;