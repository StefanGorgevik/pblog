import React from 'react'
import './allarticles.css'
import Grid from '@material-ui/core/Grid'
import { articles } from '../../data/data'
import Article from './Article'
import ArticlesPagination from '../Pagination'
import Search from '../Search'

function AllArticles(props) {
    let end = props.articlesPage * 6;
    let start = end - 6;

    return (
        <Grid container className='all-articles-wrapper'>
            < Grid item className = 'tools' >
                <Search setSearch={props.setSearch} submitSearch={props.submitSearch} />
                <ArticlesPagination articlesPage={props.articlesPage} handleChangePage={props.handleChangePage} count={props.count} />
            </Grid >
        <Grid className='all-articles'>
            {
                articles.slice(start, end).map((article, i) => {
                    return <Article active={props.activeArticle}
                        setCurrentArticle={props.setCurrentArticle}
                        article={article} key={i} />
                })
            }
        </Grid>
        </Grid >
    )
}

export default AllArticles
