import React from 'react';
import './modals.css'
import { GlobalContext } from '../../context/Global';
import { ThemeContext } from '../../context/Theme';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import BeenhereIcon from '@material-ui/icons/Beenhere';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    success: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '30%',
        height: '10%',
        textAlign: 'center',
        color: 'rgb(219, 219, 80)',
        borderRadius: '10px',
        paddingLeft: '30px',
        paddingRight: '30px',
    },
    icon: {
        fontSize: '35px',
        marginRight: '15px'
    }
}));

export default function InfoModal() {
    const { state, closeInfoModal } = React.useContext(GlobalContext)
    const { ui } = React.useContext(ThemeContext)
    const { showMessageModal, modalText, type } = state;
    const classes = useStyles();

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={showMessageModal}
                onClose={closeInfoModal}
            >
                <Grid className={classes.success} style={{backgroundColor: ui.main}}>
                    {type === 'warning' ? <PriorityHighIcon className={classes.icon} />
                        : <BeenhereIcon className={classes.icon} />}
                    <Typography variant="subtitle1" color="initial">{modalText}</Typography>
                </Grid>
            </Modal>
        </div>
    );
}
