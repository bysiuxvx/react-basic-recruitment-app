import { Typography } from "@mui/material"
import { useLocation } from "react-router-dom"

const PageInfo = () => {
  const pathName = useLocation().pathname

  if (pathName === "/" || pathName === "/sports") return null
  else
    return (
      <>
        <Typography p={5} pl={6} fontWeight="bold">
          This is the {pathName.substring(1)} page.
        </Typography>
      </>
    )
}

export default PageInfo
