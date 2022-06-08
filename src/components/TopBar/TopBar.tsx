import { Box, AppBar, Toolbar, IconButton, Switch } from "@mui/material"

import { darkTheme } from "../../theme"
import logo from "../../SVG/company-logo.svg"

import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import SettingsIcon from "@mui/icons-material/Settings"

export const TopBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          position: "static",
          background: darkTheme.appBar.main,
        }}
      >
        <Toolbar>
          <img
            src={logo}
            alt="company logo"
            style={{
              width: "12rem",
            }}
          />
          <Switch
            sx={{
              marginLeft: "auto",
              "& .MuiSwitch-track": {
                background: "#fefefe",
              },
            }}
          />
          <IconButton color="inherit">
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
