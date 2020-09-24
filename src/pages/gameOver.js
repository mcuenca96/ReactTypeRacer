import React from "react"
import Layout from "../components/layout"
import Header from "../components/Header"
import { Link } from "gatsby"

const GameOver = () => {
    return (
        <Layout>
            <Header />
            <div className="text-center">
                <button
                    type="button"
                    className="bg-red-700 rounded p-5 uppercase"
                >
                    <Link to="/">Try again</Link>
                </button>
            </div>
        </Layout>
    )
}

export default GameOver
