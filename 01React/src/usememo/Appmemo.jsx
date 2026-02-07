import { useState, useMemo, useCallback } from "react";
import Sum from "./Sum";
import Post from "./Postss";

export default function AppMemo() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(10000);
    console.log("AppMemo render");
        
    

    //calculate total no of primenumbers till 10000
    // const calculatePrime = () => {
    //     let total = 0;
    //     if (number >= 2)
    //         total++;
    //     for (let i = 3; i <= number; i++) {
    //         let isPrime = true;
    //         for (let j = 2; j < i; j++) {
    //             if (i % j === 0) {
    //                 isPrime = false;
    //                 break;
    //             }

    //         }
    //         if (isPrime) {
    //             total++;
    //         }
    //     }
    //     return total;
    // };
    //here calculatePrime function will be called on every render of AppMemo component, even if the count state is updated. 
    // This is because calculatePrime is defined inside the AppMemo component and is not memoized. 
    // To optimize this, we can use the useMemo hook to memoize the result of calculatePrime function, so that it only recalculates when the number state changes.
  const prime = useMemo(() => {
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
    //useMemo will only recalculate the prime variable when the number state changes, and will return the memoized value for any other renders. 
    // This way, we can avoid unnecessary calculations and improve the performance of our component.

    //usecallback
    // function handleClick() {
    //     console.log("Button clicked");
    // }
    //here in the above code, the handleClick function will be recreated on every render of the AppMemo component, even if the count state is updated. 
    // To optimize this, we can use the useCallback hook to memoize the handleClick function, so that it only recreates when the count state changes.
    const handleClick = useCallback(() => {
        console.log(`Button clicked ${count}`);
    }, [count]);
    //useCallback will only recreate the handleClick function when the count state changes, and will return the memoized function for any other renders. 
    // This way, we can avoid unnecessary recreations of the function and improve the performance of our component.


    //difference between useMemo and useCallback is that useMemo returns a memoized value, while useCallback returns a memoized function.
    // useMemo is used to optimize expensive calculations, while useCallback is used to optimize functions that are passed as props to child components.
    // In this example, we are using useMemo to optimize the calculation of prime numbers, and useCallback to optimize the handleClick function that is passed as a prop to the Sum component.
    //if we use useMemo for the handleClick function, it will return a memoized value instead of a memoized function, which is not what we want in this case.
    //also React.memo and usememo are different, React.memo is a higher order component that memoizes the result of a component, while useMemo is a hook that memoizes the result of a function.
    // React.memo is used to optimize the rendering of a component, while useMemo is used to optimize the calculation of a value.




    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <h3>total no oof prime {prime}</h3>
            <button onClick={() => setNumber(number + 1)}>Increment Number</button>
            <button onClick={handleClick}>Click Me</button>
            <Sum />
            {/* <Post post={{ name: "John", age: 30 }} /> */}
            {/* in this case post component will also be render if increment count button is clicked, 
            this is bacause we are passing an object as a prop to the Post component, and the object is recreated on every render of the AppMemo component. 
            To optimize this, we can use the useMemo hook to memoize the object that is passed as a prop to the Post component, so that it only recreates when the count state changes. */}
            <Post post={useMemo(() => ({ name: "John", age: 30 }), [])} />
            {/* now the Post component will only re-render if the memoized object changes, which in this case, it won't unless the dependencies change. */}

        </>
    );
}
