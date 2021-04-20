import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {ThemeContext} from '../context/Theme'
function Error() { 
    const {ui} = React.useContext(ThemeContext)
    return (
        <Grid item style={{display: 'flex', marginTop: 300, alignItems:'center'}}>
            <Typography style={{color: ui.fontColor1}} variant="h4" color="initial">Page not found</Typography>
        </Grid>
    )
}

export default Error
