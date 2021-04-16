import React, { useState, useEffect } from 'react';
import './modals.css'
import { GlobalContext } from '../../context/Global'
import { ThemeContext } from '../../context/Theme'
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

export default function NewParagraph() {
    const { state, saveNewParagraph } = React.useContext(GlobalContext);
    const { ui } = React.useContext(ThemeContext);
    const [gist, setGist] = useState('No');
    const [fullUrl, setFullUrl] = useState('No');
    const [title, setTitle] = useState('');
    const [sentences, setSentences] = useState([{id: 0, value: ''},{id: 1, value: ''},{id: 2, value: ''}]);
    const [error, setError] = useState('');
    const [gistUrl, setGistUrl] = useState('');
    const [fullArticleUrl, setFullArticleUrl] = useState('');
    const [parNum, setParNum] = useState([1])
    const [nums, setNums] = useState([1])

    const save = () => {
        let newParagraph = {}
        if (title === '') return setError('title');
        newParagraph['title'] = title;
        newParagraph['text'] = [];
        for(let s of sentences) {
            newParagraph.text.push(s)
        }
        if(gistUrl !== '') newParagraph['include'] = gistUrl;
        if(fullArticleUrl !== '') newParagraph['more'] = gistUrl;
        console.log('newParagraph', newParagraph);
        return newParagraph;
    }

    useEffect(() => {
        
        return () => {
            console.log("unmountingggg")
            save()
        }
    }, [save])

    const setSentencesNumber = (e) => {
        let temp = parNum;
        let num = Number(e.target.value);
        setNums(num)
        let currentNumsLength = Number(temp.length)
        console.log('eeee', currentNumsLength, num)
        if(currentNumsLength < num) {
            temp.push(num)
        } else if (currentNumsLength > num) {
            temp.pop()
        }
        console.log('teeemp', temp)
        setParNum(temp);
    }

    const setSentenceText = (value, id) => {
        let ss = sentences;
        console.log('vale', id, value)
        console.log(ss[id]) 
        ss[id].value = value;
        console.log('after', ss[id]) 
        setSentences(ss);
        
        console.log('affff', sentences)
    }

    return (
        <>
            <div style={{ width: '100%' }}>

                <Grid item className='write-title' >
                    <label className='write-labels' style={{ color: ui.fontColor1 }} htmlFor='title'>
                        Title of article </label>
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
                    <FormControl style={{ margin: '1%' }} component="fieldset">
                        <FormLabel component="legend" style={{
                            color: ui.fontColor1,
                            fontSize: '20px'
                        }} >Gist</FormLabel>
                        <RadioGroup style={{ display: 'flex', flexDirection: 'row' }} aria-label="gist"
                            name="Gist" value={gist} onChange={(e) => setGist(e.target.value)}>
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" style={{ color: ui.fontColor1 }} />
                            <FormControlLabel value="No" control={<Radio />} label="No" style={{ color: ui.fontColor1 }} />
                        </RadioGroup>
                    </FormControl>

                    <FormControl style={{ margin: '1%' }} component="fieldset">
                        <FormLabel component="legend" style={{
                            color: ui.fontColor1,
                            fontSize: '20px'
                        }} >Full article URL</FormLabel>
                        <RadioGroup style={{ display: 'flex', flexDirection: 'row' }} aria-label="gist"
                            name="Full article" value={fullUrl} onChange={(e) => setFullUrl(e.target.value)}>
                            <FormControlLabel value="Yes" control={<Radio />} style={{ color: ui.fontColor1 }} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} style={{ color: ui.fontColor1 }} label="No" />
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

                <Grid className='increase-paragraphs' style={{ color: ui.fontColor1 }}>
                    <label>Add more sentences: </label>
                    <input type="number"
                        className='sentences-input'
                        style={{ backgroundColor: ui.second, color: ui.fontColor1 }}
                        value={nums}
                        min='1'
                        max='3'
                        onChange={setSentencesNumber}
                    />
                </Grid>

                {parNum.map((n) => {
                    return <Grid key={n} item className='text-div'>
                        <textarea onChange={(e) => setSentenceText(e.target.value, n)}
                            style={{ color: ui.fontColor1 }}
                            id='textarea'
                            placeholder='text'
                            className='textarea-paragraph'
                            autosize='false'
                            value={sentences[n].value}>
                        </textarea>
                    </Grid>
                })
                }
            </div>
        </>
    );
}
