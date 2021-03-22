import React, { useState, useEffect } from 'react'
import './parts.css'
import { Typography, Grid, Button } from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

let s1 = '    ';
let sArr = [{ id: 1, arr: [1, 2] }];

function Paragraph(props) {
    const [opened, setOpened] = useState(false);
    useEffect(() => {
        if (!props.dropdown) setOpened(true)
    }, [props.dropdown])
    props.more && console.log(props.more);

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
                        <Grid className='include-grid' item md={6}>
                            {props.include.map((item, i) => {
                                return <Typography className='text' key={i} variant="subtitle1" color="initial">
                                    {item.substr(0, 2) !== ':s' ? item :
                                        item.substr(0, 2) === ':s' ? (s1 + item.substr(3)) :
                                            sArr.find(s => s.id === item.substr(2, 3)).map(item => {
                                                return s1 * Number(item.substr(2, 3))
                                            })
                                    }
                                </Typography>
                            })}
                        </Grid>
                    }
                </Grid>}

        </Grid>

    )
}

export default Paragraph