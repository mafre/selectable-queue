import * as React from "react";
import { RecoilRoot } from "recoil";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import theme from "./styles/theme";
import reportWebVitals from "./reportWebVitals";
import "./styles/index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <RecoilRoot>
            <App />
        </RecoilRoot>
    </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
