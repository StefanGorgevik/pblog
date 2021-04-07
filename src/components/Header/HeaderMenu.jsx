import React, { useContext } from 'react'
import './header.css'
import { Grid, MenuItem } from '@material-ui/core'
import { GlobalContext } from '../../context/Global'

function HeaderMenu() {
    const { state, setPage } = useContext(GlobalContext);
    const { page, currentArticle } = state;

    return (
        <Grid className='header' >
            <MenuItem onClick={() => setPage('browse')}
                className={page === "browse" ? "menu-item menu-item-active" : "menu-item"}>Browse all</MenuItem>
                    <MenuItem
                        onClick={() => currentArticle === null ? setPage('current-random') : setPage('current')}
                        className={page === "current" ? `menu-item menu-item-active ${currentArticle !== null && 'title-span'}` : `menu-item ${currentArticle !== null && 'title-span'}  `}>
                        {currentArticle === null ? 'Random' : 'Current:'}
                        {currentArticle !== null && <span className='title-span'>{currentArticle.title}</span>}
                    </MenuItem>
            <MenuItem onClick={() => setPage('report')}
                className={page === "report" ? "menu-item menu-item-active" : "menu-item"}>Report</MenuItem>
        </Grid>
    )
}

export default HeaderMenu

