import {
    CURRENT_INPUT,
    LEVEL_INCREASE,
    OBTAIN_HEADLINES,
    CLEAR_TEXT,
} from "../../types"
import axiosClient from "../../config/axios"

export function getHeadlines() {
    return async dispatch => {
        try {
            const response = await axiosClient.get(
                `everything?q=videogames&apiKey=${process.env.API_KEY}`
            )

            dispatch({
                type: OBTAIN_HEADLINES,
                payload: response.data.articles,
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function compareText(inputText, headlineText) {
    if (inputText === headlineText) {
        return dispatch => {
            dispatch({
                type: LEVEL_INCREASE,
            })
        }
    } else if (inputText.length === headlineText.length) {
        return dispatch => {
            dispatch({
                type: CLEAR_TEXT,
            })
        }
    } else {
        return dispatch => {
            dispatch({
                type: CURRENT_INPUT,
                payload: inputText,
            })
        }
    }
}
