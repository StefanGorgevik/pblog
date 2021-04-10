import React, { useState, useEffect, useCallback } from 'react'
import './containers.css'
import { Grid } from '@material-ui/core'
import TopHeader from '../components/Header/TopHeader'
import CurrentArticle from '../components/CurrentArticle/CurrentArticle'
import AllArticles from '../components/AllArticles/AllArticles'
import ReportModal from '../components/Modals/ReportModal'
import InfoModal from '../components/Modals/InfoModal'
import Settings from '../components/Modals/Settings'
import { GlobalContext } from '../context/Global'
import { ThemeContext } from '../context/Theme'

export default function Main() {
    const { state, setReportClicked,  } = React.useContext(GlobalContext);
    const { ui } = React.useContext(ThemeContext);
    const { page, reportClicked, showMessageModal, settingsClicked } = state;
    const [content, setContent] = useState(false);
    console.log('MAIN UI', ui)
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
        <Grid className='main' style={{backgroundColor: ui.main}}>
            {showMessageModal && <InfoModal />}
            {reportClicked && <ReportModal/>}
            {settingsClicked && <Settings/>}
            <TopHeader />
            <Grid className='bottom'>
                {content}
            </Grid>
        </Grid>
    )
}
