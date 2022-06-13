import { useState, useEffect } from "react"

import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Switch,
  useTheme,
  PaletteMode,
} from "@mui/material"

import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import SettingsIcon from "@mui/icons-material/Settings"

import { darkTheme } from "../../theme"

interface Nav {
  toggleTheme: (mode: PaletteMode) => void
}

export const TopBar = ({ toggleTheme }: Nav) => {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if (checked) {
      toggleTheme("dark")
    } else {
      toggleTheme("light")
    }
  }, [checked, toggleTheme])

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
            src={"/logo.svg"}
            alt="company logo"
            style={{
              width: "12rem",
            }}
          />
          <Switch
            checked={checked}
            onChange={() => {
              setChecked(!checked)
            }}
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
