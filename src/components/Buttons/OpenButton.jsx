import React, { useContext } from 'react'
import { ThemeContext } from '../../context/Theme'
import './buttons.css'
import { Button } from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

function OpenButton({ click, opened, text }) {
    const {ui} = useContext(ThemeContext)
    return (
        <Button style={{backgroundColor: ui.second}} className='open-button' onClick={click}>
            <span>{text}</span>
            {
            !opened ? <KeyboardArrowDownIcon className='open-arrow' style={{backgroundColor: ui.main}} />
                : <KeyboardArrowUpIcon style={{backgroundColor: ui.main}} className='open-arrow' />}</Button>
    )
}

export default OpenButton
