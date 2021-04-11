import React, { useContext } from 'react'
import './header.css'
import { Grid, MenuItem } from '@material-ui/core'
import { GlobalContext } from '../../context/Global'
import { ThemeContext } from '../../context/Theme'
import SettingsIcon from '@material-ui/icons/Settings';
import CreateIcon from '@material-ui/icons/Create';

function HeaderMenu() {
    const { state, setPage } = useContext(GlobalContext);
    const { ui } = useContext(ThemeContext);
    const { page, currentArticle } = state;

    return (
        <Grid className='header' >
            <MenuItem onClick={() => setPage('browse')}
                style={{ backgroundColor: ui.second, color: ui.fontColor1 }}
                className={page === "browse" ? "menu-item menu-item-active" : "menu-item"}>Browse all</MenuItem>
            <MenuItem
                style={{ backgroundColor: ui.second, color: ui.fontColor1  }}
                onClick={() => currentArticle === null ? setPage('current-random') : setPage('current')}
                className={page === "current" ? `menu-item menu-item-active ${currentArticle !== null && 'title-span'}` : `menu-item ${currentArticle !== null && 'title-span'}  `}>
                {currentArticle === null ? 'Random' : 'Current:'}
                {currentArticle !== null && <span className='title-span'>{currentArticle.title}</span>}
            </MenuItem>
            <MenuItem onClick={() => setPage('report')}
                style={{ backgroundColor: ui.second, color: ui.fontColor1  }}
                className={page === "report" ? "menu-item menu-item-active" : "menu-item"}>Report</MenuItem>
            <MenuItem onClick={() => setPage('settings')}
                style={{ backgroundColor: ui.second }}
                className={page === "settings" ? "settings-button menu-item menu-item-active" : "menu-item settings-button "}>
                <SettingsIcon />
            </MenuItem>
            <MenuItem onClick={() => setPage('write')}
                style={{ backgroundColor: ui.second, color: ui.fontColor1  }}
                className={page === "write" ? "settings-button menu-item menu-item-active" : "menu-item settings-button "}>
                <CreateIcon />
            </MenuItem>
        </Grid>
    )
}

export default HeaderMenu

