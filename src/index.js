import React from "react"
import ReactDOM from "react-dom/client"
import NoirProMedium from "./fonts/NoirPro-Medium.woff2"
import NoirProRegular from "./fonts/NoirPro-Regular.woff2"
import { BrowserRouter } from "react-router-dom"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import "./index.css"
import App from "./App"

const theme = createTheme({
  typography: {
    fontFamily: "NoirPro, Arial",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: "NoirPro";
        src: local('NoirPro'), local('NoirPro-Regular'), url(${NoirProRegular}) format('woff2');
        font-style: normal;
        font-display: swap;
        font-weight: 400;
      }
      
      @font-face {
        font-family: "NoirPro";
        src: local('NoirPro'), local('NoirPro-Medium'), url(${NoirProMedium}) format('woff2');
        font-style: normal;
        font-display: swap;
        font-weight: 500;
      }
      `,
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
)
