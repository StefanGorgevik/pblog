import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core'

const useStyles = makeStyles({
  title: {
    paddingTop: '1%',
    paddingBottom: '1%',
    fontFamily: 'Syne Mono',
    margin: '0 auto',
    color: 'white',
    borderBottom: '1px solid white',
    position: 'fixed',
    marginBottom: '20px'
  },
});

function Title(props) {
  const classes = useStyles();
  return (
    <Typography variant={props.variant}
      className={classes.title} color="initial">{props.title}</Typography>
  )
}

export default Title
