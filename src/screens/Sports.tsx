import { useEffect, useState } from "react"
import { SportsType, SportType } from "../types/sports.types"
import { NoResults } from "../components/NoResults/NoResults"
import { TableColumn } from "../components/Table/Table"
import { Visibility } from "@mui/icons-material"
import { getSportById, getSports } from "../service/sports.service"

import { Grid, Table, Typography } from "@mui/material"

import SportsBody from "./SportsBody"

export const SportsScreen = () => {
  const [sports, setSports] = useState<SportsType | undefined>(undefined)
  const [sportDetails, setSportDetails] = useState<SportType | undefined>(
    undefined
  )

  const columns: TableColumn<SportType>[] = [
    { id: "sport", label: "Sport", value: "name" },
    { id: "location", label: "Location", value: "location" },
    { id: "name", label: "Name", value: "shortDescription" },
    {
      id: "actions",
      label: "Actions",
      value: <Visibility />,
      textAlign: "right",
    },
  ]

  const getSportDetails = async (id: SportType["id"]) => await getSportById(id)

  useEffect(() => {
    const fetchSportsData = async () => await getSports()
    fetchSportsData()
      .then((data) => setSports(data))
      .catch((error) => console.log(error))
  }, [setSports])

  if (!sports) {
    return <NoResults />
  }

  // return (
  //   <Grid container p={8} pl={12}>
  //     <Typography fontWeight={"bold"}>Sports</Typography>
  //     <Typography pt={2}>{sports.teaser}</Typography>

  //     <Grid item>
  //     <Table
  //           title={"Sports"}
  //           columns={columns}
  //           items={sports.items}
  //           ButtonProps={{
  //             children: "ADD SPORT",
  //           }}
  //         />
  //     </Grid>
  //   </Grid>
  // )
  return <SportsBody sports={sports} columns={columns} />
}
