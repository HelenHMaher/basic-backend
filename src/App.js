import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { GlobalStyles } from "./global";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { AddSession } from "./components/AddSession";
import { History } from "./components/History";
import { Home } from "./components/Home";

//implement react router to enter a "thread" dependent on dryland or climbing//

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Router>
          <div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/history">History</Link>
              <Link to="/newSession">New Session</Link>
            </nav>
            <Switch>
              <Route path="/history">
                <History />
              </Route>
              <Route path="/newSession">
                <AddSession />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
