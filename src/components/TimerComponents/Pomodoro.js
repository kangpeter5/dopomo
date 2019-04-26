import React, {useState, useEffect } from 'react'

export default function Pomodoro() {
    const [pomo, setPomo] = useState(0)
    const [seconds, setSeconds] = useState(.1*60)
    const [relax, setRelax] = useState(false)
    const [paused, setPaused] = useState(true)


    // need to add STEP 5 'Every 4 Pomodoros take a longer break'
    useEffect(() => {
        const int = setInterval(() => {

            if(!paused){
                //console.log(`${Date.now()} - relax: $ ${relax}`)
                if(relax){
                    console.log(`pomodoro count: ${pomo}`)
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
                            setPomo(pomo => pomo + 1)

                            if(pomo < 3){ // After 4 Pomodoros take a break
                                setSeconds(7)
                            }else{
                                setPomo(0)
                                setSeconds(9)
                            }
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
        setSeconds(.1*60)
        setRelax(false)
    }

    return (
        <>
            <h1>{relax ? 'Take a Break' : "Let's Work!"}</h1>
            <p>{`${Math.floor(seconds / 60)}:${("00" + (seconds % 60)).slice(-2)}`}</p>
            <button onClick={paused ? startTimer : pauseTimer}>{paused ? 'Start' : 'Pause'}</button>
            <button onClick={resetTimer}>Reset</button>
        </>
    )
}