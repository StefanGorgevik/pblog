import React, { useEffect, useContext, useState, useCallback } from "react";
import "./modals.css";
import { Modal, Grid, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import { GlobalContext } from "../../context/Global";
import { ThemeContext } from "../../context/Theme";
import Settings from "./Settings";
import ReportModal from "./ReportModal";

const useStyles = makeStyles(() => ({
  div: {
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
  },
}));

export default function MainModal(s) {
  const classes = useStyles();
  const { state, setModal } = useContext(GlobalContext);
  const { ui } = React.useContext(ThemeContext);
  const { modal } = state;
  const [content, setContent] = useState(null);
  const [title, setTitle] = useState(null);

  const setPageContent = useCallback(() => {
    let comp = null;
    switch (modal) {
      case "report": {
        comp = <ReportModal />;
        setTitle("Report a mistake");
        break;
      }

      case "settings": {
        comp = <Settings />;
        setTitle("Settings");
        break;
      }
      default:
        break;
    }
    setContent(comp);
  }, [modal]);

  useEffect(() => {
    setPageContent();
  }, [modal, setPageContent]);

  return (
    <div className={classes.div}>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={modal !== ""}
        onClose={() => setModal("")}
      >
        <Grid className="modal-content" style={{ backgroundColor: ui.main }}>
          <Typography
            style={{
              margin: "0 auto",
              width: "50%",
              textAlign: "center",
              marginBottom: "20px",
              color: ui.fontColor1,
              borderBottom: "1px solid rgb(219, 219, 80)",
            }}
            className="text"
            variant="h4"
            color="initial"
          >
            {title}
          </Typography>
          <CloseIcon
            onClick={() => setModal("")}
            className="close-modal-icon"
          />
          <Grid className="modal">{content}</Grid>
        </Grid>
      </Modal>
    </div>
  );
}
