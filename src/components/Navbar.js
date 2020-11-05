import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "../useStyles";
import logo from "../media/duplicate-explosion.svg";

export default function Navbar() {
    const classes = useStyles()

    return (
        <AppBar className={classes.appBar} position="relative">
        <Toolbar>
          <img src={logo} className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
    )
}
