import { useState,useMemo } from "react";
import Sum from "./Sum";

export default function AppMemo() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(10000);
    console.log("AppMemo render");
    //calculate total no of primenumbers till 10000
  const prime = useMemo(() =>  {
        let total = 0;
        if (number >= 2)
            total++;
        for (let i = 3; i <= number; i++) {
            let isPrime = true;
            for (let j = 2; j < i; j++) {
                if (i % j === 0) {
                    isPrime = false;
                    break;
                }

            }
            if (isPrime) {
                total++;
            }
        }
        return total;
    }, [number]);
       
    //here calculatePrime function will be called on every render of AppMemo component, even if the count state is updated. 
    // This is because calculatePrime is defined inside the AppMemo component and is not memoized. 
    // To optimize this, we can use the useMemo hook to memoize the result of calculatePrime function, so that it only recalculates when the number state changes.

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <h3>total no oof prime {prime}</h3>
            <Sum />
        </>
    );
}
