import React from "react";
import "./App.css";
import { Typography } from "@mui/material";
import CreateWhichAccount from "./screens/createWhichAccount";
import Steppers from "./components/stepper";
import Dialogue from "./components/popup";

function App() {
  return (
    <div className="app-container">
      <Steppers />
    </div>
  );
}

export default App;
