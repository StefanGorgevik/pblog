export const SET_PARAGRAPH_OPENED = "SET_PARAGRAPH_OPENED"

export const MainReducer = (state, action) => {
    switch (action.type) {
        case SET_PARAGRAPH_OPENED: {
            return {
                ...state, opened: action.payload
            }
        }
        default: {
            return state
        }
    }
}