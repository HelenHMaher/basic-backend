import React from "react";
import { GlobalStyles } from "./global";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { AddClimb, AddDrylandWorkout, AddSession } from "./components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <h1>My Daily Climb</h1>
        <AddSession />
        <AddClimb />
        <AddDrylandWorkout />
      </>
    </ThemeProvider>
  );
}

export default App;
