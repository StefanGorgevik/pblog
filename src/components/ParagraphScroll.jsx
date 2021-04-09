import React from 'react'
import './style.css'
import { Grid, MenuItem, Typography } from '@material-ui/core'
import { GlobalContext } from '../context/Global'

function ParagraphScroll({active}) {
    const { state, jumpToParagraph } = React.useContext(GlobalContext);
    const { currentArticle, jumpParagraph } = state;
    return (
        <Grid className='paragraph-scroll'>
            <Typography className='jump-to-title' variant='subtitle1'  >Jump To</Typography>
            
            {
                currentArticle && currentArticle.article.map((article, index) => {
                    return <MenuItem key={index}
                        className={jumpToParagraph !== article.title ? 'paragraph-scroll-to' : 
                        'paragraph-scroll-to paragraph-scroll-to-active' }
                        onClick={() => jumpToParagraph(article.title)}
                        variant="h5"
                        color="initial">{article.title.substr(0, 20)}</MenuItem>
                })
            }
        </Grid>
    )
}

export default ParagraphScroll;
