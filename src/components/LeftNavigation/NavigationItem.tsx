import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { SvgIconComponent } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { FC, ReactElement } from "react"

type NavigationItemProp = {
  to: string
  icon: ReactElement<SvgIconComponent>
  label: string
}

export const NavigationItem: FC<NavigationItemProp> = ({ to, icon, label }) => {
  return (
    <Link to={to}>
      <ListItemButton>
        <ListItemIcon sx={{ paddingLeft: "1rem" }}>{icon}</ListItemIcon>
        <ListItemText>{label}</ListItemText>
      </ListItemButton>
    </Link>
  )
}
