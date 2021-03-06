import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import InstaIcon from "@material-ui/icons/Instagram";
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import { GrReactjs } from "react-icons/gr";

import { useStyles } from "../useStyles";
import useWidth from "../hooks/UseWidth";

export default function Footer() {
  const classes = useStyles();
  const isMobile = useWidth();

  return (
    <footer className={classes.footer}>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        <a
          href="https://www.linkedin.com/in/chris-haupt/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <LinkedInIcon className={classes.footerIcons} />
        </a>
        <a
          href="https://www.github.com/erasebegin"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <GithubIcon className={classes.footerIcons} />
        </a>
        <a
          href="https://www.instagram.com/christhaupt/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <InstaIcon className={classes.footerIcons} />
        </a>
        <Link to="/contact">
          <MailIcon className={classes.footerIcons} />
        </Link>
        <div
          className={classes.footerText}
          style={{ flexDirection: isMobile ? "column" : "row" }}
        >
          <p>Created using React</p>
          <GrReactjs
            size={28}
            style={{ display: isMobile ? "none" : "initial" }}
          />

          <p>
            Check out the source over on{" "}
            <a
              href="https://github.com/erasebegin/portfolio-2021"
              target="_blank"
              rel="noopener noreferrer"
              style={{color:"#00296b"}}
            >
              Github
            </a>
          </p>
          <a
            href="https://github.com/erasebegin/portfolio-2021"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon style={{ display: isMobile ? "none" : "initial", color:"#00296b" }} />
          </a>
        </div>
      </Typography>
    </footer>
  );
}
