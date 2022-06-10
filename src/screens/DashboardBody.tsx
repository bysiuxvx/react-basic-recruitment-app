import { Link } from "react-router-dom"

import { Box, Grid, Typography } from "@mui/material"
import { darkTheme, lightTheme } from "../theme"

import { DashboardType, DashboardItem } from "../types/dashboard.types"

interface DashboardData {
  items: DashboardType[]
  getLink: any
  // getLink: () => DashboardItem
}

const DashboarBody = ({ items, getLink }: DashboardData) => {
  return (
    <Grid container spacing={4} padding={8}>
      {/* sprawdz typ!  */}
      {/* sprawdz typ!  */}
      {/* sprawdz typ!  */}
      {/* sprawdz typ!  */}
      {/* sprawdz typ!  */}
      {/* sprawdz typ!  */}
      {/* sprawdz typ!  */}
      {items.map((item: any) => (
        <Grid item xs={items.length} key={item.id}>
          <Box
            sx={{
              backgroundColor: lightTheme.palette.background.paper,
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
                  color: darkTheme.palette.text.primary,
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
                  color: darkTheme.palette.secondary.main,
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
      ))}
    </Grid>
  )
}

export default DashboarBody
