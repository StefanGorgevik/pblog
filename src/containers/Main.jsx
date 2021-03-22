import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import Header from '../components/Header'
import TopHeader from '../components/TopHeader'
import CurrentArticle from '../components/CurrentArticle'
import AllArticles from '../components/AllArticles/AllArticles'
import {allArticles } from '../data/data'

export default function Main() {
    const [page, setPage] = useState('browse');
    const [articles, setArticles] = useState([]);
    const [currentArticle, setCurrentArticle] = useState(null);
    const [activeArticle, setActiveArticle] = useState(null);
    
    useEffect(() => {
        setArticles(allArticles)
    }, [])
    
    const selectArticle = (article) => {
        setActiveArticle(article.id)
        setCurrentArticle(article);
        setPage('current');
    }

    const saveSearchValue = (search) => {
        if(search === '') return setArticles(allArticles);
        let filtered = articles.filter(article => article.title.toLowerCase().includes(search.toLowerCase()))
        setArticles(filtered);
    }

    return (
        <Grid>
            <TopHeader />
            <Header setPage={setPage} page={page} />
            {page === 'browse' ?
                <AllArticles
                    articles={articles}
                    activeArticle={activeArticle}
                    setSearch={(e) => saveSearchValue(e.target.value)}
                    setCurrentArticle={selectArticle}
                    currentArticle={currentArticle} />
                : <CurrentArticle 
                articles={articles}
                selectArticle={selectArticle}
                currentArticle={currentArticle} />}
        </Grid>
    )
}
