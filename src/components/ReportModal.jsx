import React from 'react';
import './style.css'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

export default function ReportModal(props) {
    const classes = useStyles();
    console.log(props)
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={props.opened}
                onClose={props.setReportClicked}
            >
                <Grid className='modal'>
                    <div>
                        <Typography style={{marginBottom: '10px'}}
                         className='text' variant="h4" color="initial">Report a mistake</Typography>
                        <FormControl className='select-article-report' fullWidth>
                            <label htmlFor='demo-simple-select'>Choose an article</label>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={props.selectValue ? props.selectValue : ''}
                                onChange={(e) => props.setArticleToReport(e.target.value)}
                            >
                                {props.articles.map((article, i) => (
                                    <MenuItem key={i} value={article.title}>
                                        {article.title}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Grid>
                            <textarea onChange={(e) => props.setComments(e.target.value)} id='textarea' placeholder='Comments' className='text-area' rows="20" cols="50">
                            </textarea>
                        </Grid>
                        <Grid className='report-buttons'>
                            <Button className='report-button' onClick={props.closeReportModal}>Cancel</Button>
                            <Button className='report-button' onClick={props.submitReportedArticle}>Submit</Button>
                        </Grid>
                    </div>
                </Grid>
            </Modal>
        </div>
    );
}
