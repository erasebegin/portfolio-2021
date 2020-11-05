import React from 'react'
import Typography from "@material-ui/core/Typography";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import InstaIcon from "@material-ui/icons/Instagram";

import { useStyles } from "../useStyles";


export default function Footer() {
  const classes = useStyles();

    return (
        <footer className={classes.footer}>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          <LinkedInIcon />
          <GithubIcon />
          <InstaIcon />
        </Typography>
        {/* <Copyright /> */}
      </footer>
    )
}
