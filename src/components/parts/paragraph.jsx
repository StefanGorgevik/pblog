import React, { useState, useEffect } from 'react'
import './parts.css'
import { Typography, Grid, Button } from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Gist from 'super-react-gist'
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Tooltip from '@material-ui/core/Tooltip';

function Paragraph(props) {
    const [opened, setOpened] = useState(false);
    useEffect(() => {
        if (!props.dropdown) setOpened(true)
    }, [props.dropdown])

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
            {props.dropdown &&
                <Grid item className='paragraph-title-drop'>
                    <Grid onClick={() => setOpened(!opened)} item
                        className={props.more ? 'paragraph-dropdown dropdown-smaller' : 'paragraph-dropdown'}>
                        <Typography
                            className='paragraph-title text'
                            color="initial">{props.bold}</Typography>
                        {!opened ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
                    </Grid>
                    {props.more && <Button onClick={props.selectArticle} className='more-button'>Read more</Button>}
                </Grid>}

            {opened &&
                <Grid className='paragraph-text' item>
                    {props.text.map((text, i) => {
                        return <Typography key={i}
                            className='paragraph-typo text'>{text}</Typography>
                    })}
                    {
                        props.include && <Grid className='include-grid'>
                            <Gist id="gist-div" url={props.gist} file={props.include} />
                            <Tooltip title="Copy to clipboard" placement="left-start" >
                                <FileCopyIcon className='copy-to-clipboard'
                                    onClick={() => copyToClipboard(props.include)}>copy</FileCopyIcon>
                            </Tooltip>
                        </Grid>
                    }
                </Grid>}
        </Grid>

    )
}

export default Paragraph