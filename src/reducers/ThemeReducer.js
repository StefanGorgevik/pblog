export const SET_THEME = "SET_THEME"


export const ThemeReducer = (state, action) => {
    switch (action.type) {
        case SET_THEME: {
            return {
                ...state, theme: action.payload
            }
        }
        default: {
            return state
        }
    }
}