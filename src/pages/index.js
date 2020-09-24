import React from "react"
import Layout from "../components/layout"
import Header from "../components/Header"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { resetGame } from "../actions/racerAction"

const IndexPage = props => {
    const { resetGame } = props

    return (
        <Layout>
            <Header />
            <div className="text-center">
                <button
                    type="button"
                    className="bg-red-700 rounded p-4 uppercase"
                    onClick={() => resetGame()}
                >
                    <Link to="/play">Start Game</Link>
                </button>
            </div>
        </Layout>
    )
}

export default connect(null, { resetGame })(IndexPage)
