import React from 'react'
import { Grid, Button } from '@material-ui/core'

function CloseButtons({ close, submit }) {
    return (
        <Grid className='close-buttons'>
            <Button className='report-button' onClick={close}>Cancel</Button>
            <Button className='report-button' onClick={submit}>Submit</Button>
        </Grid>
    )
}

export default CloseButtons
