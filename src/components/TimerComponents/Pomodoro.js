import React, {useState, useEffect } from 'react'

export default function Pomodoro() {
    const [seconds, setSeconds] = useState(25*60)
    const [relax, setRelax] = useState(false)
    const [paused, setPaused] = useState(true)

    useEffect(() => {
        const int = setInterval(() => {

            if(!paused){
                console.log(`${Date.now()} - relax: $ ${relax}`)
                if(relax){
                    setSeconds((seconds) => {
                        if(seconds === 0){
                            resetTimer()
                        }else{
                            return seconds - 1
                        }
                        
                    })
                }
                else {
                    setSeconds((seconds) => {
                        if(seconds === 0){
                            setRelax(true)
                            setSeconds(5*60)
                            startTimer()
                        }else{
                            return seconds - 1
                        }
                        
                    })
                }
            }
           
        }, 1000)
        return () => {
            clearInterval(int)
        }
    }, [paused, relax])

    // Control Functions
    function startTimer() {
        setPaused(false)
    }
    function pauseTimer() {
        setPaused(true)
    }
    function resetTimer() {
        setPaused(true)
        setSeconds(25*60)
        setRelax(false)
    }

    /*{timer}

    <p>{relax ? restMinutes : workMinutes} : {seconds < 10 ? `0${seconds}` : seconds}</p>

    <p>{`${Math.floor(seconds / 60)}:${("00" + (seconds % 60)).slice(-2)}`}</p>
    

    function timer(){
        console.log("relax:",relax);
        if(relax){
            startTimer()
        }
        if(seconds === -1){
            setRelax(false)
        }else{
            startTimer()

            if(seconds === -1){
                setRelax(true)
            }
        }
    }*/

    return (
        <>
            
            <p>{relax ? 'Take a Break' : "Let's Work!"}</p>
            <p>{`${Math.floor(seconds / 60)}:${("00" + (seconds % 60)).slice(-2)}`}</p>
            <button onClick={paused ? startTimer : pauseTimer}>{paused ? 'Start' : 'Pause'}</button>
            <button onClick={resetTimer}>Reset</button>
        </>
    )
}