import React from "react";
import { Link } from "react-router-dom";
import {
  FormControl,
  Input,
  InputLabel,
  TextareaAutosize,
  Typography,
  Button,
  Card,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import useWidth from "./hooks/UseWidth";

export default function Contact() {
  const isMobile = useWidth();

  const inputProps = {
    rowsMin: 4,
  };

  const styles = {
    title: {
      color: "white",
    },
    container: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      maxWidth: isMobile ? "90vw" : "60vw",
      minWidth: "30vw",
      margin: "auto",
      marginTop: "20vh",
      padding: "2em",
      background: "#fdc500",
    },
    field: {
      width: isMobile ? 250 : 400,
      marginBottom: "2em",
    },
    area: {
      minHeight: "15vh",
      maxHeight: 300,
      width: isMobile ? 250 : 400,
      marginBottom: "2em",
      background: "#FFFBEB",
    },
    button: { maxWidth: "20%", background: "#00509d" },
    label: {
      color: "white",
    },
    backButton: {
      position: "absolute",
      top: 0,
      left: 0,
      margin: "2em 2em",
    },
  };

  return (
    <>
      <Link to="/">
        <Button
          color="primary"
          style={{ ...styles.button, ...styles.backButton }}
          variant="contained"
        >
          <ArrowBackIcon />
          Back
        </Button>
      </Link>
      <form action="https://formspree.io/f/meqpkeej" method="POST">
        <Card style={styles.container}>
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            style={styles.title}
          >
            Contact
          </Typography>
          <FormControl>
            <InputLabel htmlFor="name-input" style={styles.label}>
              Name{" "}
            </InputLabel>
            <Input id="name-input" name="name" style={styles.field} />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="email-input" style={styles.label}>
              Email{" "}
            </InputLabel>
            <Input id="email-input" name="email" style={styles.field} />
          </FormControl>
          <FormControl>
            <TextareaAutosize
              id="message-input"
              aria-label="message"
              placeholder="Message"
              name="message"
              inputProps={inputProps}
              style={styles.area}
            />
          </FormControl>
          <Button
            color="primary"
            variant="contained"
            type="submit"
            style={styles.button}
          >
            Submit
          </Button>
        </Card>
      </form>
    </>
  );
}
