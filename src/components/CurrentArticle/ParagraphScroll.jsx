import React, { useState } from 'react'
import './current.css'
import { Grid, MenuItem, Tooltip } from '@material-ui/core'
import { GlobalContext } from '../../context/Global'
import { ThemeContext } from '../../context/Theme'
import OpenButton from '../Buttons/OpenButton'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    customWidth: {
      fontSize: '16px'
    }
  }));

function ParagraphScroll({ active }) {
    const classes = useStyles();
    const { openAllParagraphs, state, jumpToParagraph } = React.useContext(GlobalContext);
    const { ui } = React.useContext(ThemeContext);
    const { currentArticle, allParagraphsOpened } = state;
    const [jumpToOpened, setJumpToOpened] = useState(true);
    console.log(currentArticle)
    return (
        <Grid className='paragraph-scroll-wrapper'>
            <Grid item className='open-buttons'>
                <OpenButton click={openAllParagraphs}
                    opened={allParagraphsOpened}
                    text={allParagraphsOpened ? 'Close paragraphs' : 'Open paragraphs'} />
                <OpenButton 
                 click={() => setJumpToOpened(!jumpToOpened)} opened={jumpToOpened} text='paragraphs' />
            </Grid>
            {jumpToOpened &&
                <Grid item className='paragraph-scroll'>
                    {
                        currentArticle && currentArticle.article.map((article, index) => {
                            return  (article.title ? <Tooltip  key={index} title={article.title} classes={{ tooltip: classes.customWidth }}>
                            <MenuItem
                                style={{backgroundColor: ui.second, color: ui.fontColor1}}
                                className={jumpToParagraph !== article.title ? 'paragraph-scroll-to' :
                                    'paragraph-scroll-to paragraph-scroll-to-active'}
                                onClick={() => jumpToParagraph(article.title)}
                                >{article.title.substr(0, 20)}</MenuItem>
                                </Tooltip> : null)
                        })
                    }
                </Grid>}
        </Grid>
    )
}

export default ParagraphScroll;
