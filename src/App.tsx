import React, { useState } from "react"
import "./App.css"
import { Grid, PaletteMode, ThemeProvider } from "@mui/material"
import { TopBar } from "./components/TopBar/TopBar"
import { LeftNavigation } from "./components/LeftNavigation/LeftNavigation"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { darkTheme, lightTheme } from "./theme"
import { Error404 } from "./screens/404"
import { navigationRoutes } from "./navigationRoutes"

import CssBaseline from "@mui/material/CssBaseline"

function App() {
  const [theme, setTheme] = useState(lightTheme)

  const toggleTheme = (mode: PaletteMode) => {
    if (mode === "light") {
      setTheme(lightTheme)
    } else {
      setTheme(darkTheme)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <TopBar />

        <Grid container>
          <Grid item sx={{ width: 200 }}>
            <LeftNavigation />
          </Grid>
          <Grid item xs>
            <Routes>
              {Object.values(navigationRoutes).map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
              <Route path={"*"} element={<Error404 />} />
            </Routes>
          </Grid>
        </Grid>
      </BrowserRouter>
      <CssBaseline />
    </ThemeProvider>
  )
}

export default App
