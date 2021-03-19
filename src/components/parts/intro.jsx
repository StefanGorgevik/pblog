import React from 'react'
import { Typography } from '@material-ui/core'

function Intro(props) {
    return (
        <Typography
        style={{fontWeight: 'bold', padding: '1%', fontSize: '18px'}}
        variant='p' color="initial">{props.intro}</Typography>
    )
}

export default Intro