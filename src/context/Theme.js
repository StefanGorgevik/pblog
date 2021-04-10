import React, { useEffect, useState, createContext, useReducer } from 'react'
import { ThemeReducer, SET_THEME, } from '../reducers/ThemeReducer'

const initState = {
    currentTheme: 'themeBlue',
    themes: [{
        name: 'themeBlue',
        main: '#1f2947',
        second: '#2d3a5f',
        hover: '#455b99'
    },
    {
        name: 'themeBlack',
        main: 'black',
        second: '#2d3a5f',
        hover: '#455b99'
    },
    {
        name: 'themeLight',
        main: 'whitesmoke',
        second: '#2d3a5f',
        hover: '#455b99'
    },
    {
        name: 'themeWhite',
        main: 'white',
        second: '#2d3a5f',
        hover: '#455b99'
    }
    ]
}

export const ThemeContext = createContext(initState)

export const ThemeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ThemeReducer, initState);
    const [ui, setUI] = useState('themeBlue')

    useEffect(() => {
        setUI(state.themes[0])
       
    }, [state.currentTheme])

    const setCurrentTheme = (name) => {
        console.log('UI', name);
        let theme = state.themes.find(t => t.name === name);
        console.log("THEME", theme)
        setUI(theme)
        dispatch({ type: SET_THEME, payload: name })
    }

    return (
        <ThemeContext.Provider value={{
            state, dispatch, ui, themes: state.themes, setCurrentTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    )
}