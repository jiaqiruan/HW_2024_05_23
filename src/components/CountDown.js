import React, {useState,useEffect} from 'react'

export default function CountDown() {
    const [timer, setTimer] = useState(0);
    const [pause, setPause] = useState(true);
    useEffect(()=>{
        const intervalID = setInterval(()=>{
            console.log("interval",timer);
            if(!pause){
                setTimer(timer+1);
            }
        },1000);
        return ()=>{
            clearInterval(intervalID);
        };
    },[timer,pause])
    return (
        <div>
            {Math.floor(timer/60)} : {timer%60}
            <button onClick={()=>setPause(!pause)}>Pause!</button>
        </div>
    )
}
