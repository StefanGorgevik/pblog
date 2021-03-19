import React from 'react'
import './allarticles.css'
import {Grid, Typography} from '@material-ui/core'

export default function Article(props) {
    console.log(props)
    return (
       <Grid item onClick={() => props.setCurrentArticle(props.article)} className='article'>
         <Typography className="title-articles" variant="h5" color="initial">{props.article.title}</Typography>
         <Typography className="text-articles" variant="p" color="initial">{props.article.text.substr(0, 250)}...</Typography>
       </Grid>
    )
}
