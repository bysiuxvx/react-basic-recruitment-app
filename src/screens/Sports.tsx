import { useEffect, useState } from "react"
import { SportsType, SportType } from "../types/sports.types"
import { NoResults } from "../components/NoResults/NoResults"
import { TableColumn } from "../components/Table/Table"
import { Visibility } from "@mui/icons-material"
import { getSportById, getSports } from "../service/sports.service"

import { Table } from "../components/Table/Table"

import { Box, Grid, Typography, useTheme } from "@mui/material"

export const SportsScreen = () => {
  const [sports, setSports] = useState<SportsType | undefined>(undefined)
  const [sportDetails, setSportDetails] = useState<SportType | undefined>(
    undefined
  )
  const [activeSport, setActiveSport] = useState<string | number | undefined>(
    undefined
  )

  const theme = useTheme()

  const columns: TableColumn<SportType>[] = [
    { id: "sport", label: "Sport", value: "name" },
    { id: "location", label: "Location", value: "location" },
    { id: "name", label: "Name", value: "shortDescription" },
    {
      id: "actions",
      label: "Actions",
      value: <Visibility />,
      textAlign: "right",
      action: (id: number) => () => {
        setActiveSport(id)
      },
    },
  ]

  const getSportDetails = async (id: SportType["id"]) =>
    await getSportById(id).then((res) => setSportDetails(res))

  useEffect(() => {
    const fetchSportsData = async () => await getSports()
    fetchSportsData()
      .then((data) => setSports(data))
      .catch((error) => console.log(error))
  }, [setSports])

  useEffect(() => {})

  if (!sports) {
    return <NoResults />
  }

  return (
    <Grid container p={8}>
      <Typography
        fontSize={20}
        fontWeight={"bold"}
        color={theme.palette.text.primary}
      >
        Sports
      </Typography>
      <Typography fontSize={15} pt={2} color={theme.palette.text.secondary}>
        {sports.teaser}
      </Typography>
      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          item
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
            activeSport={activeSport}
            setActiveSport={setActiveSport}
            ButtonProps={{
              children: "ADD SPORT",
            }}
          />
        </Grid>
        {sportDetails && (
          <Grid item sx={{ flexGrow: 1 }}>
            {/* {sportDetails} */}
          </Grid>
        )}
      </Box>
    </Grid>
  )
}
