import React, { useEffect, useState, useCallback } from 'react'
import './style.css'
import { Grid, Button } from '@material-ui/core'
import Intro from './parts/intro'
import ParagraphScroll from './ParagraphScroll'
import Paragraph from './parts/paragraph'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { GlobalContext } from '../context/Global'

function CurrentArticle() {
    const { openAllParagraphs, selectArticle, state, jumpToParagraph } = React.useContext(GlobalContext);
    const { currentArticle, opened, jumpParagraph } = state;
    const [tempJump, setJump] = useState(false);
    
    const handleScroll = (event) => {
        console.log('event on scroll', event)
        // let scrollTop = event.srcElement.body.scrollTop,
        //     itemTranslate = Math.min(0, scrollTop/3 - 60);
    
        // this.setState({
        //   transform: itemTranslate
        // });
    }

    const executeScroll = useCallback(() => {
        setJump(true)
        window.addEventListener('scroll', handleScroll);
    },
        [setJump],
    )

    useEffect(() => {
        if (jumpParagraph !== '') {
            executeScroll()
            jumpToParagraph('')
        }
    }, [jumpParagraph, executeScroll, jumpToParagraph])

    return (
        <Grid className='current-article'>
           
            <Grid className='article-scroll' onScroll={handleScroll}>
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
            {
               currentArticle.dropdown && <ParagraphScroll />
            }
             {
                currentArticle && currentArticle.dropdown &&
                <Button onClick={openAllParagraphs}
                    className='open-button'>{opened ? 'Close all' : 'Open all'}
                    {!opened ? <KeyboardArrowDownIcon className='open-arrow' />
                        : <KeyboardArrowUpIcon className='open-arrow' />}
                </Button>
            }
        </Grid>
    )
}

export default CurrentArticle
