import React, { useState } from 'react'
import './current.css'
import { Grid, MenuItem, Button } from '@material-ui/core'
import { GlobalContext } from '../../context/Global'
import OpenButton from '../Buttons/OpenButton'

function ParagraphScroll({ active }) {
    const { openAllParagraphs, state, jumpToParagraph } = React.useContext(GlobalContext);
    const { currentArticle, allParagraphsOpened, jumpParagraph } = state;
    const [jumpToOpened, setJumpToOpened] = useState(false)
    return (
        <Grid className='paragraph-scroll-wrapper'>
            <Grid item className='open-buttons'>
                <OpenButton click={openAllParagraphs}
                    opened={allParagraphsOpened}
                    text={allParagraphsOpened ? 'Close paragraphs' : 'Open paragraphs'} />
                <OpenButton click={() => setJumpToOpened(!jumpToOpened)} opened={jumpToOpened} text='Jump To' />
            </Grid>
            {jumpToOpened &&
                <Grid item className='paragraph-scroll'>
                    {
                        currentArticle && currentArticle.article.map((article, index) => {
                            return <MenuItem key={index}
                                className={jumpToParagraph !== article.title ? 'paragraph-scroll-to' :
                                    'paragraph-scroll-to paragraph-scroll-to-active'}
                                onClick={() => jumpToParagraph(article.title)}
                                variant="h5"
                                color="initial">{article.title.substr(0, 20)}</MenuItem>
                        })
                    }
                </Grid>}
        </Grid>
    )
}

export default ParagraphScroll;
