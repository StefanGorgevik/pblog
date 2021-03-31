import React, { useState } from 'react';
import './modals.css'
import { GlobalContext } from '../../context/Global'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(() => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

export default function ReportModal() {
    const { state, setPage, setReportClicked, closeReportModal, setInfoModal, closeInfoModal, allArticles } = React.useContext(GlobalContext);
    const { reportClicked } = state;
    const classes = useStyles();
    const [comments, setComments] = useState('');
    const [articleToReport, setArticleToReport] = useState('');

    const submitReportedArticle = () => {
        if (articleToReport === '') {
            const text = 'You need to selected the article where you found the mistake in order to submit a ticket!';
            setInfoModal(true, text, 'warning');
            return;
        }
        if (comments === '') {
            const text = 'You need to enter a comment before submitting!';
            setInfoModal(true, text, 'warning');
            return;
        }
        let ticket = {
            comments,
            articleToReport
        }
        console.log(ticket)
        //send it somewhere and close the modal in the response
        setInfoModal(true, 'Thank you for submitting the mistake!', 'success');
        setTimeout(() => {
            closeInfoModal();
            setReportClicked(false);
            setPage('browse');
        }, 1500)
    }
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={reportClicked}
                onClose={closeReportModal}
            >
                <Grid className='modal'>
                    <div>
                        <CloseIcon onClick={closeReportModal} className='close-modal-icon'/>
                        <Typography style={{ marginBottom: '20px', borderBottom: '1px solid rgb(219, 219, 80)' }}
                            className='text' variant="h4" color="initial">Report a mistake</Typography>
                        <FormControl className='select-article-report' fullWidth>
                            <InputLabel style={{ color: 'rgb(219, 219, 80)' }}>Choose the article</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={articleToReport ? articleToReport : ''}
                                onChange={(e) => setArticleToReport(e.target.value)}
                            >
                                {allArticles.map((article, i) => (
                                    <MenuItem key={i} value={article.title}>
                                        {article.title}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Grid>
                            <textarea onChange={(e) => setComments(e.target.value)} id='textarea' placeholder='Comments' className='text-area' rows="20" cols="50">
                            </textarea>
                        </Grid>
                        <Grid className='report-buttons'>
                            <Button className='report-button' onClick={closeReportModal}>Cancel</Button>
                            <Button className='report-button' onClick={submitReportedArticle}>Submit</Button>
                        </Grid>
                    </div>
                </Grid>
            </Modal>
        </div>
    );
}
