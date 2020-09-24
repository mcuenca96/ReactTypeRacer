import {
    CURRENT_INPUT,
    LEVEL_INCREASE,
    OBTAIN_QUOTE,
    CLEAR_TEXT,
    COUNTDOWN,
    GAME_OVER,
} from "../../types"
import axiosClient from "../../config/axios"

export function getQuotes() {
    return async dispatch => {
        try {
            const response = await axiosClient.get("quotes/3")

            dispatch({
                type: OBTAIN_QUOTE,
                payload: response.data,
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function compareText(inputText, quote) {
    if (inputText === quote) {
        return dispatch => {
            dispatch({
                type: LEVEL_INCREASE,
            })
        }
    } else if (inputText.length === quote.length) {
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

export function countdown() {
    return dispatch => {
        dispatch({
            type: COUNTDOWN,
        })
    }
}

export function resetGame() {
    return dispatch => {
        dispatch({
            type: GAME_OVER,
        })
    }
}
