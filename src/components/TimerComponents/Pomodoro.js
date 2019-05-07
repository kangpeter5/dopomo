import React, {useState, useEffect } from 'react'
import './Pomodoro.scss'

export default function Pomodoro() {
    const [pomo, setPomo] = useState(0)
    const [seconds, setSeconds] = useState(25*60)
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
                                setSeconds(5*60)
                            }else{
                                setPomo(0)
                                setSeconds(30*60)
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
    }, [paused, relax, pomo])

    // Control Functions
    function startTimer() {
        setPaused(false)
        console.log(`pomo: ${pomo}`)
    }
    function pauseTimer() {
        setPaused(true)
    }
    function resetTimer() {
        setPaused(true)
        setSeconds(25*60)
        setRelax(false)
    }

    //using https://codepen.io/ryanparag/pen/JVmmgv
    return (
        <section className="pomodoro container">
            <h3>{!relax ? "Time to Work!" : 'Take a Break' }</h3>
            <h1>{`${Math.floor(seconds / 60)}:${("00" + (seconds % 60)).slice(-2)}`}</h1>
            <p>{pomo < 3 ? `${pomo} pomo completed` : `${pomo} pomos completed. 1 more until you can take a 20 minute break`}</p>
            <button className="btn--primary" onClick={paused ? startTimer : pauseTimer}>{paused ? 'Start' : 'Pause'}</button>
            <button className="btn--danger" onClick={resetTimer}>Reset</button>
        </section>
    )
}