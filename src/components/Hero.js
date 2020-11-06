import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import useWidth from "../hooks/UseWidth";

import mandala from "../media/mandala.png";
import mandalaHalf from "../media/mandala-half.png";
import headshot from "../media/headshot.jpg";

export default function Hero() {
  const isMobile = useWidth();

  const useStyles = makeStyles((theme) => ({
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    innerContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    mandala1: {
      position: "absolute",
      maxHeight: isMobile ? 300 : 700,
      top: 0,
      right: 0,
      transform: "translate(0, -50%)",
      overflow: "hidden"
    },
    mandala2: {
      position: "absolute",
      maxHeight: isMobile ? 300 : 700,
      top: 0,
      left: 0,
      transform: "translate(-50%, -50%)",
    },
    headshot: {
      maxHeight: isMobile ? 100 : 250,
      margin: "auto",
      borderRadius: "40%",
      marginBottom: "2em",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <img src={mandalaHalf} className={classes.mandala1} />
      <img src={mandala} className={classes.mandala2} />
      <Container maxWidth="sm" className={classes.innerContainer}>
        <img src={headshot} className={classes.headshot} />
        <Typography
          component="h1"
          variant={isMobile ? "h4" : "h2"}
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Chris Haupt's
        </Typography>
        <Typography
          component="h1"
          variant={isMobile ? "h3" : "h1"}
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Portfolio
        </Typography>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          align="center"
          color="textSecondary"
          paragraph
        >
          A collection of some of my favourite projects created over the last 2
          years using various javascript frameworks.
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Link to="/contact">
                <Button variant="contained" color="primary">
                  Say hi 👋
                </Button>
              </Link>
            </Grid>
            {/* <Grid item>
                <Button variant="outlined" color="primary">
                  Secondary action
                </Button>
              </Grid> */}
          </Grid>
        </div>
      </Container>
    </div>
  );
}
