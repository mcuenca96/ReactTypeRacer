import React from "react"
import { connect } from "react-redux"
import { compareText } from "../actions/racerAction"

const InputText = props => {
    const { headlines, level, currentText, compareText } = props

    const currentHeadline = headlines[level]

    return (
        <div className="flex justify-center">
            <input
                tye="text"
                className="border-double border-4 border-black-400 w-3/6"
                onChange={e =>
                    compareText(e.target.value, currentHeadline.author)
                }
                value={currentText}
            />
        </div>
    )
}

const mapStateToProps = state => ({
    headlines: state.data.headlines,
    level: state.data.level,
    currentText: state.data.currentText,
})

export default connect(mapStateToProps, { compareText })(InputText)
