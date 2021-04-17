import React, { createContext, useReducer, useEffect } from 'react'
import { MainReducer, SAVE_ARTICLES_STARTUP, SET_PAGE, SET_ACTIVE_ARTICLE, SET_CURRENT_ARTICLE, SET_PARAGRAPH_OPENED, SET_INFO_MODAL, CLOSE_INFO_MODAL, JUMP_TO_PARAGRAPH, MODAL_OPEN, ADD_NEW_PARAPGRAPH, EDIT_PARAPGRAPH, SAVE_NEW_ARTICLE } from '../reducers/MainReducer'
import { allArticles } from '../data/data'

const initState = {
    articles: [],
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
    modal: '',
    newParagraphs: [],
    paragraphToEdit: null
}

export const GlobalContext = createContext(initState)

export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(MainReducer, initState);
    const ARTICLES = state.articles;

    useEffect(() => {
        dispatch({ type: SAVE_ARTICLES_STARTUP, payload: allArticles });
    }, [])

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

    const addNewParagraph = (paragraph) => {
        console.log('paragraph REPORT', paragraph)
        dispatch({ type: ADD_NEW_PARAPGRAPH, payload: paragraph });
    }
    const saveArticle = (article) => {
        console.log('article NEW', article)
        let newID = ARTICLES.length + 1;
        article.id = newID;
        dispatch({ type: SAVE_NEW_ARTICLE, payload: article });
        setPage('browse')
    }
    const reportArticle = (article) => {
        console.log('article REPORT', article)
        // dispatch({ type: REPORTED_ARTICLE, payload: article });
    }

    const editParagraph = (paragraph) => {
        dispatch({ type: EDIT_PARAPGRAPH, payload: paragraph });
        setModal('new-paragraph')

    }

    return (
        <GlobalContext.Provider value={{
            state, allArticles: ARTICLES, dispatch, openAllParagraphs, setPage, selectArticle,
            setInfoModal, closeInfoModal, jumpToParagraph, setModal, addNewParagraph, reportArticle, editParagraph, 
            saveArticle
        }}>
            {children}
        </GlobalContext.Provider>
    )
}