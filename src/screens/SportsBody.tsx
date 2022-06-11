import { SportsType, SportType } from "../types/sports.types"

import { TableColumn } from "../components/Table/Table"

import { Table } from "../components/Table/Table"

import { Box, Grid, Typography } from "@mui/material"
import { darkTheme, lightTheme } from "../theme"

interface SportsData {
  sports: SportsType
  columns: any
  //   columns: TableColumn<SportType>
}

const SportsBody = ({ sports, columns }: SportsData) => {
  return (
    <Box p={8}>
      <Typography fontSize={20} fontWeight={"bold"}>
        Sports
      </Typography>
      <Typography fontSize={15} pt={2}>
        {sports.teaser}
      </Typography>
      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            maxWidth: "65vw",
            boxShadow: "0px 0px 12px -4px rgba(66, 68, 90, 1)",
          }}
        >
          <Table
            title={"Sports"}
            columns={columns}
            items={sports.items}
            ButtonProps={{
              children: "ADD SPORT",
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default SportsBody
