import React, { useContext, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import './write.css'
import Typography from '@material-ui/core/Typography'
import { GlobalContext } from '../../context/Global'
import { ThemeContext } from '../../context/Theme'
import TextField from '@material-ui/core/TextField'
import SaveArticleButton from '../Buttons/SaveArticleButton'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import EditIcon from '@material-ui/icons/Edit';


function Write() {
  const [title, setTitle] = useState('');
  const [titleSaved, setTitleSaved] = useState(false);
  const [introSaved, setIntroSaved] = useState(false);
  const [intro, setIntro] = useState('');
  const [paragraphs, setParagraphs] = useState([]);
  const [error, setError] = useState('');
  const { ui } = useContext(ThemeContext);
  const { state, setModal } = useContext(GlobalContext);
  // const { newParagraphClicked } = state;

  const saveArticle = () => {
    if (title === '') return setError('title');
    if (intro === '') return setError('intro');
    console.log('article saving...',)
  }
  const newParagraph = () => {
    setModal('new-paragraph')
  }

  return (
    <Grid container className='write'>
      <Grid item className='write-top'>
        <Typography variant="h3"
          style={{ color: ui.fontColor1, margin: '0 auto', borderBottom: `1px solid ${ui.fontColor1}` }}>
          Write an article</Typography>
        <SaveArticleButton fixed={true} click={saveArticle} width={false} text='Save article' />
      </Grid>
      <Grid container className='write-items'>
        <Grid item className='write-title' >

          {
            titleSaved ?
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
                <CheckCircleOutlineIcon className="save-write-item" onClick={() => setTitleSaved(true)} />
              </Grid>

          }

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
                <CheckCircleOutlineIcon className="save-write-item" onClick={() => setIntroSaved(true)} />

              </Grid>
          }
        </Grid>
        <SaveArticleButton fixed={false} click={newParagraph} width={true} text='Add new paragraph' />
      </Grid>
    </Grid>
  )
}

export default Write
