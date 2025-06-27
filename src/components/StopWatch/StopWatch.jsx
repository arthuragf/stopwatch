import React, {useState, useRef, useEffect} from 'react'
import './Stopwatch.css'

const Stopwatch = () => {
    const [isRunning, setIsRunning] = useState(false)
    const [elapsedTime, setElapsedTime] = useState(0)
    const intervalIdRef = useRef(null)
    const startTimeRef = useRef(0)

    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            }, 10)
        }

        return () => clearInterval(intervalIdRef.current)

    }, [isRunning])
    
    
    const start = () => {
        setIsRunning(true)
        startTimeRef.current = Date.now() - elapsedTime;
    }

    const stop = () => {
        setIsRunning(false)
    }

    const reset = () => {
        setIsRunning(false)
        setElapsedTime(0)
    }

    const formatTime = () => {
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60)
        let seconds = Math.floor(elapsedTime / (1000) % 60)
        let miliseconds = Math.floor(elapsedTime % 1000)

        hours = String(hours).padStart(2, "0")
        minutes = String(minutes).padStart(2, "0")
        seconds = String(seconds).padStart(2, "0")
        miliseconds = String(miliseconds).padStart(3, "0")

        return `${hours}:${minutes}:${seconds}:${miliseconds}`

    }

    return (
        <>
            <div className="app-wrapper">
                <div className="stop-watch">
                    {formatTime(elapsedTime)}
                </div>
                <div className="action-btns">
                    <button className="start-btn" onClick={start}>
                        Start
                    </button>
                    <button className="stop-btn" onClick={stop}>
                        Stop
                    </button>
                    <button className="reset-btn" onClick={reset}>
                        Reset
                    </button>
                </div>
            </div>
        </>
    )
}
export default Stopwatch