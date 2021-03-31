import React from 'react'
import './style.css'
import { Grid, Button } from '@material-ui/core'
import Title from './parts/title'
import Intro from './parts/intro'
import Paragraph from './parts/paragraph'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { GlobalContext } from '../context/Global'

function CurrentArticle() {
    const { openAllParagraphs, selectArticle, state } = React.useContext(GlobalContext);
    const { currentArticle, opened } = state;
    return (
        <Grid className='current-article'>
            {
                currentArticle && currentArticle.dropdown &&
                <Button onClick={openAllParagraphs}
                    className='open-button'>{opened ? 'Close all' : 'Open all'}
                    {!opened ? <KeyboardArrowDownIcon className='open-arrow' />
                        : <KeyboardArrowUpIcon className='open-arrow' />}
                </Button>
            }
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
