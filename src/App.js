import React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Animation from "./components/Animation";
import NavigationBar from "./components/NavigationBar";
import Text from "./components/Text";
// import RightDrawer from "./components/Drawer";

const useStyles = makeStyles((theme) => ({
  root: {
    // border: "2px solid black",
    padding: "0px",

    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
    [theme.breakpoints.up("md")]: {
      width: "90%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "80%",
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "0px",
    backgroundColor: "transparent",
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.root}>
        <Grid
          container
          spacing={3}
          style={{
            width: "100%",
            padding: "0px",
            margin: "0 auto",
            // border: "2px solid red",
            overflow: "hidden",
          }}
        >
          <Grid
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // border: "2px solid wheat",
              margin: "0px",
              padding: "0px",
              height: "20vh",
            }}
            item
            xs={12}
          >
            <NavigationBar></NavigationBar>
          </Grid>
          <Grid
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 auto",
              // border: "2px solid orange",
              padding: "0px",
              height: "80vh",
            }}
            item
            lg={6}
            md={6}
            xs={11}
          >
            <Animation></Animation>
          </Grid>
          <Grid
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 auto",
              // border: "2px solid white",
              flexWrap: "wrap",
              overflowWrap: "break-word",
            }}
            item
            lg={6}
            md={6}
            xs={11}
          >
            <Text></Text>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
