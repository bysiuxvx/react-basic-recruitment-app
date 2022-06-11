import { navigationRoutes } from "../../navigationRoutes"
import { NavigationItem } from "./NavigationItem"

import { Divider, Typography, Box } from "@mui/material"

import HomeIcon from "@mui/icons-material/Home"
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer"
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"
import GroupsIcon from "@mui/icons-material/Groups"
import FactCheckIcon from "@mui/icons-material/FactCheck"
import LocationCityIcon from "@mui/icons-material/LocationCity"
import { darkTheme, lightTheme } from "../../theme"

import makeStyles from "@mui/material"

import { createTheme, Theme, ThemeOptions, useTheme } from "@mui/material"

export const LeftNavigation = () => {
  // const useStyles = makeStyles((theme: Theme) => ({ ...theme }))

  const theme = useTheme()

  return (
    <Box
      sx={{
        height: "100%",
        background: theme.palette.background.paper,

        boxShadow: "0px 0px 12px -4px rgba(66, 68, 90, 1)",
        width: 250,
      }}
    >
      <Box paddingTop={"1.5rem"}>
        <Typography
          sx={{
            paddingLeft: "2rem",
          }}
          color={theme.palette.text.secondary}
        >
          Management
        </Typography>
        <NavigationItem
          to={navigationRoutes.dashboard.path}
          icon={<HomeIcon />}
          label={"Dashboard"}
        />
        <NavigationItem
          to={navigationRoutes.sports.path}
          icon={<SportsSoccerIcon />}
          label={"Sports"}
        />
        <NavigationItem
          to={navigationRoutes.competitions.path}
          icon={<EmojiEventsIcon />}
          label={"Competitions"}
        />
      </Box>
      <Divider />
      <Box paddingTop={"1.5rem"}>
        <Typography
          sx={{
            paddingLeft: "2rem",
          }}
          color={theme.palette.text.secondary}
        >
          Planning
        </Typography>
        <NavigationItem
          to={navigationRoutes.scheduling.path}
          icon={<FactCheckIcon />}
          label={"Scheduling"}
        />
        <NavigationItem
          to={navigationRoutes.organisations.path}
          icon={<LocationCityIcon />}
          label={"Organisations"}
        />
      </Box>
      <Divider />
      <Box paddingTop={"1.5rem"}>
        <Typography
          sx={{
            paddingLeft: "2rem",
          }}
          color={theme.palette.text.secondary}
        >
          People
        </Typography>
        <NavigationItem
          to={navigationRoutes.users.path}
          icon={<GroupsIcon />}
          label={"Users"}
        />
      </Box>
    </Box>
  )
}
