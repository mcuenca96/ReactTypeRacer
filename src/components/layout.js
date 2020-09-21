import React from "react"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
    return (
        <>
            <Helmet>
                <title>TypeRacer</title>
                <link
                    href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
                    rel="stylesheet"
                />
            </Helmet>
            {children}
        </>
    )
}

export default Layout
