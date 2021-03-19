import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

export default function Search(props) {
  return (
    <Grid className="search-div">
      <TextField
        onChange={props.setSearch}
        className='search'
        placeholder="Search articles"
        inputProps={{ 'aria-label': 'search-articles' }}
      />
      <IconButton onClick={props.submitSearch} type="submit"  aria-label="search">
        <SearchIcon />
      </IconButton>
    </Grid>
  );
}
