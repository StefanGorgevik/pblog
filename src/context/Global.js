import React, { createContext, useReducer } from 'react'
import { MainReducer, SET_PAGE, SET_ACTIVE_ARTICLE, SET_CURRENT_ARTICLE, SET_PARAGRAPH_OPENED, SET_REPORT_CLICKED, SET_INFO_MODAL, CLOSE_INFO_MODAL, JUMP_TO_PARAGRAPH, SETTINGS_CLICKED, SET_NEW_PARAGRAPH_CLICKED } from '../reducers/MainReducer'
import { allArticles } from '../data/data'

const initState = {
    page: 'browse',
    currentArticle: null,
    acrtiveArticle: null,
    reportClicked: false,
    articleToReport: '',
    content: false,
    showMessageModal: false,
    comments: '',
    modalText: '',
    allParagraphsOpened: false,
    jumpParagraph: '',
    settingsClicked: false,
    newParagraphClicked: false
}

export const GlobalContext = createContext(initState)

export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(MainReducer, initState);

    const openAllParagraphs = () => {
        dispatch({ type: SET_PARAGRAPH_OPENED, payload: !state.allParagraphsOpened });
    }

    const handleSettingsModal = () => {
        dispatch({ type: SETTINGS_CLICKED, payload: !state.settingsClicked })
    }

    const setPage = (page) => {
        if (page === 'current-random') {
            let random = Math.floor(Math.random() * allArticles.length);
            let article = allArticles[random];
            dispatch({ type: SET_ACTIVE_ARTICLE, payload: article.id });
            dispatch({ type: SET_CURRENT_ARTICLE, payload: article });
            dispatch({ type: SET_PAGE, payload: 'current' });
        } else if (page === 'settings') {
            handleSettingsModal();
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

    const setReportClicked = () => {
        setPage(null);
        dispatch({ type: SET_REPORT_CLICKED, payload: !state.reportClicked });
    }
    

    const closeReportModal = () => {
        setReportClicked(false);
        setPage('browse');
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

    const setNewParagraphClicked = () => {
        dispatch({ type: SET_NEW_PARAGRAPH_CLICKED, payload: !state.newParagraphClicked });
    }

    return (
        <GlobalContext.Provider value={{
            state, allArticles, dispatch, openAllParagraphs, setPage, selectArticle, setReportClicked, closeReportModal,
            setInfoModal, closeInfoModal, jumpToParagraph, handleSettingsModal, setNewParagraphClicked
        }}>
            {children}
        </GlobalContext.Provider>
    )
}