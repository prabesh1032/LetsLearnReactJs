import React from "react";

const Sum = React.memo(() => {
    //React.memo is a higher order component that memoizes the result of a component. It will only re-render if the props change. 
    // In this case, since there are no props, it will only render once.
    function calculateSum() {
        let sum = 0;
        for (let i = 0; i < 1000; i++) {
            sum += i;
        }
        return sum;
    }

    const TotalSum = calculateSum();
    console.log("Sum render");
    return (
        <>
            <h1>This is our math Library</h1>
            <p>The sum of first 1000 numbers is: {TotalSum}</p>
        </>
    );
}
);
export default Sum;

