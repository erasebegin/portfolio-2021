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

export default function IllustrationCards() {
  const classes = useStyles();

  const cards = [
    {
      title: "Crux",
      body: "Ecommerce platform for artist Soulstamina",
      url: "https://www.soulstamina.shop",
      repo: "https://github.com/erasebegin/soulstamina-shop",
      image: "",
    },
    {
      title: "Otherworld",
      body:
        "Blog, portfolio and e-commerce platform for artist Otherworld Comics",
      url: "https://www.otherworld.com",
      repo: "",
    },
    {
      title: "Comment Generator",
      body:
        "What started out as a very basic tool for storing and copying student comments has developed in to a fully-fledged web app",
      url: "",
      repo: "",
    },
  ];

  return (
    <Container
      className={(classes.cardGrid, classes.illustrationGrid)}
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
        Illustration
      </Typography>
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title={card.title}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {card.title}
                </Typography>
                <Typography>{card.body}</Typography>
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
      <Container style={{ display: "flex", marginTop: "2em"}}>
        <a
          href="https://www.thinkdrops.art"
          rel="noopener noreferrer"
          target="_blank"
          style={{margin:"auto", alignSelf:"center", justifySelf: "center"}}
        >
          <Button variant="contained" color="primary">
            More 🎨
          </Button>
        </a>
      </Container>
    </Container>
  );
}
