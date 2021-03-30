import React, {useContext} from 'react'
import './style.css'
import { Grid, MenuItem, Button } from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {GlobalContext} from '../context/GlobalState'

function Header({ page, setPage, shouldShow, disableCurrent }) {
    const {openAllParagraphs, opened} = useContext(GlobalContext);
    return (
        <Grid className='header-wrapper'>
            <Grid className='header' >
                <MenuItem onClick={() => setPage('browse')}
                    className={page === "browse" ? "menu-item menu-item-active" : "menu-item"}>Browse all</MenuItem>
                <MenuItem disabled={disableCurrent} onClick={() => setPage('current')}
                    className={page === "current" ? "menu-item menu-item-active" : "menu-item"}>Current</MenuItem>
                <MenuItem onClick={() => setPage('report')}
                    className={page === "report" ? "menu-item menu-item-active" : "menu-item"}>Report</MenuItem>
            </Grid>
            {
                page === 'current' && shouldShow &&
                <Button onClick={openAllParagraphs}
                    className='open-button'>{opened ? 'Close all' : 'Open all'}
                    {!opened ? <KeyboardArrowDownIcon className='open-arrow' /> :
                        <KeyboardArrowUpIcon className='open-arrow' />}
                </Button>
            }
        </Grid>
    )
}

export default Header

