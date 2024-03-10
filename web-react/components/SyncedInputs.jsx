import {useState} from 'react';

export default function SyncedInputs() {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value)
  }

  return (
    <>
      <input
        label="First input"
        value={text}
        onChange={handleChange}
        />
      <input
        label="Second input"
        value={text}
        onChange={handleChange}
      />
    </>
  )
}