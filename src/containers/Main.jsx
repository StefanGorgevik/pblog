import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import Header from '../components/Header'
import TopHeader from '../components/TopHeader'
import CurrentArticle from '../components/CurrentArticle'
import AllArticles from '../components/AllArticles/AllArticles'
import { articles } from '../data/data'

export default function Main() {
    const [page, setPage] = useState('browse');
    const [articlesPage, setArticlesPage] = useState(1);
    const [currentArticle, setCurrentArticle] = useState(null)
    const [search, setSearch] = useState('')
    const [activeArticle, setActiveArticle] = useState(null)
    const [count, setCount] = useState('')

    useEffect(() => {
        const count = Math.floor(Number(articles.length) / 6 + 1);
        setCount(count);
    }, [ ])

    const selectArticle = (article) => {
        setActiveArticle(article.id)
        setCurrentArticle(article);
        setPage('current');
    }

    const selectArticlesPage = (value) => {
        if (value === '+' && articlesPage < count && count > 1) {
            const sum = articlesPage + 1;
            setArticlesPage(sum);
        } else if (value === '-' && articlesPage > 1) {
                const sum = articlesPage - 1;
                setArticlesPage(sum);
            }
    }

    const submitSearch = () => {
        console.log('search', search)
    }

    return (
        <Grid>
            <TopHeader />
            <Header setPage={setPage} page={page} />
            {page === 'browse' ?
                <AllArticles
                    activeArticle={activeArticle}
                    count
                    submitSearch={submitSearch}
                    setSearch={(e) => setSearch(e.target.value)}
                    handleChangePage={selectArticlesPage}
                    setCurrentArticle={selectArticle}
                    articlesPage={articlesPage}
                    currentArticle={currentArticle} />
                : <CurrentArticle 
                selectArticle={selectArticle}
                currentArticle={currentArticle} />}
        </Grid>
    )
}
