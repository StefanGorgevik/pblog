import React from 'react'
import './style.css'
import { Grid, MenuItem } from '@material-ui/core'

function Header(props) {
    return (
        <Grid className='header' container>
              <MenuItem onClick={() => props.setPage('browse')} 
              className={props.page === "browse" ? "menu-item menu-item-active": "menu-item"}>Browse all articles </MenuItem>
              <MenuItem onClick={() => props.setPage('current')} 
              className={props.page === "current" ? "menu-item menu-item-active": "menu-item"}>Current </MenuItem>
        </Grid>
    )
}

export default Header
