import React, { createContext, useReducer } from 'react'
import { MainReducer, SET_PARAGRAPH_OPENED} from '../reducers/MainReducer'

const initState = {
    opned: true
}

export const GlobalContext = createContext(initState)

export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(MainReducer, initState);
    const {opened} = state;

    const openAllParagraphs = () => {
        dispatch({ type: SET_PARAGRAPH_OPENED, payload: !opened });
    }

    return (
        <GlobalContext.Provider value={{
            dispatch, openAllParagraphs, opened
        }}>
            {children}
        </GlobalContext.Provider>
    )
}