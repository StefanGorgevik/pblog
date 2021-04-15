import React, { useState, useContext } from 'react';
import './modals.css'
import { GlobalContext } from '../../context/Global'
import { ThemeContext } from '../../context/Theme'
import { Grid, Typography } from '@material-ui/core';

export default function Settings() {
    const { themes, setCurrentTheme, ui } = useContext(ThemeContext);
    const { setModal } = useContext(GlobalContext);
    const [selectedTheme, setTheme] = useState(ui);

    const submitTheme = (theme) => {
        setCurrentTheme(theme);
        setTheme(theme);
        setModal('')
    }

    return (
        <>
            <Grid item className='themes'>
                <Typography style={{ color: ui.fontColor1, marginRight: '100px' }} variant='h5' >Select a theme:</Typography>
                {
                    themes.map((theme, i) => {
                        return (<Grid key={i} item onClick={() => submitTheme(theme)}>
                            <Typography style={{ color: ui.fontColor1 }}
                                className={selectedTheme.name === theme.name ? 'theme theme-active' : 'theme'}
                                variant='subtitle1' >{theme.name.substr(5)}</Typography>
                        </Grid>)
                    })
                }

            </Grid>
        </>
    );
}
