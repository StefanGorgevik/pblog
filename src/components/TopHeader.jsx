import React from 'react'
import './style.css'
import { Grid, Typography } from '@material-ui/core'
import Logo from '../data/technical-support.svg'
import Logo2 from '../data/development.svg'

function TopHeader() {
    return (
        <Grid className='top-header' container>
            <img className="logo-image-1" src={Logo} alt="logo"/>
            <Typography className='main-title' variant="h4" color="initial">The Javascript Supply</Typography>
            <img className="logo-image-2" src={Logo2} alt="second logo"/>
        </Grid>
    )
}

export default TopHeader
