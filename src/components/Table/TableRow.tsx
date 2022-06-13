import React, {
  useState,
  ReactElement,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react"
import {
  useTheme,
  TableCell,
  TableRow as MuiTableRow,
  IconButton,
} from "@mui/material"
import { TableColumn } from "./Table"
import { ModelWithId } from "../../types/table.types"

type TableRowProps<Model> = {
  item: Model
  columns: TableColumn<Model>[]
  activeSport: string | number | undefined
  setActiveSport: Dispatch<SetStateAction<string | number | undefined>>
}

export const TableRow = <Model extends ModelWithId>({
  item,
  columns,
  setActiveSport,
  activeSport,
}: TableRowProps<Model>): JSX.Element => {
  const theme = useTheme()

  const [iconActive, setIconActive] = useState<boolean>(false)

  useEffect(() => {
    if (activeSport && item["id"] !== activeSport) setIconActive(false)
  }, [activeSport, item])

  const test = theme.palette.secondary.contrastText

  const getItemContent = (
    column: TableColumn<Model>
  ): ReactElement | string => {
    if (React.isValidElement(column.value)) {
      return (
        <IconButton
          color={iconActive ? "primary" : "inherit"}
          onClick={() => {
            setActiveSport(item["id"])
            setIconActive(true)
          }}
        >
          {/* {activeSport} */}
          {column.value}
        </IconButton>
      )
    }

    return item[column.value] as unknown as string
  }

  return (
    <MuiTableRow>
      {columns.map((column) => (
        <TableCell
          onClick={() => {
            setActiveSport(item["id"])
            setIconActive(true)
          }}
          sx={{
            textAlign: column.textAlign || "left",
            color: theme.palette.text.primary,
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          {getItemContent(column)}
        </TableCell>
      ))}
    </MuiTableRow>
  )
}
