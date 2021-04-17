import React, { useContext, useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import './write.css'
import Typography from '@material-ui/core/Typography'
import { GlobalContext } from '../../context/Global'
import { ThemeContext } from '../../context/Theme'
import TextField from '@material-ui/core/TextField'
import WriteButton from '../Buttons/WriteButton'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import EditIcon from '@material-ui/icons/Edit';
import Paragraph from './Paragraph'
import RadioChoices from './RadioChoices'

export default function Write() {
  const [title, setTitle] = useState('');
  const [titleSaved, setTitleSaved] = useState(false);
  const [introSaved, setIntroSaved] = useState(false);
  const [gistSaved, setGistSaved] = useState(false);
  const [gist, setGist] = useState('No');
  const [gistUrl, setGistUrl] = useState('');
  const [includeDropdown, setIncludeDropdown] = useState('No');
  const [intro, setIntro] = useState('');
  const [error, setError] = useState('');
  const { ui } = useContext(ThemeContext);
  const { state, dispatch, setModal, setInfoModal, saveArticle } = useContext(GlobalContext);
  const { newParagraphs } = state;

  useEffect(() => {
    return () => {
        dispatch({ type: 'EDIT_PARAPGRAPH', payload: {} });
    }
}, [dispatch])

  const saveArticleHandler = () => {
    if (title === '') return setError('title');
    if (intro === '') return setError('intro');
    if (gist === 'Yes' && gistUrl === '') return setError('gistUrl');
    let newArticle = {
      id: '',
      dropdown: includeDropdown === 'Yes',
      title,
      intro,
      article: newParagraphs,
    }
    if(gistUrl === '') newArticle['gist'] = gistUrl;
    console.log('article saving...', newArticle)
    saveArticle(newArticle)
  }

  return (
    <Grid container className='write'>
      <Grid item className='write-top'>
        <Typography variant="h3"
          style={{ color: ui.fontColor1, margin: '0 auto', borderBottom: `1px solid ${ui.fontColor1}` }}>
          Write an article</Typography>
        <WriteButton fixed={true} click={saveArticleHandler} width={false} text='Save article' />
      </Grid>
      <Grid container className='write-items'>
        <Grid item className='write-title' >
          {titleSaved ?
            <Grid className='item-hover' style={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h4" style={{ color: ui.fontColor1, margin: '0 auto', marginBottom: '20px' }}>{title}</Typography>
              <EditIcon className="save-write-item" onClick={() => setTitleSaved(false)} />
            </Grid> :
            <Grid className='item-hover' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <label className='write-labels' style={{ color: ui.fontColor1 }} htmlFor='title'>Title</label>

              <TextField
                fullWidth
                style={{ backgroundColor: ui.second, color: ui.fontColor1, fontSize: '22px' }}
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                error={error === 'title'}
              />
              <CheckCircleOutlineIcon className="save-write-item" onClick={() => title !== '' ? setTitleSaved(true) : setInfoModal(true, 'You need to enter a title!', 'warning')} />
            </Grid>}
        </Grid>

        <Grid item className='write-intro' >
          {
            introSaved ?
              <Grid className='item-hover' style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="h6" style={{ color: ui.fontColor1, margin: '0 auto', }}>{intro}</Typography>
                <EditIcon className="save-write-item" onClick={() => setIntroSaved(false)} />

              </Grid> :
              <Grid className='item-hover' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <label className='write-labels' style={{ color: ui.fontColor1 }} htmlFor='intro'>Intro</label>
                <textarea
                  className='intro-textarea'
                  style={{ backgroundColor: ui.second, color: ui.fontColor1 }}
                  id="intro"
                  value={intro}
                  onChange={(e) => setIntro(e.target.value)}
                />
                <CheckCircleOutlineIcon className="save-write-item" onClick={() => intro !== '' ? setIntroSaved(true) :
                  setInfoModal(true, 'You need to enter an intro!', 'warning')} />
              </Grid>
          }
        </Grid>

        {gist === 'Yes' && <Grid item className='write-title' >
          {gistSaved ?
            <Grid className='item-hover' style={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="subtitle2" style={{ color: ui.fontColor1, margin: '0 auto', marginBottom: '20px' }}>{gist}</Typography>
              <EditIcon className="save-write-item" onClick={() => setGistSaved(false)} />
            </Grid> :
            <Grid className='item-hover' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <label className='write-labels' style={{ color: ui.fontColor1 }} htmlFor='title'>Gist</label>

              <TextField
                fullWidth
                style={{ backgroundColor: ui.second, color: ui.fontColor1, fontSize: '22px' }}
                id="gist"
                value={gistUrl}
                onChange={(e) => setGistUrl(e.target.value)}
                error={error === 'gistUrl'}
              />
              <CheckCircleOutlineIcon className="save-write-item" onClick={() => title !== '' ? setGistSaved(true) : setInfoModal(true, 'You need to enter a gist!', 'warning')} />
            </Grid>}
        </Grid>}

        <Grid className='radio-buttons'>
          <RadioChoices setGist={setGist} labelText='Will you include GitHub Gist?' name='Gist' value={gist} />
          <RadioChoices setGist={setIncludeDropdown} labelText='Do you want dropdowns for your paragrahs?' name="Dropdown" value={includeDropdown} />
        </Grid>
        <WriteButton fixed={false} click={() => setModal('new-paragraph')} width={true} text='Add new paragraph' />
        <Grid className='new-paragraphs'>
          {newParagraphs.map((p, i) => {
            return <Paragraph paragraph={p} key={i} />
          })}
        </Grid>
      </Grid>
    </Grid>
  )
}