import React, { useContext } from 'react'
import { Grid, Button } from '@material-ui/core'
import { ThemeContext } from '../../context/Theme'

function CloseButtons({ close, submit }) {
    const { ui } = useContext(ThemeContext)
    return (
        <Grid className='close-buttons'>
            <Button style={{ backgroundColor: ui.second, color: ui.fontColor1 }}
                className='close-button'
                onClick={close}>Cancel</Button>
            <Button style={{ backgroundColor: ui.second, color: ui.fontColor1 }}
                className='close-button'
                onClick={submit}>Save</Button>
        </Grid>
    )
}

export default CloseButtons
