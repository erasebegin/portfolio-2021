import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import { useStyles } from "../useStyles";

import soulstaminaScrn from "../media/screenshot-soulstamina.png"
import otherworldScrn from "../media/screenshot-otherworld.png"
import commentScrn from "../media/screenshot-commentgen.png"

export default function FlagshipCards() {
  const classes = useStyles();

  const cards = [
    {
      title: "Soulstamina",
      body: "Ecommerce platform for artist Soulstamina",
      url: "https://www.soulstamina.shop",
      repo: "https://github.com/erasebegin/soulstamina-shop",
      image: soulstaminaScrn,
    },
    {
      title: "Otherworld",
      body: "Blog, portfolio and e-commerce platform for artist Otherworld Comics",
      url: "https://www.otherworld.com",
      repo: "",
      image: otherworldScrn
    },
    {
      title: "Comment Generator",
      body:
        "What started out as a very basic tool for storing and copying student comments has developed in to a fully-fledged web app",
      url: "",
      repo: "",
      image: commentScrn
    },
  ];

  return (
    <Container
      className={(classes.cardGrid, classes.flagshipGrid)}
      maxWidth="md"
    >
      <Typography
        component="h1"
        variant="h4"
        align="center"
        color="textSecondary"
        className={classes.heading}
        gutterBottom
      >
        Flagship Projects
      </Typography>
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={card.image}
                title={card.title}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {card.title}
                </Typography>
                <Typography>
                  {card.body}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  View
                </Button>
                <Button size="small" color="primary">
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
