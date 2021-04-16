import React, {  useState, createContext, useReducer } from 'react'
import { ThemeReducer, SET_THEME, } from '../reducers/ThemeReducer'

const initState = {
    theme: 'themeBlack',
    themes: [{
        name: 'themeBlue',
        main: '#1f2947',
        second: '#2d3a5f',
        fontColor1: 'rgb(219, 219, 80)',
        fontColor2: 'white'
    },
    {
        name: 'themeBlack',
        main: 'rgb(15, 15, 15)',
        second: 'rgba(39, 37, 37, 0.938)',
        fontColor1: 'rgb(219, 219, 80)',
        fontColor2: 'white'
    },
    // {
    //     name: 'themeLight',
    //     main: 'whitesmoke',
    //     second: '#2d3a5f',
    //     fontColor1: 'rgb(219, 219, 80)',
    //     fontColor2: 'white'
    // },
    // {
    //     name: 'themeWhite',
    //     main: 'white',
    //     second: '#2d3a5f',
    //     fontColor1: 'rgb(219, 219, 80)',
    //     fontColor2: 'white'
    // }
    ]
}

export const ThemeContext = createContext(initState)

export const ThemeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ThemeReducer, initState);
    const [ui, setUI] = useState(state.themes[1])

    // useEffect(() => {
    //     setUI(state.themes[0])
    // }, [state.themes])

    const setCurrentTheme = (theme) => {
        setUI(theme)
        dispatch({ type: SET_THEME, payload: theme })
    }

    return (
        <ThemeContext.Provider value={{
            state, dispatch, ui, themes: state.themes, setCurrentTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    )
}