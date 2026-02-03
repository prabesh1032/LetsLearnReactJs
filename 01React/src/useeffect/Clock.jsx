import { useEffect } from "react";
import { useState } from "react";

export default function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [show, setShow] = useState(true);


    useEffect(() => {
        if (!show)
        return;

        const intervalid = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
            console.log('Time updated');//this will log every second and make out ui render every second which is not optimal 
            // so we need to use useEffect
        }, 1000);
        return () => clearInterval(intervalid);//this cleanup function will clear the interval when the component unmounts or when show changes
    }, [show]); //empty dependency array means this effect runs only once after the initial render

    return (
        <div>
            <button onClick={() => setShow(!show)}>{show ? 'Hide Time' : 'Show Time'}</button>
            {
                show && <h1>{time}</h1>
                //this will conditionally render the time based on show state
                //but the time will keep updating even if we hide it because useEffect is independent of rendering soo we need to stop the interval when we hide the time
                //we did that by adding show in the dependency array of useEffect and clearing the interval in the cleanup function at line no 13
            }

        </div>
    );
}