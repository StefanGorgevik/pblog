import React, { useState, useEffect, useCallback } from 'react'
import './containers.css'
import { Grid } from '@material-ui/core'
import TopHeader from '../components/Header/TopHeader'
import CurrentArticle from '../components/CurrentArticle'
import AllArticles from '../components/AllArticles/AllArticles'
import ReportModal from '../components/Modals/ReportModal'
import InfoModal from '../components/Modals/InfoModal'
import { GlobalContext } from '../context/Global'

export default function Main() {
    const { state, setReportClicked } = React.useContext(GlobalContext);
    const { page, reportClicked, showMessageModal } = state;
    const [content, setContent] = useState(false);

    const setPageContent = useCallback(() => {
        let content = null;
        switch (page) {
            case 'browse': {
                content = <AllArticles />
                break;
            }
            case 'current': {
                content = <CurrentArticle />
                break;
            }
            case 'report': {
                setReportClicked(true);
                content = null;
                break;
            }
            default:
                break;
        }
        setContent(content);
    }, [page, setReportClicked])

    useEffect(() => {
        setPageContent()
    }, [page, setPageContent])

    return (
        <Grid>
            {showMessageModal && <InfoModal />}
            {reportClicked && <ReportModal/>}
            <TopHeader />
            <Grid className='bottom'>
                {content}
            </Grid>
        </Grid>
    )
}
