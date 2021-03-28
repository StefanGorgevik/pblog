import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    intro: {
        fontWeight: "bold",
        padding: "1%",
        fontSize: "18px",
        color: "white",
        fontFamily: "'Syne Mono', monospace"
    }
})

function Intro(props) {
    const classes = useStyles();
    return (
        <Typography className={classes.intro}>{props.intro}</Typography>
    )
}

export default Intro