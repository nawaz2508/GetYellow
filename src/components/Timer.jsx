import { useEffect, useState } from "react"

export const Timer = () => {
   const [min, setMin] = useState(5);
   const [sec, setSec] = useState(0);

   let id;

   useEffect(() => {

    handleStart();

    return (() => {
        handleStop();
    })
   });

   const handleStart = () => {
    id = setInterval(() => {
        if(sec > 0) {
            setSec(sec-1);
        }
        if(sec === 0) {
            if(min === 0) {
                clearInterval(id);
            } else {
                setMin(min-1);
                setSec(59);
            }
        }
    }, 1000)
   }

   const handleReset = () => {
       setMin(5);
       setSec(0);
   }

   const handleStop = () => {
       clearInterval(id);
   }
    return (<>
    <h2>{min} : {sec}</h2>
    <button onClick={handleStart}>Start</button>
    <button onClick={handleStop}>Stop</button>

    <button onClick={handleReset}>Reset</button>
    </>)
}