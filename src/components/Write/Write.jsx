import React, { useContext, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import './write.css'
import Typography from '@material-ui/core/Typography'
import { GlobalContext } from '../../context/Global'
import { ThemeContext } from '../../context/Theme'
import TextField from '@material-ui/core/TextField'
import SaveArticleButton from '../Buttons/SaveArticleButton'

function Write() {
  const [title, setTitle] = useState('');
  const [intro, setIntro] = useState('');
  const [paragraphs, setParagraphs] = useState([]);
  const [error, setError] = useState('');
  const { ui } = useContext(ThemeContext);
  const { state, setNewParagraphClicked } = useContext(GlobalContext);
  // const { newParagraphClicked } = state;

  const saveArticle = () => {
    if (title === '') return setError('title');
    if (intro === '') return setError('intro');
    console.log('article saving...',)
  }
  const newParagraph = () => {
    setNewParagraphClicked()
  }

  return (
    <Grid container className='write'>
      <Typography variant="h3" style={{ color: ui.fontColor1 }}>Write an article</Typography>
      <Grid container className='write-items'>
        <Grid item className='write-title' >
          <label className='write-labels' style={{ color: ui.fontColor1 }} htmlFor='title'>Title of article: </label>
          <TextField
            fullWidth
            style={{ backgroundColor: ui.second, color: ui.fontColor1, fontSize: '22px' }}
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            error={error === 'title'}
          />
        </Grid>
        <Grid item className='write-intro' >
          <label className='write-labels' style={{ color: ui.fontColor1 }} htmlFor='intro'>Intro for article: </label>
          <textarea
            className='intro-textarea'
            style={{ backgroundColor: ui.second, color: ui.fontColor1 }}
            id="intro"
            value={intro}
            onChange={(e) => setIntro(e.target.value)}
          />
        </Grid>
        <SaveArticleButton click={newParagraph} width={true} text='Add new paragraph' />
        <SaveArticleButton click={saveArticle} width={false} text='Save article' />
      </Grid>
    </Grid>
  )
}

export default Write
