import './StopWatch.css'

const StopWatch = () => {
    return (
        <>
            <div className="app-wrapper">
                <div className="stop-watch">
                    00:00:000
                </div>
                <div className="action-btns">
                    <button className="start-btn">
                        Start
                    </button>
                    <button className="stop-btn">
                        Stop
                    </button>
                    <button className="reset-btn">
                        Reset
                    </button>
                </div>
            </div>
        </>
    )
}
export default StopWatch