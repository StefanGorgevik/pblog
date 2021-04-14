import React, { useState } from 'react';
import './modals.css'
import { GlobalContext } from '../../context/Global'
import { ThemeContext } from '../../context/Theme'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close';
import CloseButtons from '../Buttons/CloseButtons';
import NewTextButton from '../Buttons/NewTextButton';

const useStyles = makeStyles(() => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

export default function NewParagraph() {
    const { state, setNewParagraphClicked } = React.useContext(GlobalContext);
    const { ui } = React.useContext(ThemeContext);
    const { newParagraphClicked } = state;
    const classes = useStyles();
    const [gist, setGist] = useState('No');
    const [fullUrl, setFullUrl] = useState('No');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [error, setError] = useState('');
    const [gistUrl, setGistUrl] = useState('');
    const [fullArticleUrl, setFullArticleUrl] = useState('');

    const addParagraph = () => {
        if(title === '') return setError('title')
    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={newParagraphClicked}
                onClose={setNewParagraphClicked}
            >
                <Grid className='modal' style={{ backgroundColor: ui.main, width: '60%', padding: '1%' }}>
                    <CloseIcon onClick={setNewParagraphClicked} className='close-modal-icon' />
                    <div style={{ width: '100%' }}>
                        <Typography style={{
                            margin: '0 auto',
                            width: '50%',
                            textAlign: 'center',
                            marginBottom: '20px',
                            borderBottom: '1px solid rgb(219, 219, 80)'
                        }}
                            className='text' variant="h4" color="initial">Add a paragraph</Typography>
                        <Grid item className='write-title' >
                            <label className='write-labels' style={{ color: ui.fontColor1 }} htmlFor='title'>
                                Title of article </label>
                            <TextField
                                fullWidth
                                style={{ backgroundColor: ui.second, color: ui.fontColor1 }}
                                id="title"
                                label="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                error={error === 'title'}
                            />
                        </Grid>

                        <Grid className='radio-buttons'>
                            <FormControl style={{ margin: '1%' }} component="fieldset">
                                <FormLabel component="legend" style={{
                                    color: ui.fontColor1,
                                    fontSize: '20px'
                                }} >Gist</FormLabel>
                                <RadioGroup style={{ display: 'flex', flexDirection: 'row' }} aria-label="gist"
                                    name="Gist" value={gist} onChange={(e) => setGist(e.target.value)}>
                                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="No" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>

                            <FormControl style={{ margin: '1%' }} component="fieldset">
                                <FormLabel component="legend" style={{
                                    color: ui.fontColor1,
                                    fontSize: '20px'
                                }} >Full article URL</FormLabel>
                                <RadioGroup style={{ display: 'flex', flexDirection: 'row' }} aria-label="gist"
                                    name="Full article" value={fullUrl} onChange={(e) => setFullUrl(e.target.value)}>
                                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="No" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        {
                            gist === 'Yes' &&
                            <Grid item className='write-title' >
                                <label className='write-labels' style={{ color: ui.fontColor1 }} htmlFor='gist-url'>
                                    Git Gist Url </label>
                                <TextField
                                    fullWidth
                                    style={{ backgroundColor: ui.second, color: ui.fontColor1 }}
                                    id="gist-url"
                                    label=" Git Gist Url"
                                    value={gistUrl}
                                    onChange={(e) => setGistUrl(e.target.value)}
                                    error={error === 'gist-url'}
                                />
                            </Grid>
                        }

                        {
                            fullUrl === 'Yes' &&
                            <Grid item className='write-title' >
                                <label className='write-labels' style={{ color: ui.fontColor1 }} htmlFor='full-url'>
                                    Full article URL </label>
                                <TextField
                                    fullWidth
                                    style={{ backgroundColor: ui.second, color: ui.fontColor1 }}
                                    id="full-url"
                                    label="Full article URL"
                                    value={fullArticleUrl}
                                    onChange={(e) => setFullArticleUrl(e.target.value)}
                                    error={error === 'full-url'}
                                />
                            </Grid>
                        }

                        <Grid item className='text-div'>
                            <textarea onChange={(e) => setText(e.target.value)}
                                style={{color: ui.fontColor1}}
                                id='textarea'
                                placeholder='text'
                                className='textarea-paragraph'
                                autosize='false'
                                value={text}>
                            </textarea>
                            <NewTextButton/>
                        </Grid>
                        <CloseButtons close={setNewParagraphClicked} submit={addParagraph} />
                    </div>
                </Grid>
            </Modal>
        </div>
    );
}
