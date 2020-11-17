import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import { useStyles } from "../useStyles";
import ImageModal from "./ImageModal";

import soulstaminaScrn from "../media/screenshot-soulstamina.png";
import otherworldScrn from "../media/screenshot-otherworld.png";
import commentScrn from "../media/screenshot-commentgen.png";

export default function FlagshipCards() {
  const classes = useStyles();

  const [modalOpen, setModalOpen] = useState(false);
  const [current, setCurrent] = useState(null);

  const openModal = (index) => {
    setCurrent(cards[index]);
    setModalOpen(true);
  };

  const cards = [
    {
      title: "Soulstamina",
      descShort: "Ecommerce platform for artist Soulstamina",
      descFull: [
        "Generated using Gatsby static site generator",
        "Used Bulma CSS framework as a foundation",
        "Most styles are custom made with Styled Components",
        "Data sourced from Contentful headless CMS using graphql for queries",
        "Cart and checkout system provided by Snipcart",
      ],
      url: "https://www.soulstamina.shop",
      repo: "https://github.com/erasebegin/soulstamina-shop",
      image: soulstaminaScrn,
    },
    {
      title: "Otherworld",
      descShort:
        "Blog, portfolio and e-commerce platform for artist Otherworld Comics",
      descFull: [
        "Generated using Gatsby static site generator",
        "Combination of Bootstrap and custom CSS",
        "Previously had Paypal integration which has switched to Snipcart",
        "React Rellax used for parallax effect",
        "Custom pagination system",
        "Note: shop section currently undergoing changes",
      ],
      url: "https://www.otherworldink.com",
      repo: "https://github.com/erasebegin/otherworld-ink",
      image: otherworldScrn,
    },
    {
      title: "Comment Generator",
      descShort:
        "What started out as a very basic tool for storing and copying student comments has developed in to a fully-fledged web app",
      descFull: [
        "Back end server created using NodeJS and Express",
        "MongoDB and Mongoose for database",
        "Deployed to Heroku",
        "Front end is vanilla React app",
        "Includes React Router, localStorage caching and clipboard management",
      ],
      url: "https://comment-generator-915.netlify.app",
      repo: "https://gitlab.com/erasebegin/comment-generator",
      image: commentScrn,
    },
  ];

  return (
    <Container
      className={(classes.cardGrid, classes.flagshipGrid)}
      maxWidth="md"
    >
      {/* IMAGE MODAL */}

      <ImageModal
        isOpen={modalOpen}
        current={current}
        closeModal={() => setModalOpen(false)}
      />
      
      {/* TITLE */}
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

      {/* CARDS */}
      <Grid container spacing={4}>
        {cards.map((card, index) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={card.image}
                title={card.title}
                onClick={() => openModal(index)}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {card.title}
                </Typography>
                <Typography>{card.descShort}</Typography>
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
                <Button
                  size="small"
                  color="primary"
                  onClick={() => openModal(index)}
                >
                  More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
