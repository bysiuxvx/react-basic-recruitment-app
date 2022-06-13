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
import { SportType } from "../../types/sports.types"
import { ModelWithId } from "../../types/table.types"

type TableRowProps<Model> = {
  item: Model
  columns: TableColumn<Model>[]
  activeSport: string | number | undefined
  setActiveSport: Dispatch<SetStateAction<string | number | undefined>>
  getSportId: (id: SportType["id"] | undefined) => void
}

export const TableRow = <Model extends ModelWithId>({
  item,
  columns,
  setActiveSport,
  activeSport,
  getSportId,
}: TableRowProps<Model>): JSX.Element => {
  const theme = useTheme()

  const [iconActive, setIconActive] = useState<boolean>(false)

  useEffect(() => {
    if (activeSport && item["id"] !== activeSport) setIconActive(false)
  }, [activeSport, item])

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
            getSportId(Number(item["id"]))
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
    <MuiTableRow
      sx={{
        backgroundColor:
          item.id === activeSport ? theme.palette.background.paper : undefined,
      }}
    >
      {columns.map((column) => (
        <TableCell
          onClick={() => {
            setActiveSport(item["id"])
            setIconActive(true)
            getSportId(Number(item["id"]))
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
