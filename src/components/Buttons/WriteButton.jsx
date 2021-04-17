import React, { useContext } from 'react'
import { ThemeContext } from '../../context/Theme'
import './buttons.css'
import { Button } from '@material-ui/core'

export default function WriteButton({ click, width, text, fixed }) {
  const { ui } = useContext(ThemeContext)
  return (
    <Button style={{
      position: fixed ? 'fixed' : '',
      right: fixed && '50px',
      backgroundColor: ui.second, width: width ? '600px' : '',
      marginRight: !fixed ? '20px' : '',
      height: !fixed ? '50px' : '',
    }}
      className='open-button save-article-button'
      variant="text"
      onClick={click}>
      {text}
    </Button>

  )
}
