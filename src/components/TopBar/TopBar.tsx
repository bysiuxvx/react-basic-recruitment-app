import * as React from "react"

import { AppBar, Box, Toolbar, IconButton } from "@mui/material"

import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import SettingsIcon from "@mui/icons-material/Settings"

import logo from "../../SVG/company-logo.svg"

export const TopBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img
            src={logo}
            alt="company logo"
            style={{
              width: "12rem",
            }}
          />
          <IconButton color="inherit" sx={{ marginLeft: "auto" }}>
            <SettingsIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
