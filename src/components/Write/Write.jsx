import React, {useContext, useState} from 'react'
import Grid from '@material-ui/core/Grid'
import './write.css'
import Typography from '@material-ui/core/Typography'
import { GlobalContext } from '../../context/Global'
import { ThemeContext } from '../../context/Theme'
import TextField from '@material-ui/core/TextField'

function Write() {
  const [title, setTitle] = useState('')
  const { ui } = useContext(ThemeContext);
  const {  state } = useContext(GlobalContext);

    return (
      <Grid container className='write'>
        <Typography variant="h3" style={{ color: ui.fontColor1}}>Write an article</Typography>
        <Grid container className='write-items'>
          <Grid item >
            <TextField
              style={{backgroundColor: ui.second, color: ui.fontColor1}}
              id="title"
              label="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>
        </Grid>
      </Grid>
    )
}

export default Write
