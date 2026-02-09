import React from 'react';

function Counter({ count, setCount }) {

    function increment() {
        setCount(count + 1);
    }
    function decrement() {
        setCount(count - 1);
    }
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>Increment</button>  
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;