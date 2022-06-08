import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { SvgIconComponent } from "@mui/icons-material"
import { NavLink } from "react-router-dom"
import { FC, ReactElement } from "react"

type NavigationItemProp = {
  to: string
  icon: ReactElement<SvgIconComponent>
  label: string
}

interface NavStyle {
  isActive: boolean
}

const NavLinkStyles = ({ isActive }: NavStyle) => {
  return {
    textDecoration: "none",
    background: isActive ? "#faebe5" : "none",
  }
}

export const NavigationItem: FC<NavigationItemProp> = ({ to, icon, label }) => {
  return (
    <NavLink
      to={to}
      style={NavLinkStyles}
      children={({ isActive }) => (
        <ListItemButton sx={{ background: "inherit" }}>
          <ListItemIcon
            sx={{
              paddingLeft: "1rem",
              color: isActive ? "#ec6033" : "none",
            }}
          >
            {icon}
          </ListItemIcon>
          <ListItemText
            sx={{
              color: "#0000008a",
            }}
          >
            {label}
          </ListItemText>
        </ListItemButton>
      )}
    />
  )
}
