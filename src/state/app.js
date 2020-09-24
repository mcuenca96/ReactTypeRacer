import {
    CLEAR_TEXT,
    COUNTDOWN,
    CURRENT_INPUT,
    GAME_OVER,
    LEVEL_INCREASE,
    OBTAIN_QUOTE,
} from "../../types"

const initialState = {
    quotes: [],
    level: 0,
    currentText: "",
    currentTime: 30,
    start: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case OBTAIN_QUOTE:
            return {
                ...state,
                quotes: action.payload,
            }

        case LEVEL_INCREASE:
            return {
                ...state,
                level: state.level + 1,
                currentText: "",
                currentTime: state.currentTime + 3,
            }

        case CURRENT_INPUT:
            return {
                ...state,
                currentText: action.payload,
            }

        case CLEAR_TEXT:
            return {
                ...state,
                currentText: "",
            }

        case COUNTDOWN:
            return {
                ...state,
                currentTime: state.currentTime - 1,
            }

        case GAME_OVER:
        default:
            return initialState
    }
}
