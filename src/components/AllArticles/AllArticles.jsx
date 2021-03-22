import React from 'react'
import './allarticles.css'
import Grid from '@material-ui/core/Grid'
import Article from './Article'
import Search from '../Search'

function AllArticles(props) {
    return (
        <Grid container className='all-articles-wrapper'>
            < Grid item className = 'tools' >
                <Search setSearch={props.setSearch} submitSearch={props.submitSearch} />
            </Grid >
        <Grid className='all-articles'>
            {
                props.articles.map((article, i) => {
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
