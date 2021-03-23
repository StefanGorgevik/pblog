import React from 'react'
import './style.css'
import { Grid } from '@material-ui/core'
import Title from './parts/title'
import Intro from './parts/intro'
import Paragraph from './parts/paragraph'

function CurrentArticle(props) {
    console.log('props', props)
    const article = props.currentArticle ? props.currentArticle : props.articles[0];
    return (
        <Grid className='current-article'>
            <Title variant='h3' title={article.title} />
            <Intro intro={article.intro} />
            {article.article.map((item, i) => {
                return <Paragraph key={i} 
                dropdown={article.dropdown} 
                bold={item.title} 
                text={item.text} 
                include={item.include ? item.include : false} 
                more={item.more ? item.more : false} 
                selectArticle={() => props.selectArticle(item, 'more')}/>
            })}
        </Grid>
    )
}

export default CurrentArticle
