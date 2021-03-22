import React from 'react';
import './style.css'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export default function ArticlesPagination(props) {
  return (
    <div className='pagination-div'>
      <ChevronLeftIcon fontSize='large' className='arrow' onClick={() => props.handleChangePage('-')}/>
      <ChevronRightIcon fontSize='large' className='arrow' onClick={() => props.handleChangePage('+')}/>
    </div>
  );
}