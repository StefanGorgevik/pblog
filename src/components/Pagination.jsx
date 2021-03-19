import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

export default function ArticlesPagination(props) {
  return (
    <div className='pagination-div'>
      <Pagination className='pagination' hideNextButton={true} hidePrevButton={true} count={props.count} page={props.articlesPage}
       onClick={props.handleChangePage}/>
    </div>
  );
}