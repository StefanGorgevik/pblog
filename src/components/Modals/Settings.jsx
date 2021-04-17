import React, { useState, useContext } from 'react';
import './modals.css'
import { GlobalContext } from '../../context/Global'
import { ThemeContext } from '../../context/Theme'
import { Grid, Typography } from '@material-ui/core';
import CloseButtons from '../Buttons/CloseButtons';

export default function Settings() {
    const { themes, setCurrentTheme, ui } = useContext(ThemeContext);
    const { setModal } = useContext(GlobalContext);
    const [selectedTheme, setTheme] = useState(ui);

    const saveSettings = () => {
        setCurrentTheme(selectedTheme);
        setTheme(selectedTheme);
        setModal('')
    }

    const selectTheme = (theme) => {
        setTheme(theme)
        setCurrentTheme(theme);
    }

    return (
        <div style={{ width: '100%' }}>
            <Grid item className='themes'>
                <Typography style={{ color: ui.fontColor1, marginRight: '100px' }} variant='h5' >Select a theme:</Typography>
                {
                    themes.map((theme, i) => {
                        return (<Grid key={i} item onClick={() => selectTheme(theme)}>
                            <Typography style={{ color: ui.fontColor1 }}
                                className={selectedTheme.name === theme.name ? 'theme theme-active' : 'theme'}
                                variant='subtitle1' >{theme.name.substr(5)}</Typography>
                        </Grid>)
                    })
                }

            </Grid>
            <CloseButtons close={() => setModal('')} submit={() => saveSettings()} />
        </div>
    );
}
