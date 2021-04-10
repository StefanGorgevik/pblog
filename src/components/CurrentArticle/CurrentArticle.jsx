import React, { useEffect, useState, useCallback } from 'react'
import './current.css'
import { Grid  } from '@material-ui/core'
import Intro from '../parts/intro'
import ParagraphScroll from './ParagraphScroll'
import Paragraph from '../parts/paragraph'
import { GlobalContext } from '../../context/Global'

function CurrentArticle() {
    const {  selectArticle, state, jumpToParagraph } = React.useContext(GlobalContext);
    const { currentArticle, jumpParagraph } = state;
    const [tempJump, setJump] = useState(false);

    // const handleScroll = (event) => {
    //     console.log('event on scroll', event)
    //     getScroll()
    //     // let scrollTop = event.srcElement.body.scrollTop,
    //     //     itemTranslate = Math.min(0, scrollTop/3 - 60);

    //     // this.setState({
    //     //   transform: itemTranslate
    //     // });
    // }

    const executeScroll = useCallback(() => {
        setJump(true)
    },
        [setJump],
    )

    useEffect(() => {
        // window.addEventListener('scroll', handleScroll);
        if (jumpParagraph !== '') {
            executeScroll()
            jumpToParagraph('')
        }
    }, [jumpParagraph, executeScroll, jumpToParagraph])

    return (
        <Grid className='current-article'>
            {currentArticle && currentArticle.dropdown &&
                <Grid className='left-menu'>
                   
                    <ParagraphScroll />
                </Grid>}
            <Grid className='article-scroll'>
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
