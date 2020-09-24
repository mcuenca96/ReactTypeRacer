import React, { useEffect } from "react"
import { connect } from "react-redux"
import { countdown } from "../actions/racerAction"
import { navigate } from "gatsby"
import { resetGame } from "../actions/racerAction"

const Timer = props => {
    const { currentTime, countdown } = props

    useEffect(() => {
        const interval = setInterval(() => {
            countdown()
        }, 1000)
        return () => clearInterval(interval)
    }, [countdown])

    if (currentTime <= 0) {
        navigate("/gameOver")
    }

    return (
        <div>
            <p>{currentTime}</p>
        </div>
    )
}

const mapStateToProps = state => ({
    currentTime: state.data.currentTime,
    start: state.data.start,
})

export default connect(mapStateToProps, { countdown, resetGame })(Timer)
