import React, { useState } from "react"

import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Typography from "@mui/material/Typography"
import ListSubheader from "@mui/material/ListSubheader"
import IconButton from "@mui/material/IconButton"

import MenuOpenIcon from "@mui/icons-material/MenuOpen"

import { HomeButtons, AppButtons, CardButtons } from "./MenuButtons"
import { Link } from "@mui/material"

import "./thirdDrawerStyles.css"

export default function ThirdDrawer({ drawerToggle, toggleDrawer }) {
  const list = () => (
    <Box className="drawerBox" role="presentation">
      <List
        subheader={
          <ListSubheader disableSticky className="listSubHeader" component="li">
            Home
          </ListSubheader>
        }
      >
        {HomeButtons.map(({ id, text, icon }) => (
          <ListItem key={id} disablePadding className="listItem">
            <ListItemButton
              className="listItemBtn"
              sx={{ borderRadius: "0px 24px 24px 0px" }}
            >
              <Link className="link">
                <ListItemIcon className="linkIcon">{icon}</ListItemIcon>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="body1" className="linkName">
                      {text}
                    </Typography>
                  }
                />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List
        subheader={
          <ListSubheader disableSticky className="listSubHeader" component="li">
            App
          </ListSubheader>
        }
      >
        {AppButtons.map(({ id, text, icon }) => (
          <ListItem key={id} disablePadding className="listItem">
            <ListItemButton className="listItemBtn">
              <Link className="link">
                <ListItemIcon className="linkIcon">{icon}</ListItemIcon>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="body1" className="linkName">
                      {text}
                    </Typography>
                  }
                />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List
        subheader={
          <ListSubheader
            disableSticky
            className="listSubHeader"
            component="div"
          >
            Card
          </ListSubheader>
        }
      >
        {CardButtons.map(({ id, text, icon }) => (
          <ListItem key={id} disablePadding className="listItem">
            <ListItemButton className="listItemBtn">
              <Link className="link">
                <ListItemIcon className="linkIcon">{icon}</ListItemIcon>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="body1" className="linkName">
                      {text}
                    </Typography>
                  }
                />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <React.Fragment>
      <Drawer anchor="left" open={drawerToggle} className="thirdDrawer">
        <Box className="logoBox">
          <Link aria-label="logo">
            <img src="https://jumbo.g-axon.work/images/logo.png" alt="" />
          </Link>
          <IconButton
            aria-label="close menu"
            component="button"
            edge="end"
            onClick={toggleDrawer(false)}
          >
            <MenuOpenIcon className="closebtn" />
          </IconButton>
        </Box>

        {list()}
      </Drawer>
    </React.Fragment>
  )
}
