import React, { useState, useEffect } from 'react'
import './parts.css'
import { Typography, Grid, Button } from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Gist from 'super-react-gist'

function Paragraph(props) {
    const [opened, setOpened] = useState(false);
    useEffect(() => {
        if (!props.dropdown) setOpened(true)
    }, [props.dropdown])

    const copyToClipboard = (gist, include) => {
        let url = gist + '#file-' + include;
        console.log('url', url)
        fetch(url)
        .then(res => console.log('res', res))
        // navigator.clipboard.writeText(value)
    }

    return (
        <Grid item className="paragraph-wrapper" >
            {
                props.dropdown &&
                <Grid item className='paragraph-title-drop'>
                    <Grid onClick={() => setOpened(!opened)} item
                        className={props.more ? 'paragraph-dropdown  dropdown-smaller' : 'paragraph-dropdown'}>
                        <Typography
                            className='paragraph-title text'
                            color="initial">{props.bold}</Typography>
                        {!opened ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
                    </Grid>
                    {props.more && <Button onClick={props.selectArticle} className='more-button'>More</Button>}
                </Grid>
            }

            {opened &&
                <Grid className='paragraph-text' item>
                    {props.text.map((text, i) => {
                        return <Typography key={i}
                            className='paragraph-typo text'
                            color="initial">{text}</Typography>
                    })}
                    {
                        props.include &&
                            <Gist className="gist-div" url={props.gist} file={props.include} />
                    }
                </Grid>}

        </Grid>

    )
}

export default Paragraph