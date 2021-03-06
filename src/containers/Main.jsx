import React, { useState, useEffect, useCallback } from "react";
import "./containers.css";
import { Grid } from "@material-ui/core";
import TopHeader from "../components/Header/TopHeader";
import CurrentArticle from "../components/CurrentArticle/CurrentArticle";
import AllArticles from "../components/AllArticles/AllArticles";
import { GlobalContext } from "../context/Global";
import { ThemeContext } from "../context/Theme";
import MainModal from "../components/Modals/MainModal";
import InfoModal from "../components/Modals/InfoModal";
import Error from "../components/Error";

export default function Main() {
  const { state } = React.useContext(GlobalContext);
  const { ui } = React.useContext(ThemeContext);
  const { page, modal, showMessageModal } = state;
  const [content, setContent] = useState(false);

  const setPageContent = useCallback(() => {
    let content = null;
    switch (page) {
      case "browse": {
        content = <AllArticles />;
        break;
      }
      case "current": {
        content = <CurrentArticle />;
        break;
      }
      default:
        content = <Error />;
        break;
    }
    setContent(content);
  }, [page]);

  useEffect(() => {
    setPageContent();
  }, [page, setPageContent]);

  return (
    <Grid className="main" style={{ backgroundColor: ui.main }}>
      {modal !== "" && <MainModal />}
      {showMessageModal !== "" && <InfoModal />}
      <TopHeader />
      <Grid className="bottom">{content}</Grid>
    </Grid>
  );
}
