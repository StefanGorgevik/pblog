export const SAVE_ARTICLES_STARTUP = "SAVE_ARTICLES_STARTUP"
export const SET_PAGE = "SET_PAGE"
export const SET_ACTIVE_ARTICLE = "SET_ACTIVE_ARTICLE"
export const SET_CURRENT_ARTICLE = "SET_CURRENT_ARTICLE"
export const SET_INFO_MODAL = "SET_INFO_MODAL"
export const CLOSE_INFO_MODAL = "CLOSE_INFO_MODAL"
export const SET_PARAGRAPH_OPENED = "SET_PARAGRAPH_OPENED"
export const JUMP_TO_PARAGRAPH = "JUMP_TO_PARAGRAPH"
export const MODAL_OPEN = " MODAL_OPEN"
export const ADD_NEW_PARAPGRAPH = " ADD_NEW_PARAPGRAPH"
export const EDIT_PARAPGRAPH = "EDIT_PARAPGRAPH"
export const SAVE_NEW_ARTICLE = "SAVE_NEW_ARTICLE"
export const ADD_TODO = "ADD_TODO"
export const COMPLETE_TODO = "COMPLETE_TODO"

export const MainReducer = (state, action) => {
    switch (action.type) {
        case SAVE_ARTICLES_STARTUP: {
            return {
                ...state, articles: action.payload
            }
        }
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
                ...state, allParagraphsOpened: action.payload
            }
        }
        case JUMP_TO_PARAGRAPH: {
            return {
                ...state, jumpParagraph: action.payload
            }
        }
        case MODAL_OPEN: {
            return {
                ...state, modal: action.payload
            }
        }
        case ADD_NEW_PARAPGRAPH: {
            return {
                ...state, newParagraphs: [...state.newParagraphs, action.payload]
            }
        }
        case SAVE_NEW_ARTICLE: {
            return {
                ...state, articles: [...state.articles, action.payload]
            }
        }
        case EDIT_PARAPGRAPH: {
            return {
                ...state, paragraphToEdit: action.payload
            }
        }
        case ADD_TODO: {
            return {
                ...state, todos: [...state.todos, action.payload]
            }
        }
        case COMPLETE_TODO: {
            let todo = state.todos.findIndex(t => t.id === action.payload.id);
            let newTodos = state.todos;
            newTodos[todo].completed = true;
            return {
                ...state, todos: newTodos
            }
        }
        default: {
            return state
        }
    }
}