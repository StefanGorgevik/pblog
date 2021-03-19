import React from 'react';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

export default function Search() {

  return (
    <Grid component="form" >
      <IconButton aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        className=''
        placeholder="Search articles"
        inputProps={{ 'aria-label': 'search-articles' }}
      />
      <IconButton type="submit"  aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider className='' orientation="vertical" />
    </Grid>
  );
}
