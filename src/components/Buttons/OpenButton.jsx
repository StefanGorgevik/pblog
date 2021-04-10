import React from 'react'
import './buttons.css'
import { Button } from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

function OpenButton({ click, opened, text }) {
    return (
        <Button className='open-button' onClick={click}><span>{text}</span>
            {!opened ? <KeyboardArrowDownIcon className='open-arrow' />
                : <KeyboardArrowUpIcon className='open-arrow' />}</Button>
    )
}

export default OpenButton
