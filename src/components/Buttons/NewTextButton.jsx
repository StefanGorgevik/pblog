import React, {useContext} from 'react'
import './buttons.css'
import { ThemeContext } from '../../context/Theme'

function NewTextButton() {
    const {ui} = useContext(ThemeContext)

    return (
        <button style={{backgroundColor: ui.second, color: ui.fontColor1}} className='new-text-button'>
            Add New
        </button>
    )
}

export default NewTextButton
