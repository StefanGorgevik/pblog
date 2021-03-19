import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import Header from '../components/Header'
import TopHeader from '../components/TopHeader'
import CurrentArticle from '../components/CurrentArticle'
import AllArticles from '../components/AllArticles/AllArticles'


export default function Main() {
    const [page, setPage] = useState('browse');
    const [articlesPage, setArticlesPage] = useState(1);
    const [currentArticle, setCurrentArticle] = useState(null)
    const [search, setSearch] = useState('')

    const selectArticle = (article) => {
        console.log('AR', article)
        setCurrentArticle(article);
        setPage('current');
    }
    const selectArticlesPage = (event) => {
        setArticlesPage(Number(event.target.outerText));
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
                    submitSearch={submitSearch}
                    setSearch={setSearch}
                    handleChangePage={selectArticlesPage}
                    setCurrentArticle={selectArticle}
                    articlesPage={articlesPage}
                    currentArticle={currentArticle} />
                : <CurrentArticle currentArticle={currentArticle} />}
        </Grid>
    )
}
