import { Box, AppBar, Toolbar, IconButton, Switch } from "@mui/material"

import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import SettingsIcon from "@mui/icons-material/Settings"

import { darkTheme } from "../../theme"

interface Nav {
  // toggleTheme: () => void
  toggleTheme: any

  // toggleTheme?: <ButtonProps, "onClick">
  // toggleTheme?: Pick<ButtonProps, "children" | "onClick">
}

export const TopBar = ({ toggleTheme }: Nav) => {
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
            onChange={() => toggleTheme()}
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
