import React, { useState } from 'react';
import './modals.css'
import { GlobalContext } from '../../context/Global'
import { ThemeContext } from '../../context/Theme'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import CloseButtons from '../Buttons/CloseButtons';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(() => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }
}));

export default function Settings() {
    const { state, handleSettingsModal } = React.useContext(GlobalContext);
    const { setCurrentTheme, ui } = React.useContext(ThemeContext);
    const { settingsClicked } = state;
    const { themes } = React.useContext(ThemeContext);
    const classes = useStyles();
    const [selectedTheme, setTheme] = useState(ui);

    const submitTheme = (theme) => {
        setCurrentTheme(theme);
        setTheme(theme)
    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={settingsClicked}
                onClose={handleSettingsModal}
            >
                <Grid style={{backgroundColor: ui.main}} className='modal settings-modal'>
                <CloseIcon onClick={handleSettingsModal} className='close-modal-icon'/>

                    <Grid item className='themes'>
                        <Typography style={{color: ui.fontColor1, marginRight: 70}} variant='h4'>Select a theme:</Typography>

                        {
                            themes.map((theme, i) => {
                                return (<Grid key={i} item onClick={() => submitTheme(theme)}>
                                    <Typography style={{color: ui.fontColor1}}
                                     className={selectedTheme.name === theme.name ? 'theme theme-active' : 'theme'} 
                                     variant='subtitle1' >{theme.name.substr(5)}</Typography>
                                </Grid>)
                            })
                        }

                    </Grid>
                    <CloseButtons close={handleSettingsModal} submit={handleSettingsModal} />
                </Grid>
            </Modal>
        </div>
    );
}
