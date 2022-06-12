import {
  Box,
  Button,
  ButtonProps,
  Paper,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow as MuiTableRow,
  Typography,
  useTheme,
} from "@mui/material"
import { CSSProperties, FC, ReactElement } from "react"
import { TableRow } from "./TableRow"
import { ModelWithId } from "../../types/table.types"

export type TableColumn<Model> = {
  id: string
  label: string
  value: keyof Model | ReactElement
  textAlign?: CSSProperties["textAlign"]
}

type TableProps<Model extends ModelWithId> = {
  columns: TableColumn<Model>[]
  items: Model[]
  title: string
  ButtonProps?: Pick<ButtonProps, "children" | "onClick">
}

export const Table: FC<TableProps<any>> = ({
  columns,
  items,
  title,
  ButtonProps,
}) => {
  const theme = useTheme()
  return (
    <Box>
      <Paper
        sx={{
          backgroundColor: theme.palette.secondary.dark,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 1.5,
          paddingLeft: 3,
          paddingRight: 3,
        }}
      >
        <Typography color={"#F5F5F5"}>{title}</Typography>
        {ButtonProps !== undefined && (
          <Button variant={"contained"} {...ButtonProps} />
        )}
      </Paper>
      <TableContainer>
        <MuiTable>
          <TableHead>
            <MuiTableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  sx={{
                    textAlign: column.textAlign || "left",
                    color: theme.palette.text.primary,
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </MuiTableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id} item={item} columns={columns} />
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </Box>
  )
}
