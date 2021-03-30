import React, { useState, useEffect, useContext } from 'react'
import './parts.css'
import { Typography, Grid, Button } from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Gist from 'super-react-gist'
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Tooltip from '@material-ui/core/Tooltip';
import { GlobalContext } from '../../context/Global'

function Paragraph({ dropdown, more, text, include, selectArticle, bold, gist }) {
    const [paragraphOpened, setParagraphOpened] = useState(false);
    const { state } = useContext(GlobalContext)
    const { opened } = state;
    useEffect(() => {
        if (!dropdown) {
            setParagraphOpened(true)
        }
        if (opened) setParagraphOpened(true)
        else setParagraphOpened(false)
    }, [dropdown, opened])

    const copyToClipboard = (gist) => {
        let url = 'https://api.github.com/gists/1e74543011068bba4c8addab43f0b56a';
        fetch(url)
            .then(res => res.json())
            .then(result => {
                if (result.files[gist].content) {
                    navigator.clipboard.writeText(result.files[gist].content)
                }
            });
    }

    return (
        <Grid item className="paragraph-wrapper" >
            {dropdown &&
                <Grid item className='paragraph-title-drop'>
                    <Grid onClick={() => setParagraphOpened(!paragraphOpened)} item
                        className={more ? 'paragraph-dropdown dropdown-smaller' : 'paragraph-dropdown'}>
                        <Typography
                            className='paragraph-title text'
                            color="initial">{bold}</Typography>
                        {!paragraphOpened ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
                    </Grid>
                    {more && <Button onClick={selectArticle} className='more-button'>Read more</Button>}
                </Grid>}

            { dropdown && paragraphOpened &&
                <Grid className='paragraph-text' item>
                    {text.map((text, i) => {
                        return <Typography key={i}
                            className='paragraph-typo text'>{text}</Typography>
                    })}
                    {
                        include && <Grid className='include-grid'>
                            <Gist className="gist-div" url={gist} file={include} />
                            <Tooltip title="Copy to clipboard" placement="left-start" >
                                <FileCopyIcon className='copy-to-clipboard'
                                    onClick={() => copyToClipboard(include)}>copy</FileCopyIcon>
                            </Tooltip>
                        </Grid>
                    }
                </Grid>}
            {
                !dropdown &&
                text.map((text, i) => {
                    return <Typography key={i}
                        className='paragraph-typo text'>{text}</Typography>
                })
            }
        </Grid>

    )
}

export default Paragraph