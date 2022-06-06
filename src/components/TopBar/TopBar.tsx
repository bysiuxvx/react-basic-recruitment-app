import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import SettingsIcon from "@mui/icons-material/Settings"

export const TopBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
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
