import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { DataRepoImpl } from "./data/DataRepoImpl";
import { DataRepo } from "./data/DataRepo";
import { Sections } from "./components/Sections";
import { ProfileSection } from "./components/Profile";
import { createTheme, ThemeProvider, useMediaQuery } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { EducationSection } from "./components/Education";

const App = () => {
  const dataRepo: DataRepo = new DataRepoImpl();

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  const appStyle = {
    alignItems: "center",
    minWidth: "100vw",
    minHeight: "100vh",
    background: theme.palette.background.default,
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="col" style={appStyle}>
        <Header dataRepo={dataRepo} />
        <Sections dataRepo={dataRepo} />
        <Switch>
          <Route exact path="/">
            <Projects dataRepo={dataRepo} />
          </Route>
          <Route exact path="/skills">
            <Skills dataRepo={dataRepo} />
          </Route>
          <Route exact path="/education">
            <EducationSection dataRepo={dataRepo} />
          </Route>
          <Route exact path="/about">
            <ProfileSection dataRepo={dataRepo} />
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
};

export default App;
