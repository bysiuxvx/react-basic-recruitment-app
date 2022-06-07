import { Link } from "react-router-dom"

import { navigationRoutes } from "../../navigationRoutes"
import { NavigationItem } from "./NavigationItem"

import { Divider, Typography, Box } from "@mui/material"

import HomeIcon from "@mui/icons-material/Home"
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer"
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"
import GroupsIcon from "@mui/icons-material/Groups"
import FactCheckIcon from "@mui/icons-material/FactCheck"
import LocationCityIcon from "@mui/icons-material/LocationCity"

export const LeftNavigation = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: 300,
        borderRight: 2,
      }}
    >
      <Box paddingTop={"1.5rem"}>
        <Typography
          sx={{
            paddingLeft: "2rem",
          }}
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
