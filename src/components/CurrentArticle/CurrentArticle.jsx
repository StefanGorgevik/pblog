import React, { useEffect, useState, useCallback, useContext } from 'react'
import './current.css'
import { Grid  } from '@material-ui/core'
import Intro from './parts/intro'
import ParagraphScroll from './ParagraphScroll'
import Paragraph from './parts/paragraph'
import { GlobalContext } from '../../context/Global'
import { ThemeContext } from '../../context/Theme'

function CurrentArticle() {
    const {  selectArticle, state, jumpToParagraph } = useContext(GlobalContext);
    const { ui } = useContext(ThemeContext);
    const { currentArticle, jumpParagraph } = state;
    const [tempJump, setJump] = useState(false);

    const executeScroll = useCallback(() => {
        setJump(true)
    },
        [setJump],
    )

    useEffect(() => {
        // window.addEventListener('scroll', handleScroll);
        if (jumpParagraph !== '') {
            executeScroll()
        }
    }, [jumpParagraph, executeScroll])

    return (
        <Grid className='current-article'>
            {currentArticle && currentArticle.dropdown &&
                <Grid className='left-menu'>
                    <ParagraphScroll />
                </Grid>}
            <Grid className='article-scroll'>
                <Intro intro={currentArticle.intro} fontColor={ui.fontColor2} />
                {currentArticle.article.map((item, i) => {
                    return <Paragraph key={i}
                        index={i}
                        dropdown={!item.type ? currentArticle.dropdown : false}
                        bold={item.title}
                        text={item.text}
                        include={item.include ? item.include : false}
                        more={item.more ? item.more : false}
                        selectArticle={() => selectArticle(item, 'more')}
                        gist={currentArticle.gist ? currentArticle.gist : ''}
                        between={item.type && item.type === 'between'}
                        shouldJump={item.title === jumpParagraph}
                        tempJump={tempJump}
                        setJump={setJump}
                    />;
                })}
            </Grid>

        </Grid>
    )
}

export default CurrentArticle
