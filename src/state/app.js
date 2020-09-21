import {
    CLEAR_TEXT,
    CURRENT_INPUT,
    LEVEL_INCREASE,
    OBTAIN_HEADLINES,
} from "../../types"

const initialState = {
    headlines: [],
    error: null,
    loading: true,
    level: 0,
    currentText: "",
    currentTime: 30,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case OBTAIN_HEADLINES:
            return {
                ...state,
                headlines: action.payload,
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

        default:
            return state
    }
}
