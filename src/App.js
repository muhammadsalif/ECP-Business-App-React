import React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
// import RightDrawer from "./components/Drawer";
import { AboutUs } from "./components/AboutUs";
import Services from "./components/Services";
import Footer from "./components/Footer";

import { animateScroll as scroll } from "react-scroll";
import Button from "@material-ui/core/Button";

function scrollToTop() {
  scroll.scrollToTop();
}

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

          <Home></Home>
          <AboutUs></AboutUs>
          <Services></Services>
        </Grid>
      </Container>
      <Footer></Footer>
      <Button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          right: "10px",
          bottom: "10px",
          borderRadius: "3rem",
          backgroundColor: "#212733",
          color: "white",
          // scrollBehavior: "smooth",
        }}
      >
        <ExpandLessIcon
          style={{
            fontSize: "2rem",
          }}
        ></ExpandLessIcon>
      </Button>
    </React.Fragment>
  );
}
