import React, { useState,useRef } from 'react';

//stopwatch: start,stop,rest

export default function Stopwatch() {
    const [time, setTime] = useState(0);
    const intervelIdRef = useRef(null);
    
    const handleStart = () => {
       if (intervelIdRef.current === null) {
           intervelIdRef.current = setInterval(() => {
               setTime(time => time + 1)
           }, 1000);
       }
    };
    const handleStop = () => {
        clearInterval(intervelIdRef.current);
            intervelIdRef.current = null;
    };
    const handleReset = () => {
        clearInterval(intervelIdRef.current);
         setTime(0);
            intervelIdRef.current = null;
    };

    return (
        <div>
            <h1>Stopwatch</h1>
            <h2>{time}</h2>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )

}


