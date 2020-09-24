import React from "react"
import Quote from "../components/Quote"
import Layout from "../components/layout"
import Header from "../components/Header"
import InputText from "../components/InputText"
import CurrentLevel from "../components/CurrentLevel"
import Timer from "../components/Timer"

const Play = () => {
    return (
        <Layout>
            <Header />
            <CurrentLevel />
            <Quote />
            <InputText />
            <Timer />
        </Layout>
    )
}

export default Play
