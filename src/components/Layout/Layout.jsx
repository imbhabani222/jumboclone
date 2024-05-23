import { useState } from "react"
import ThirdDrawer from "./Drawers/ThirdDrawer"

import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import { Box } from "@mui/material"
import Stack from "@mui/material/Stack"
import Search from "./Search/Search"
import Avatar from "@mui/material/Avatar"
import MenuIcon from "@mui/icons-material/Menu"
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline"
import NotificationImportantOutlinedIcon from "@mui/icons-material/NotificationImportantOutlined"
import "./layout.css"

const Layout = ({ main }) => {
  const [drawerToggle, setDrawerToggle] = useState(false)
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setDrawerToggle(open)
  }
  return (
    <Stack direction="column">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        className="layout"
      >
        <ThirdDrawer drawerToggle={drawerToggle} toggleDrawer={toggleDrawer} />
        <Stack direction="row" alignItems="center" gap={3}>
          <IconButton onClick={toggleDrawer(true)} className="btn">
            <MenuIcon />
          </IconButton>

          <Search />
        </Stack>
        <Stack direction="row" alignItems="center" gap={1.3}>
          <IconButton className="btn btnIcon btnIconChat">
            <ChatBubbleOutlineIcon fontSize="1rem" />
          </IconButton>
          <IconButton className="btn btnIcon btnIconBell">
            <NotificationImportantOutlinedIcon fontSize="1rem" />
          </IconButton>
          <Avatar
            alt="Remy Sharp"
            src="https://jumbo.g-axon.work/images/avatar/avatar3.jpg"
            sx={{ width: "40px", height: "40px" }}
          />
        </Stack>
      </Stack>
      <Box className="content">{main}</Box>
    </Stack>
  )
}

export default Layout
