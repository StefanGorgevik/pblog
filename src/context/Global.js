import React, { createContext, useReducer } from 'react'
import { MainReducer, SET_PAGE, SET_ACTIVE_ARTICLE, SET_CURRENT_ARTICLE, SET_PARAGRAPH_OPENED, SET_INFO_MODAL, CLOSE_INFO_MODAL, JUMP_TO_PARAGRAPH, MODAL_OPEN } from '../reducers/MainReducer'
import { allArticles } from '../data/data'

const initState = {
    page: 'browse',
    currentArticle: null,
    activeArticle: null,
    articleToReport: '',
    content: false,
    showMessageModal: false,
    comments: '',
    modalText: '',
    allParagraphsOpened: false,
    jumpParagraph: '',
    modal: ''
}

export const GlobalContext = createContext(initState)

export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(MainReducer, initState);

    const openAllParagraphs = () => {
        dispatch({ type: SET_PARAGRAPH_OPENED, payload: !state.allParagraphsOpened });
    }

    const setPage = (page) => {
        if (page === 'current-random') {
            let random = Math.floor(Math.random() * allArticles.length);
            let article = allArticles[random];
            dispatch({ type: SET_ACTIVE_ARTICLE, payload: article.id });
            dispatch({ type: SET_CURRENT_ARTICLE, payload: article });
            dispatch({ type: SET_PAGE, payload: 'current' });
        } else if (page === 'settings') {
            setModal('settings');
        } else if(page === 'report') {
            setModal('report');
        } else {
            dispatch({ type: SET_PAGE, payload: page });
        }
    }

    const selectArticle = (article, type) => {
        let current = null;
        if (type === 'more') {
            let found = allArticles.find(a => a.title === article.title);
            if (found) {
                current = found;
            }
        } else if (type === 'all') {
            current = article;
        }
        window.localStorage.setItem('article', JSON.stringify(current));
        dispatch({ type: SET_ACTIVE_ARTICLE, payload: current.id });
        dispatch({ type: SET_CURRENT_ARTICLE, payload: current });
        setPage('current');
    }

    const setInfoModal = (bool, text, type) => {
        dispatch({ type: SET_INFO_MODAL, payload: { bool, text, type } });
    };

    const closeInfoModal = () => {
        dispatch({ type: CLOSE_INFO_MODAL, payload: false });
    };

    const jumpToParagraph = (title) => {
        dispatch({ type: JUMP_TO_PARAGRAPH, payload: title });
    }

    const setModal = (modal) => {
        dispatch({ type: MODAL_OPEN, payload: modal });
    }

    return (
        <GlobalContext.Provider value={{
            state, allArticles, dispatch, openAllParagraphs, setPage, selectArticle,
            setInfoModal, closeInfoModal, jumpToParagraph, setModal
        }}>
            {children}
        </GlobalContext.Provider>
    )
}