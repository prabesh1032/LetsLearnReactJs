import { useState } from "react";
export default function AppUseState() {
    //let count = 0;
    // useState is a react hook that allows us to add state to functional components.
    const [count, setCount] = useState(0);
    
    
    // function increseNumber() {
    //     count += 1;
    //     console.log(count);
    //     const para = document.querySelector('p');
    //     para.textContent = `Counter:${count}`;
    // }
     //it is not the react way to update the UI. it makes the UI inconsistent with the state.
        //React way is to use useState hook.
    function increseNumber() {
        setCount(count+1);
        console.log(count);
        //set count say react to rerender the component with the new count value. which make updated value visible in the UI.
    }
    return (
        <div className="AppUseState">
            <p>Counter:{count}</p>
            <button onClick={increseNumber}>Increment:{count}</button>
        </div>
    )
} 