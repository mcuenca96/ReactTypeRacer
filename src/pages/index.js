import React from "react"
import NewsTitle from "../components/NewsTitle"
import Layout from "../components/layout"
import Header from "../components/Header"
import InputText from "../components/InputText"
import CurrentLevel from "../components/CurrentLevel"

const IndexPage = () => {
    return (
        <Layout>
            <Header />
            <NewsTitle />
            <InputText />
            <CurrentLevel />
        </Layout>
    )
}

export default IndexPage
