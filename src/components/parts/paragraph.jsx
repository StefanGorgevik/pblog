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
                    style={{ fontWeight: 'bold' }}
                    variant='p' color="initial">{props.bold}</Typography>
                {!opened ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            </Grid>
            {opened &&
                <Grid className='paragraph-text' item>
                    <Typography
                        variant='p' color="initial">{props.text}</Typography>
                    {
                        props.include &&
                        <Grid className='include-grid' item md={6}>
                            {props.include.map((item, i) => {
                                return <Typography key={i} variant="subtitle" color="initial">{item}</Typography>
                            })}
                        </Grid>
                    }
                </Grid>}

        </Grid>

    )
}

export default Paragraph