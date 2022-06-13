import { Link } from "react-router-dom"

import { Box, Grid, Typography, useTheme } from "@mui/material"
import { darkTheme } from "../theme"

import { DashboardType } from "../types/dashboard.types"

interface DashboardData {
  item: DashboardType
  getLink: any
}

const DashboarBody = ({ item, getLink }: DashboardData) => {
  const theme = useTheme()

  return (
    <Grid item xs={6}>
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 12px -4px rgba(66, 68, 90, 1)",
        }}
      >
        <Box
          sx={{
            backgroundColor: darkTheme.appBar.main,
            padding: 1,
            paddingLeft: 3,
          }}
        >
          <Typography
            sx={{
              color: "#F5F5F5",
              fontSize: 20,
            }}
          >
            {item.title}
          </Typography>
        </Box>
        <Box
          sx={{
            padding: 3,
            height: "240px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          <Typography
            sx={{
              fontSize: 15,
              color: theme.palette.secondary.main,
              textAlign: "justify",
            }}
          >
            {item.text}
          </Typography>
        </Box>
        <Box
          sx={{
            pr: 5,
            pt: 3,
            pb: 2,
            textDecoration: "none",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Link
            to={getLink(item.id)}
            style={{
              textDecoration: "none",
              fontWeight: 550,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              color: "#ec6033",
            }}
          >
            more info
          </Link>
        </Box>
      </Box>
    </Grid>
  )
}

export default DashboarBody
