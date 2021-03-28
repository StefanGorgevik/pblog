import React, { useState, useEffect, useCallback } from 'react'
import './containers.css'
import { Grid } from '@material-ui/core'
import Header from '../components/Header'
import TopHeader from '../components/TopHeader'
import CurrentArticle from '../components/CurrentArticle'
import AllArticles from '../components/AllArticles/AllArticles'
import ReportModal from '../components/ReportModal'
import ReportSuccessModal from '../components/ReportSuccessModal'
import { allArticles } from '../data/data'

export default function Main() {
    const [page, setPage] = useState('browse');
    const [currentArticle, setCurrentArticle] = useState(null);
    const [activeArticle, setActiveArticle] = useState(null);
    const [reportClicked, setReportClicked] = useState(false);
    const [articleToReport, setArticleToReport] = useState('');
    const [content, setContent] = useState(false);
    const [showMessageModal, setMessageModal] = useState(false);
    const [comments, setComments] = useState('');
    const [modalText, setModalText] = useState('');

    const setPageContent = useCallback(() => {
        let content = null;
        switch (page) {
            case 'browse': {
                content = <AllArticles
                    allArticles={allArticles}
                    activeArticle={activeArticle}
                    setCurrentArticle={selectArticle}
                    currentArticle={currentArticle} />
                break;
            }
            case 'current': {
                content = <CurrentArticle
                    selectArticle={selectArticle}
                    currentArticle={currentArticle} />
                break;
            }
            case 'report': {
                setReportClicked(true);
                break;
            }
            default:
                break;
        }
        setContent(content);
    }, [activeArticle, page, currentArticle, allArticles])

    useEffect(() => {
        setPageContent()
    }, [page, setPageContent])

    const selectArticle = (article, type) => {
        let current = null;
        if (type === 'more') {
            let found = allArticles.find(a => a.title === article.title);
            if (found) {
                current = found;
            }
        } else if (type === 'all') {
            current = article;
        }
        setActiveArticle(current.id)
        setCurrentArticle(current);
        setPage('current');
    }

    const submitReportedArticle = (value) => {
        if (comments === '') {
            setModalText('You need to enter a comment before submitting!');
            setMessageModal(true);
            setPage('browse')
            return;
        }
        if (articleToReport === '') {
            setModalText('You need to selected the article where you found the mistake in order to submit a ticket!');
            setMessageModal(true);
            setPage('browse')
            return;
        }
        let ticket = {
            comments,
            articleToReport
        }
        console.log('ticket', ticket)
        //send it somewhere and close the modal in the response
        setMessageModal(true);
        setModalText('Thank you for submitting the mistake!');
        setTimeout(() => {
            setMessageModal(false);
            setReportClicked(false);
            setPage('browse')
        }, 1500)
    }

    const closeReportModal = () => {
        setReportClicked(false);
        setPage('browse');
    }

    return (
        <Grid>
            {showMessageModal && <ReportSuccessModal text={modalText}
                setOpened={() => setMessageModal(!showMessageModal)}
                opened={showMessageModal} />}
            {reportClicked && <ReportModal articles={allArticles}
                setArticleToReport={setArticleToReport}
                submitReportedArticle={submitReportedArticle}
                selectValue={articleToReport}
                opened={reportClicked}
                setReportClicked={() => setReportClicked(!reportClicked)}
                closeReportModal={() => closeReportModal()}
                setComments={setComments}
                comments={comments} />}
            <TopHeader />
            <Grid className='bottom'>
                <Header setPage={setPage} page={page} />
                {content}
            </Grid>
        </Grid>
    )
}
