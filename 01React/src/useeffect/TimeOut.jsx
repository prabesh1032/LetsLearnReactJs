import { useEffect, useState } from 'react';

export default function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('🟢 Effect runs, count:', count);

    const id = setInterval(() => {
      console.log('⏰ Tick');
    }, 1000);

    return () => {
      console.log('🔴 Cleanup runs, count was:', count);
      clearInterval(id);
    };
  }, [count]); // Depends on count

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
