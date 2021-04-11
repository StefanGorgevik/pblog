import React, { useState, useEffect, useContext } from 'react'
import './allarticles.css'
import Grid from '@material-ui/core/Grid'
import Article from './Article'
import Search from './Search'
import { GlobalContext } from '../../context/Global'
import { ThemeContext } from '../../context/Theme'

function AllArticles() {
    const { allArticles } = useContext(GlobalContext);
    const { ui } = useContext(ThemeContext);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        setArticles(allArticles)
    }, [allArticles])

    const saveSearchValue = (search) => {
        if (search === '') return setArticles(allArticles);
        const filtered = articles.filter(article => article.title.toLowerCase().includes(search.toLowerCase()))
        setArticles(filtered);
    }

    return (
        <Grid container className='all-articles-wrapper'>
            <Grid item className='tools' >
                <Search setSearch={saveSearchValue} ui/>
            </Grid>
            <Grid className='all-articles'>
                {
                    articles.map((article, i) => {
                        return <Article  key={i}
                         articleId={article.id} 
                         article={article} 
                         ui={ui}/>
                    })
                }
            </Grid>
        </Grid >
    )
}

export default AllArticles
