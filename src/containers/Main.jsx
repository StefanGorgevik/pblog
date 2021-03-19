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
        setCurrentArticle(article);
    }
    const selectArticlesPage = (value) => {
        if(value === '+') {
            const sum = articlesPage + 1;
            setArticlesPage(sum);
        } else {
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
                    submitSearch={submitSearch}
                    setSearch={(e) => setSearch(e.target.value)}
                    handleChangePage={selectArticlesPage}
                    setCurrentArticle={selectArticle}
                    articlesPage={articlesPage}
                    currentArticle={currentArticle} />
                : <CurrentArticle currentArticle={currentArticle} />}
        </Grid>
    )
}
