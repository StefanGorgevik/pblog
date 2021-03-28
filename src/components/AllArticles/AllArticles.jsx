import React, {useState, useEffect} from 'react'
import './allarticles.css'
import Grid from '@material-ui/core/Grid'
import Article from './Article'
import Search from '../Search'
import {allArticles} from '../../data/data'

function AllArticles({ allArticles, submitSearch, activeArticle, setCurrentArticle }) {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        setArticles(allArticles)
    }, [])

    const saveSearchValue = (search) => {
        console.log(search)
        if (search === '') return setArticles(allArticles);
        const filtered = articles.filter(article => article.title.toLowerCase().includes(search.toLowerCase()))
        setArticles(filtered);
    }
    return (
        <Grid container className='all-articles-wrapper'>
            < Grid item className='tools' >
                <Search setSearch={saveSearchValue} submitSearch={submitSearch} />
            </Grid >
            <Grid className='all-articles'>
                {
                   articles.map((article, i) => {
                        return <Article active={activeArticle}
                            setCurrentArticle={setCurrentArticle}
                            article={article} key={i} />
                    })
                }
            </Grid>
        </Grid >
    )
}

export default AllArticles
