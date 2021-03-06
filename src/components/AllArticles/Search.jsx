import React, { useContext } from 'react';
import './allarticles.css'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { ThemeContext } from '../../context/Theme'

export default function Search({ setSearch }) {
  const { ui } = useContext(ThemeContext);

  return (
    <Grid className="search-div" style={{ backgroundColor: ui.second }}>
      <SearchIcon />
      <TextField
        style={{ backgroundColor: ui.second, color: ui.fontColor1 }}
        onChange={(e) => setSearch(e.target.value)}
        className='search'
        placeholder="Search articles by title"
        inputProps={{ 'aria-label': 'search-articles' }}
      />
    </Grid>
  );
}
