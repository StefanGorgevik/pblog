import React from 'react';
import './style.css'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'

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
        width: '50%',
        height: '10%',
        textAlign: 'center',
        backgroundColor: '#1f2947',
        color: 'rgb(219, 219, 80)',
        borderRadius: '10px'
    }
}));

export default function ReportModal(props) {
    const classes = useStyles();
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={props.opened}
                onClose={props.setOpened}
            >
                <Grid className={classes.success}>
                   <Typography variant="subtitle1" color="initial">{props.text}</Typography>
                </Grid>
            </Modal>
        </div>
    );
}
