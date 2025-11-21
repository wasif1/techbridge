import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProviderWrapper } from "./theme/ThemeProviderWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProviderWrapper>
      <CssBaseline />
      <App />
    </ThemeProviderWrapper>
  </BrowserRouter>
);
