import { useState, useEffect } from 'react';

export default function AutoSave() {
  const [text, setText] = useState('');
  const [saved, setSaved] = useState('');

  useEffect(() => {
    // Wait 1 second after user stops typing
    const timeoutId = setTimeout(() => {
      console.log('Saving:', text);
      setSaved(text); // Simulate saving
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [text]);

  return (
    <>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="5"
        cols="50"
      />
      <p>Last saved: {saved}</p>
    </>
  );
}
