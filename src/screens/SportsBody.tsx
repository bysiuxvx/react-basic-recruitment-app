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
    <Grid container p={8} pl={12}>
      <Typography fontWeight={"bold"}>Sports</Typography>
      <Typography pt={2}>{sports.teaser}</Typography>
      <Grid item>
        <Box>
          <Table
            title={"Sports"}
            columns={columns}
            items={sports.items}
            ButtonProps={{
              children: "ADD SPORT",
            }}
          />
        </Box>
      </Grid>
    </Grid>
  )
}

export default SportsBody
