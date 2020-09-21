import React from "react"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import { createStore, applyMiddleware, compose } from "redux"
import rootReducer from "."

const initialState = {}
const middleware = [thunk]

const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware))
)

export default ({ element }) => <Provider store={store}>{element}</Provider>
