import React, { useState } from 'react'
import './parts.css'
import { Typography, Grid } from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

function Paragraph(props) {
    const [opened, setOpened] = useState(false);

    return (
        <Grid item className="paragraph-wrapper" >
            <Grid onClick={() => setOpened(!opened)} item className='paragraph-dropdown'>
                <Typography
                    className='text'
                    style={{ fontWeight: 'bold' }}
                     color="initial">{props.bold}</Typography>
                {!opened ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            </Grid>
            {opened &&
                <Grid className='paragraph-text' item>
                    <Typography className='text'
                        color="initial">{props.text}</Typography>
                    {
                        props.include &&
                        <Grid className='include-grid' item md={6}>
                            {props.include.map((item, i) => {
                                return <Typography key={i} variant="subtitle1" color="initial">{item}</Typography>
                            })}
                        </Grid>
                    }
                </Grid>}

        </Grid>

    )
}

export default Paragraph