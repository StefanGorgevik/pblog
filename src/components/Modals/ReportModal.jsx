import React, { useState, useCallback } from 'react';
import './modals.css'
import { GlobalContext } from '../../context/Global'
import { ThemeContext } from '../../context/Theme'
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import CloseButtons from '../Buttons/CloseButtons';

export default function ReportModal() {
    const { setInfoModal, closeInfoModal, allArticles, reportArticle, setModal } = React.useContext(GlobalContext);
    const { ui } = React.useContext(ThemeContext);
    const [comments, setComments] = useState('');
    const [articleToReport, setArticleToReport] = useState('');

    const submitReportedArticle = useCallback(
        () => {
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
            reportArticle(ticket);
            //send it somewhere and close the modal in the response
            setInfoModal(true, 'Thank you for submitting the mistake!', 'success');
            setTimeout(() => {
                closeInfoModal();
                setModal('');
            }, 1500)
        },
        [articleToReport, comments, closeInfoModal, setModal, setInfoModal, reportArticle],
    )

    return (
        <div className='report-modal'>
            <FormControl style={{ maxWidth: '60%', margin: '0 auto', backgroundColor: ui.second }} className='select-article-report' fullWidth>
                <InputLabel style={{ color: ui.fontColor1 }}>Choose the article</InputLabel>
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
            <Grid style={{
                width: '100%',
                margin: '0 auto',
                marginTop: '20px',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <textarea onChange={(e) => setComments(e.target.value)} id='textarea' placeholder='Comments' className='text-area'
                    style={{ color: ui.fontColor1 }} >
                </textarea>
            </Grid>
            <CloseButtons close={() => setModal('')} submit={() => submitReportedArticle()} />
        </div>
    );
}
