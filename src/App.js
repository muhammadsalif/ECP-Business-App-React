import React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Animation from "./components/Animation";
import NavigationBar from "./components/NavigationBar";
import Text from "./components/Text";
import RightDrawer from "./components/Drawer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100%",
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
      {/* <CssBaseline /> */}
      {/* <Container
        style={{
          // height: "100vh",
          // border: "2px solid black",
          flexWrap: "wrap",
          // overflow: "hidden",
          padding: "0px",
        }}
        // maxWidth="sm"
      > */}
      {/* <div component="div" className={classes.root}> */}
      <Grid
        container
        spacing={3}
        style={{
          width: "100%",
          // height: "100vh",
          // height: "100%",
          padding: "0px",
          margin: "0 auto",
          // border: "2px solid red",
          overflow: "hidden",
        }}
        xs={12}
        md={9}
        lg={10}
      >
        <Grid
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // paddingBottom: "100px",
            // paddingRight: "0px",
            // paddingLeft: "0px",
            // paddingTop: "10px",
            // border: "2px solid wheat",
            margin: "0px",
            padding: "0px",
            height: "20vh",
            // width: "100%",
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
            // height: "50%",
            height: "80vh",
          }}
          item
          lg={6}
          md={6}
          xs={11}
          height="100%"
        >
          <Animation></Animation>
        </Grid>
        <Grid
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
            // paddingLeft: "2rem",
            // border: "2px solid white",
            // height: "80vh",
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
      {/* </div> */}
      {/* </Container> */}
      <RightDrawer></RightDrawer>
    </React.Fragment>
  );
}
