import React from 'react';

export default function InputField({text, handleInput, handleSubmit}) {


  return (
    <label>
        <span>Todos </span>
        <input
          type="text"
          value={text}
          onChange={e => handleInput(e.target.value)}
        />
        <button type="button" onClick={handleSubmit}>
          Add todo
        </button>
      </label>
  )
}
