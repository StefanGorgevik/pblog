import React, { useContext } from 'react'
import { ThemeContext } from '../../context/Theme'
import './buttons.css'
import { Button } from '@material-ui/core'

function SaveArticleButton({ click, width, text, fixed }) {
    const {ui} = useContext(ThemeContext)
    return (
        <Button style={{ position: fixed ? 'fixed' : '', 
        right: fixed && '50px',
        backgroundColor: ui.second, width: width ? '500px' : ''}}
         className='open-button save-article-button' 
         variant="text" 
         onClick={click}>
        {text}
      </Button>
       
    )
}

export default SaveArticleButton
