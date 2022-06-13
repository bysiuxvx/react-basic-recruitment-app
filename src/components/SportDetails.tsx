import { SportType } from "../types/sports.types"

import { Grid, Box, Paper, Typography, useTheme } from "@mui/material"

interface ISportDetails {
  sportDetails: SportType
}

const SportDetails = ({ sportDetails }: ISportDetails) => {
  const theme = useTheme()
  return (
    <Paper
      sx={{
        ml: 3,
        h: "100%",
        boxShadow: "0px 0px 12px -4px rgba(66, 68, 90, 1)",
        maxWidth: "40vw",
        padding: 4,
      }}
    >
      <Typography fontWeight={"bold"}>
        {sportDetails.name} ({sportDetails.location})
      </Typography>
      <Typography
        sx={{
          paddingTop: 5,
        }}
      >
        {sportDetails.description}
      </Typography>
    </Paper>
  )
}

export default SportDetails
