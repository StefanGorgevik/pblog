export const SET_PAGE = "SET_PAGE"
export const SET_ACTIVE_ARTICLE = "SET_ACTIVE_ARTICLE"
export const SET_CURRENT_ARTICLE = "SET_CURRENT_ARTICLE"
export const SET_REPORT_CLICKED = "SET_REPORT_CLICKED"
export const SET_INFO_MODAL = "SET_INFO_MODAL"
export const CLOSE_INFO_MODAL = "CLOSE_INFO_MODAL"
export const SET_PARAGRAPH_OPENED = "SET_PARAGRAPH_OPENED"

export const MainReducer = (state, action) => {
    switch (action.type) {
        case SET_PAGE: {
            return {
                ...state, page: action.payload
            }
        }
        case SET_ACTIVE_ARTICLE: {
            return {
                ...state, activeArticle: action.payload
            }
        }
        case SET_CURRENT_ARTICLE: {
            return {
                ...state, currentArticle: action.payload
            }
        }
        case SET_REPORT_CLICKED: {
            return {
                ...state, reportClicked: action.payload
            }
        }
        case SET_INFO_MODAL: {
            return {
                ...state,
                showMessageModal: action.payload.bool,
                modalText: action.payload.text,
                type: action.payload.type
            }
        }
        case CLOSE_INFO_MODAL: {
            return {
                ...state, showMessageModal: action.payload
            }
        }
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