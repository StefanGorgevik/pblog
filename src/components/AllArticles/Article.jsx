import React from 'react'
import './allarticles.css'
import { Grid, Typography } from '@material-ui/core'

export default function Article(props) {
  console.log(props)
  return (
    <Grid item
      onClick={() => props.setCurrentArticle(props.article)}
      className={props.active === props.article.id ? 'article active-article' : 'article'}>
      <Typography className="title-articles text" variant="h5" color="initial">{props.article.title}</Typography>
      <Typography className="text-articles text" variant="subtitle1" color="initial">{props.article.intro.substr(0, 150)}...</Typography>
    </Grid>
  )
}
