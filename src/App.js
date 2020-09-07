import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { GlobalStyles } from "./global";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { AddSession } from "./components/AddSession";

//implement react router to enter a "thread" dependent on dryland or climbing//

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Router>
          <div>
            <nav>
              <Link to="/home">Home</Link>
            </nav>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </>
    </ThemeProvider>
  );
}

function Home() {
  return <AddSession />;
}

export default App;
