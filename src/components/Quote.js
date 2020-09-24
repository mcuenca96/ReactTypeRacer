import React, { useEffect } from "react"
import { connect } from "react-redux"
import { getQuotes } from "../actions/racerAction"

const Quote = props => {
    const { quotes, level, getQuotes } = props

    useEffect(() => {
        getQuotes()
        // eslint-disable-next-line
    }, [])

    const currentQuote = quotes[level]

    const avoidCopy = () => {
        // alert("Don't copy it")
        // //PROVISIONAL
        // window.location.reload()
    }

    return (
        <div className="flex justify-center my-10">
            <div className="border-dashed text-center border-4 border-gray-400 w-3/6">
                {props.quotes.length === 0 ? null : (
                    <>
                        <p onCopy={() => avoidCopy()}>{currentQuote.quote}</p>
                    </>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    quotes: state.data.quotes,
    level: state.data.level,
})

export default connect(mapStateToProps, { getQuotes })(Quote)
