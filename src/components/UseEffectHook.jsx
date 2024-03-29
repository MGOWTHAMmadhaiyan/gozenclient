import React, { useState, useEffect } from 'react';


//USEEFFECT HOOK (TASK 6)


const UseEffectHook = () => {
    const [Counter, SetCounter] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            // This function will run every second
            SetCounter(prevCount => prevCount + 1);
        }, 1000);

        // Cleanup function to clear the interval when the component unmounts
        return () => {
            console.log('cleanup when component unmount')
            window.alert('clean up when component unmount')
            clearInterval(intervalId);
        }
    }, []); // Empty dependency array ensures that the effect runs only once after the initial render

    return (
        <div>
            <p>Counter:{Counter}</p>
        </div>
    );
};

export default UseEffectHook;
