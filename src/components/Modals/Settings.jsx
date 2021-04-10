import React, { useState } from 'react';
import './modals.css'
import { GlobalContext } from '../../context/Global'
import { ThemeContext } from '../../context/Theme'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import CloseButtons from './CloseButtons';

const useStyles = makeStyles(() => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }
}));

export default function Settings() {
    const { setPage, state, handleSettingsModal } = React.useContext(GlobalContext);
    const { setCurrentTheme } = React.useContext(ThemeContext);
    const { settingsClicked } = state;
    const { themes } = React.useContext(ThemeContext);
    const classes = useStyles();
    const [selectedTheme, setTheme] = useState('');


    const submitTheme = () => {
        console.log('selectedTheme', selectedTheme)
        setCurrentTheme(selectedTheme)
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
                <Grid className='modal settings-modal'>
                    <Grid item className='themes'>

                        {
                            themes.map((theme, i) => {
                                return (<Grid key={i} item onClick={() => setTheme(theme.name)}>
                                    <Typography  variant='subtitle1' className='theme' >{theme.name}</Typography>
                                </Grid>)
                            })
                        }

                    </Grid>
                    <CloseButtons close={handleSettingsModal} submit={submitTheme} />
                </Grid>
            </Modal>
        </div>
    );
}
