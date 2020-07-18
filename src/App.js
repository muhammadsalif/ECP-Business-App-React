import React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Animation from "./components/Animation";
import NavigationBar from "./components/NavigationBar";
import Text from "./components/Text";

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
      <CssBaseline />
      <Container
        style={{
          height: "100vh",
        }}
      >
        <div component="div" className={classes.root}>
          <Grid
            container
            spacing={3}
            style={{
              width: "100%",
              height: "100%",
              margin: "0 auto",
            }}
          >
            <Grid
              style={{
                height: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0px",
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
              }}
              item
              lg={6}
              md={6}
              xs={8}
            >
              <Animation></Animation>
            </Grid>
            <Grid
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 auto",
                paddingLeft: "2rem",
              }}
              item
              lg={6}
              md={6}
              xs={8}
            >
              <Text></Text>
            </Grid>
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
}
