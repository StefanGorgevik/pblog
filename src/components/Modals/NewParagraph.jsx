import React, { useState, useEffect, useCallback } from 'react';
import './modals.css'
import { GlobalContext } from '../../context/Global'
import { ThemeContext } from '../../context/Theme'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CloseButtons from '../Buttons/CloseButtons';
import RadioChoices from '../Write/RadioChoices'

export default function NewParagraph() {
    const { state, addNewParagraph, setModal, dispatch } = React.useContext(GlobalContext);
    const { ui } = React.useContext(ThemeContext);
    const { paragraphToEdit } = state;
    const [gist, setGist] = useState('No');
    const [fullUrl, setFullUrl] = useState('No');
    const [title, setTitle] = useState('');
    const [sentences, setSentences] = useState([{ id: 1, value: '' }, { id: 2, value: '' }, { id: 3, value: '' }]);
    const [error, setError] = useState('');
    const [gistItem, setGistItemTitle] = useState('');
    const [fullArticleUrl, setFullArticleUrl] = useState('');

    const setSentenceText = useCallback(
        (value, id) => {
            let ss = sentences;
        ss[id - 1].value += value;
        setSentences(ss);
        },
        [sentences,setSentences],
    )

    const save = () => {
        let newParagraph = {}
        if (title === '') return setError('title');
        newParagraph['title'] = title;
        newParagraph['text'] = [];
        for (let s of sentences) {
            newParagraph.text.push(s.value)
        }
        if (gistItem !== '') newParagraph['include'] = gistItem;
        if (fullArticleUrl !== '') newParagraph['more'] = gistItem;
        console.log('newParagraph SAVING', newParagraph);
        setModal('')
        return addNewParagraph(newParagraph)
    }

    useEffect(() => {
        return () => {
            console.log("UNMOUNTING")
            dispatch({ type: 'EDIT_PARAPGRAPH', payload: {} });
        }
    }, [dispatch])

    useEffect(() => {
        if (paragraphToEdit !== null) {
            setTitle(paragraphToEdit.title);
            let id = 1;
            if(paragraphToEdit.text){
            for (let text of paragraphToEdit.text) {
                setSentenceText(text, id);
                id++;
            }}
            if (paragraphToEdit.include) {
                setGistItemTitle(paragraphToEdit.include);
                setGist('Yes');
            }
            if (paragraphToEdit.more) {
                setFullUrl('No');
                setFullArticleUrl(paragraphToEdit.more);
            }
        }

    }, [paragraphToEdit, setSentenceText])

    
    return (
        <div style={{ width: '100%' }}>

            <Grid item className='write-title' >
                <label className='write-labels' style={{ color: ui.fontColor1 }} htmlFor='title'>
                    Paragraph title </label>
                <TextField
                    fullWidth
                    style={{ backgroundColor: ui.second, color: ui.fontColor1 }}
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    error={error === 'title'}
                />
            </Grid>

            <Grid className='radio-buttons'>
                <RadioChoices setGist={setGist} labelText='Gist' name='Gist' value={gist}/>
                <RadioChoices setGist={setFullUrl} labelText='Full article URL' name="Full article" value={fullUrl} />
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
                        value={gistItem}
                        onChange={(e) => setGistItemTitle(e.target.value)}
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


            {[1, 2, 3].map((n) => {
                return <Grid key={n} item className='text-div'>
                    <textarea onChange={(e) => setSentenceText(e.target.value, n)}
                        style={{ color: ui.fontColor1 }}
                        id='textarea'
                        placeholder={'Sentence ' + (n)}
                        className='textarea-paragraph'
                        autosize='false'
                        defaultValue={sentences.find(s => s.id === n).value}>
                    </textarea>
                </Grid>
            })
            }
            <CloseButtons close={() => setModal('')} submit={() => save()} />
        </div>
    );
}
