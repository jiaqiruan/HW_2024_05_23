import React, {useState,useEffect} from 'react'
import CountDown from './CountDown'

export default function CountDownApp() {
    const [minute,setMinute] = useState(0);
    const [second,setSecond] = useState(0);
    const [timer, setTimer] = useState(0);
    const [pause, setPause] = useState(true);
    useEffect(()=>{
        const intervalID = setInterval(()=>{
            //console.log("interval",timer);
            if(!pause){
                setTimer(timer+1);
            }
        },1000);
        return ()=>{
            clearInterval(intervalID);
        };
    },[timer,pause]);

    const minuteChange = (event) => {
        setMinute(event.target.value);
    };

    const secondChange = (event) => {
        setSecond(event.target.value);
    };

    const startTimer = ()=>{
        setTimer(parseInt(minute)*60+parseInt(second));
        setMinute(0);
        setSecond(0);
        setPause(false);
    }

    const resetTimer = ()=>{
        setTimer(0);
        setMinute(0);
        setSecond(0);
        setPause(true);
    }

    return (
        <div>
            TimerApp(Please just enter positive integer for now)<br/>
            <input type="number" placeholder="0" value={minute} onChange={minuteChange}/> Minutes 
            <input type="number" placeholder="0" value={second} onChange={secondChange}/> Seconds 
            <button onClick={startTimer}>Start</button>

            <br/>
            
            <button onClick={()=>setPause(!pause)}>Pause/Resume</button>
            <button onClick={resetTimer}>Reset</button>

            <br/>
            <br/>

            {Math.floor(timer/60)<10?(<span>0{Math.floor(timer/60)}</span>):(<span>{Math.floor(timer/60)}</span>)}
             : 
            {timer%60<10?(<span>0{timer%60}</span>):(<span>{timer%60}</span>)}
        </div>
    )
}
