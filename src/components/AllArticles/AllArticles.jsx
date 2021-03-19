import React from 'react'
import './allarticles.css'
import Grid from '@material-ui/core/Grid'
import { articles } from '../../data/data'
import Article from './Article'
import ArticlesPagination from '../Pagination'
import Search from '../Search'

function AllArticles(props) {
    const count = Math.floor(Number(articles.length) / 6 + 1);
    console.log(count, 'count')
    let end = props.articlesPage * 6;
    let start = end - 6;

    return (
        <Grid container className='all-articles-wrapper'>
            <Search setSearch={props.setSearch} submitSearch={props.submitSearch}/>
            <Grid className='all-articles'>
                {
                    articles.slice(start, end).map((article, i) => {
                        return <Article setCurrentArticle={props.setCurrentArticle} article={article} key={i} />
                    })
                }

            </Grid>
            <ArticlesPagination articlesPage={props.articlesPage} handleChangePage={props.handleChangePage} count={count} />
        </Grid>
    )
}

export default AllArticles
