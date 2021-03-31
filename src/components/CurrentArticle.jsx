import React from 'react'
import './style.css'
import { Grid } from '@material-ui/core'
import Title from './parts/title'
import Intro from './parts/intro'
import Paragraph from './parts/paragraph'
import { GlobalContext } from '../context/Global'

function CurrentArticle() {
    const { selectArticle, state } = React.useContext(GlobalContext);
    const { currentArticle } = state;
    return (
        <Grid className='current-article'>
            <Title variant='h4' title={currentArticle.title} />
            <Intro intro={currentArticle.intro} />
            {currentArticle.article.map((item, i) => {
                return <Paragraph key={i}
                    dropdown={!item.type ? currentArticle.dropdown : false}
                    bold={item.title}
                    text={item.text}
                    include={item.include ? item.include : false}
                    more={item.more ? item.more : false}
                    selectArticle={() => selectArticle(item, 'more')}
                    gist={currentArticle.gist ? currentArticle.gist : ''}
                    between={item.type && item.type === 'between'}
                />
            })}
        </Grid>
    )
}

export default CurrentArticle
