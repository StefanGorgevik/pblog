import React from 'react'
import './style.css'
import { Grid } from '@material-ui/core'
import Title from './parts/title'
import Intro from './parts/intro'
import Paragraph from './parts/paragraph'
import { allArticles } from '../data/data'

function CurrentArticle(props) {
    console.log('props', props)
    const article = props.currentArticle ? props.currentArticle : allArticles[0];
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
                selectArticle={() => props.selectArticle(item, 'more')}
                gist={article.gist ? article.gist : ''}
                allOpened={props.allOpened}
                />
            })}
        </Grid>
    )
}

export default CurrentArticle
