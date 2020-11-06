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

import lisnaImage from "../media/lisna.png";
import scrabbleImage from "../media/scrabble.png";
import tyrexImage from "../media/tyrex.png";
import weatherImage from "../media/weather.png";
import necessaryImage from "../media/necessary.png";
import jotter from "../media/jotter.png";

export default function Cards() {
  const classes = useStyles();

  const cards = [
    {
      title: "Scrabble Letters",
      body: "A small web app that acts as a virtual scrabble letter bag",
      image: scrabbleImage,
      url: "https://scrabble-letters.netlify.app",
      repo: "https://github.com/erasebegin/scrabble-letters",
    },
    {
      title: "Weather Search",
      body:
        "Node Express weather API with a Handlebars front-end. Icons are all made by me ^_^",
      image: weatherImage,
      url: "http://www.quick-weather.com",
      repo: "https://github.com/erasebegin/weather-search",
    },
    {
      title: "Lisna Music",
      body: "Small landing page project for musician Lisna created using React",
      image: lisnaImage,
      url: "https://www.lisna.co.uk",
      repo: "https://github.com/erasebegin/lisna-music",
    },
    {
      title: "Necessary Products",
      body:
        "A spoof product page created as one of my first explorations in to front-end development",
      image: necessaryImage,
      url: "https://erasebegin.github.io/necessary-products",
      repo: "https://github.com/erasebegin/necessary-products",
    },
    {
      title: "Jotter",
      body:
        "A kind of PWA created in order to experiment with the localStorage browser functionality",
      image: jotter,
      url: "https://my-jotter.netlify.app/",
      repo: "https://github.com/erasebegin/jotter",
    },
    {
      title: "Tyrex Unsurance",
      body:
        "Practicing CSS styling, specifically CSS grid by creating a spoof business page",
      image: tyrexImage,
      url: "https://erasebegin.github.io/tyrex-unsurance",
      repo: "https://github.com/erasebegin/tyrex-unsurance",
    },
  ];

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Typography
        component="h1"
        variant="h4"
        align="center"
        color="textSecondary"
        className={classes.heading}
        gutterBottom
      >
        Minor Projects
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
                  title="Image title"
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
                  href={card.repo}
                  rel="noopener noferrer"
                  target="_blank"
                  className={classes.link}
                >
                  <Button size="small" color="primary">
                    Repo
                  </Button>
                </a>
                <a
                  href={card.url}
                  rel="noopener noferrer"
                  target="_blank"
                  className={classes.link}
                >
                  <Button size="small" color="primary">
                    Demo
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
