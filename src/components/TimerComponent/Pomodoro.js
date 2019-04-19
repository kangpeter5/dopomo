import React from 'react'

const Pomodoro = props => {
    return (
        <div>
            <p>{props.break ? 'Take a Break' : 'Get Busy'}</p>
            <p>{props.break ? props.restMinutes : props.workMinutes} : {props.seconds < 10 ? `0${props.seconds}` : props.seconds}</p>
            <button onClick={props.start ? props.pauseTimer : props.startTimer}>{props.start ? 'Pause' : 'Start'}</button>
            <button onClick={props.resetTimer}>Reset</button>
        </div>
    )
}

export default Pomodoro