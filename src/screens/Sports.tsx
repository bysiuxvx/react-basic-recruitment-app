import { useEffect, useState } from "react"
import { SportsType, SportType, SportTypeCreation } from "../types/sports.types"
import { NoResults } from "../components/NoResults/NoResults"
import { TableColumn } from "../components/Table/Table"
import { Visibility } from "@mui/icons-material"
import { getSportById, getSports } from "../service/sports.service"

import { Table } from "../components/Table/Table"

import { Box, Typography, useTheme } from "@mui/material"
import SportDetails from "../components/Sports/SportDetails"
import AddSportsForm from "../components/Sports/AddSportsForm"

export const SportsScreen = () => {
  const [sports, setSports] = useState<SportsType>({ teaser: "", items: [] })
  const [sportDetails, setSportDetails] = useState<SportType | undefined>(
    undefined
  )
  const [activeSport, setActiveSport] = useState<string | number | undefined>(
    undefined
  )
  const [sportId, setSportId] = useState<SportType["id"] | undefined>(undefined)
  const [addFormIsActive, setAddFormIsActive] = useState<boolean>(false)

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

  const getSportId = (id: SportType["id"] | undefined) => {
    setSportId(id)
  }

  const handleSportsForm = (newSport: SportTypeCreation) => {
    sports.items.push({
      ...newSport,
      id: sports.items.length + 1, //normally I'd use UUID, but I didnt want to import any additional library
    })
  }

  const getSportDetails = async (id: SportType["id"]) =>
    await getSportById(id).then((res) => setSportDetails(res))

  useEffect(() => {
    const fetchSportsData = async () => await getSports()
    fetchSportsData()
      .then((data) => setSports(data))
      .catch((error) => console.log(error))
  }, [setSports])

  useEffect(() => {
    if (sportId) getSportDetails(sportId)
  }, [sportId])

  useEffect(() => {
    if (activeSport !== undefined) setAddFormIsActive(false)
  }, [activeSport])

  useEffect(() => {
    if (addFormIsActive) {
      setSportDetails(undefined)
    }
  }, [addFormIsActive])

  if (!sports) {
    return <NoResults />
  }

  return (
    <Box p={8}>
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
            activeSport={activeSport}
            getSportId={getSportId}
            setActiveSport={setActiveSport}
            ButtonProps={{
              children: "ADD SPORT",
              onClick: () => setAddFormIsActive(true),
            }}
          />
        </Box>
        {sportDetails && <SportDetails sportDetails={sportDetails} />}
        {addFormIsActive && (
          <AddSportsForm
            handleSubmit={handleSportsForm}
            setAddFormIsActive={setAddFormIsActive}
          />
        )}
      </Box>
    </Box>
  )
}
