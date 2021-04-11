import React from 'react'
import './allarticles.css'
import { Grid, Typography } from '@material-ui/core'
import { GlobalContext } from '../../context/Global'
import { ThemeContext } from '../../context/Theme'

export default function Article({ article }) {
  const { ui } = React.useContext(ThemeContext);
  const { selectArticle, state } = React.useContext(GlobalContext);
  const { activeArticle } = state;

  return (
    <Grid item
      style={{ backgroundColor: activeArticle !== article.id && ui.second, color: ui.fontColor1 }}
      onClick={() => selectArticle(article, 'all')}
      className={activeArticle === article.id ? 'article active-article' : 'article'}>
      <Typography className="title-articles text" variant="h5" color="initial">
        {article.title}
      </Typography>
      <Typography className="text-articles text" variant="subtitle1" color="initial">
        {article.intro.substr(0, 200)}...
      </Typography>
    </Grid>
  )
}
