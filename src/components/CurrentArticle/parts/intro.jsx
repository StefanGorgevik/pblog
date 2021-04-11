import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    intro: {
        fontWeight: "bold",
        padding: "1%",
        fontSize: "18px",
        fontFamily: "'Syne Mono', monospace"
    }
})

function Intro({intro,  fontColor}) {
    const classes = useStyles();
    console.log('fontco', fontColor)
    return (
        <Typography style={{color: fontColor}} className={classes.intro}>{intro}</Typography>
    )
}

export default Intro