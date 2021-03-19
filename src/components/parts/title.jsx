import React from 'react'
import { Typography } from '@material-ui/core'

function Title(props) {
    return (
        <Typography variant={props.variant}
          style={{ paddingTop: '1%', paddingBottom: '1%', fontFamily: 'Syne Mono', margin: '0 auto'}} 
        className='intro' color="initial">{props.title}</Typography>
    )
}

export default Title
