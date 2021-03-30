import React from 'react';
import './style.css'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

export default function Search(props) {
  return (
    <Grid className="search-div">
      <SearchIcon />
      <TextField
        onChange={(e) => props.setSearch(e.target.value)}
        className='search'
        placeholder="Search articles"
        inputProps={{ 'aria-label': 'search-articles' }}
      />
    </Grid>
  );
}
