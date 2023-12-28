import React, { useContext } from "react";
import "./header.css";
import { Grid, MenuItem, Tooltip } from "@material-ui/core";
import { GlobalContext } from "../../context/Global";
import { ThemeContext } from "../../context/Theme";
import BugReportIcon from "@material-ui/icons/BugReport";
import SettingsBrightnessIcon from "@material-ui/icons/SettingsBrightness";

function HeaderMenu() {
  const { state, setPage } = useContext(GlobalContext);
  const { themes, setCurrentTheme, ui } = useContext(ThemeContext);
  const { page, currentArticle } = state;

  console.log("theme", themes, ui);
  const saveSettings = () => {
    setCurrentTheme((prevSelectedTheme) => {
      if (prevSelectedTheme.name === "themeBlack") {
        return themes[0];
      } else {
        return themes[1];
      }
    });
  };

  return (
    <Grid className="header">
      <MenuItem
        onClick={() => setPage("browse")}
        style={{ backgroundColor: ui.second, color: ui.fontColor1 }}
        className={
          page === "browse" ? "menu-item menu-item-active" : "menu-item"
        }
      >
        Browse all
      </MenuItem>
      <MenuItem
        style={{ backgroundColor: ui.second, color: ui.fontColor1 }}
        onClick={() =>
          currentArticle === null
            ? setPage("current-random")
            : setPage("current")
        }
        className={
          page === "current"
            ? `menu-item menu-item-active ${
                currentArticle !== null && "title-span"
              }`
            : `menu-item ${currentArticle !== null && "title-span"}  `
        }
      >
        {currentArticle === null ? "Random" : "Current:"}
        {currentArticle !== null && (
          <span className="title-span">{currentArticle.title}</span>
        )}
      </MenuItem>
      <Tooltip title="report">
        <MenuItem
          onClick={() => setPage("report")}
          style={{ backgroundColor: ui.second, color: ui.fontColor1 }}
          className={
            page === "report"
              ? "settings-button menu-item menu-item-active"
              : "menu-item settings-button"
          }
        >
          <BugReportIcon />
        </MenuItem>
      </Tooltip>
      <Tooltip title="theme">
        <MenuItem
          onClick={() => saveSettings()}
          style={{ backgroundColor: ui.second }}
          className={
            page === "settings"
              ? "settings-button menu-item menu-item-active"
              : "menu-item settings-button "
          }
        >
          <SettingsBrightnessIcon />
        </MenuItem>
      </Tooltip>
    </Grid>
  );
}

export default HeaderMenu;
