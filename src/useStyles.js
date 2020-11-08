import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
    margin: "1em 0",
  },
  heading: {
    color: "white",
    marginBottom: "1em",
  },
  appBar: {
    background: "#F1FFFA",
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    background: "#00509d",
  },
  flagshipGrid: {
    background: "#00296b",
    padding: "2em",
    marginBottom: "3em",
  },
  illustrationGrid: {
    background: "#fdc500",
    padding: "2em",
    marginTop: "3em",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    cursor: "pointer",
  },
  cardContent: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  footerIcons: {
    fontSize: "2rem",
    color: "#00296b",
    marginLeft: ".5em"
  },
  footerText: {
    color: "#00296b",
    display: "flex",
    alignItems: "center",
    gap: ".5em",
    justifyContent: "center",
  },
}));
