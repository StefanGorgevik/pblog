import React, {useContext} from 'react'
import './header.css'
import { Grid, Typography } from '@material-ui/core'
import Logo from '../../data/technical-support.svg'
import Logo2 from '../../data/development.svg'
import HeaderMenu from './HeaderMenu'
import { ThemeContext } from '../../context/Theme'

function TopHeader() {
    const { ui } = useContext(ThemeContext);

    return (
        <Grid container className='header-main' >
            <Grid className='top-header' onClick={() => window.location.reload()} style={{backgroundColor: ui.second}}>
                <img className="logo-image-1" src={Logo} alt="logo" />
                <Typography className='main-title' variant="h4" color="initial">The Javascript Supply</Typography>
                <img className="logo-image-2" src={Logo2} alt="second logo" />
            </Grid>
            <HeaderMenu />
        </Grid>

    )
}

export default TopHeader
