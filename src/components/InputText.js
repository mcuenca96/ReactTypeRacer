import React from "react"
import { connect } from "react-redux"
import { compareText } from "../actions/racerAction"

const InputText = props => {
    const { quotes, level, currentText, compareText } = props

    const currentQuote = quotes[level]

    return (
        <div className="flex justify-center">
            <input
                tye="text"
                className="border-double border-4 border-black-400 w-3/6"
                onChange={e => compareText(e.target.value, currentQuote.quote)}
                value={currentText}
            />
        </div>
    )
}

const mapStateToProps = state => ({
    quotes: state.data.quotes,
    level: state.data.level,
    currentText: state.data.currentText,
})

export default connect(mapStateToProps, { compareText })(InputText)
