import React from "react";
import { GlobalStyles } from "./global";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { AddClimb, AddDrylandWorkout } from "./components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <h1>Test</h1>
        <AddClimb />
        <AddDrylandWorkout />
      </>
    </ThemeProvider>
  );
}

export default App;
