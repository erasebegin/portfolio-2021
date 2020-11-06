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

import crux from "../media/crux.png";
import christmas from "../media/christmas.png";
import boris from "../media/boris.png";

export default function IllustrationCards() {
  const classes = useStyles();

  const cards = [
    {
      title: "Crux",
      body: "Illustrations for a tutorial for Juxt's bitemporal database-- Crux",
      url: "https://www.thinkdrops.art/blog/crux-tutorial/",
      image: crux,
    },
    {
      title: "Penguin School Projects",
      body:
        "Earliest projects whilst studying at the Penguin Illustration School",
      url: "https://www.thinkdrops.art/blog/alien-sushi",
      image: christmas,
    },
    {
      title: "Boris",
      body:
        "Cover artwork for Lisna track",
      url: "https://www.thinkdrops.art/blog/boris",
      image: boris,
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
              <a
                href={card.url}
                rel="noopener noferrer"
                target="_blank"
                className={classes.link}
              >
                <CardMedia
                  className={classes.cardMedia}
                  image={card.image}
                  title={card.title}
                />
              </a>
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {card.title}
                </Typography>
                <Typography>{card.body}</Typography>
              </CardContent>
              <CardActions>
                <a
                  href={card.url}
                  rel="noopener noferrer"
                  target="_blank"
                  className={classes.link}
                >
                  <Button size="small" color="primary">
                    View
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Container style={{ display: "flex", marginTop: "2em" }}>
        <a
          href="https://www.thinkdrops.art"
          rel="noopener noreferrer"
          target="_blank"
          style={{ margin: "auto", alignSelf: "center", justifySelf: "center" }}
        >
          <Button variant="contained" color="primary">
            More 🎨
          </Button>
        </a>
      </Container>
    </Container>
  );
}
