import { Dispatch, SetStateAction, useState } from "react"

import {
  Paper,
  Typography,
  Stack,
  TextField,
  Button,
  TextareaAutosize,
  useTheme,
} from "@mui/material"
import { SportTypeCreation } from "../types/sports.types"

interface SportsForm {
  handleSubmit: (newSport: SportTypeCreation) => void
  setAddFormIsActive: Dispatch<SetStateAction<boolean>>
}

const AddSportsForm = ({ handleSubmit, setAddFormIsActive }: SportsForm) => {
  const [name, setName] = useState<string>("")
  const [location, setLocation] = useState<string>("")
  const [shortDescription, setShortDescription] = useState<string>("")
  const [description, setDescription] = useState<string>("")

  const theme = useTheme()

  const cancelFormAction = () => {
    setAddFormIsActive(false)
    setName("")
    setLocation("")
    setDescription("")
  }

  const onSubmit = () => {
    if ([name, location, description].some((el) => !el)) return
    handleSubmit({ name, location, description })
    alert(`Name: ${name}, locaton: ${location}, description: ${description}`)
    cancelFormAction()
  }

  return (
    <Paper
      sx={{
        ml: 5,
        h: "100%",
        boxShadow: "0px 0px 12px -4px rgba(66, 68, 90, 1)",
        minWidth: "25vw",
      }}
    >
      <Stack direction={"column"}>
        <Stack>
          <Typography
            sx={{ backgroundColor: theme.palette.secondary.dark }}
            color={"#F5F5F5"}
            p={2}
          >
            Add sport
          </Typography>
        </Stack>
        <Stack
          sx={{ p: 3 }}
          direction="column"
          height="100%"
          justifyContent="space-between"
        >
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <TextField
              label="Sports name"
              type={"text"}
              variant="outlined"
              defaultValue={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Location"
              type={"text"}
              variant="outlined"
              defaultValue={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <TextField
              label="Short description"
              type={"text"}
              variant="outlined"
              defaultValue={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
            />
            <TextareaAutosize
              defaultValue={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{ width: "100%", minHeight: "6rem" }}
            />
          </form>
        </Stack>
        <Stack justifyContent="flex-end" direction="row" p={1}>
          <Button onClick={() => cancelFormAction()}>Cancel</Button>
          <Button onClick={() => onSubmit()}>Save</Button>
        </Stack>
      </Stack>
    </Paper>
  )
}

export default AddSportsForm
