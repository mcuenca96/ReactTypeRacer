import React from "react"
import { connect } from "react-redux"

const CurrentLevel = props => {
    const { level } = props

    return (
        <div className=" absolute left-auto top-auto">
            <div className="inline-block rounded-full bg-red-700 p-5">
                CURRENT LEVEL: {level}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    level: state.data.level,
})

export default connect(mapStateToProps)(CurrentLevel)
