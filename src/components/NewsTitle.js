import React, { useEffect } from "react"
import { connect } from "react-redux"
import { getHeadlines } from "../actions/racerAction"

const NewsTitle = props => {
    const { headlines, level, getHeadlines } = props

    useEffect(() => {
        getHeadlines()
        // eslint-disable-next-line
    }, [])

    const currentHeadline = headlines[level]

    const avoidCopy = () => {
        alert("Don't copy it")
        //PROVISIONAL
        window.location.reload()
    }

    return (
        <div className="flex justify-center my-10">
            <div className="border-dashed text-center border-4 border-gray-400 w-3/6">
                {props.headlines.length === 0 ? null : (
                    <>
                        <p onCopy={() => avoidCopy()}>
                            {currentHeadline.author}
                        </p>
                    </>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    headlines: state.data.headlines,
    level: state.data.level,
})

export default connect(mapStateToProps, { getHeadlines })(NewsTitle)
