import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useWebAnimations, { bounceInDown } from "@wellyshen/use-web-animations";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: "0px",
    borderBottom: "4px solid #000",
    // backgroundColor: "transparent",
    // border: "2px solid red",
    margin: "0px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    // color: "#E7B757",
    // fontSize: "2rem",

    // color: "white",
    fontSize: "2.5rem",
    // borderBottom: "6px solid #000",
    // borderRadius: "30%",
    cursor: "pointer",
    transition: "0.3s linear",
    "&:hover": {
      // backgroundColor: "red",
      transform: "scale(1.05)",
    },
  },
  appbar: {
    backgroundColor: "transparent",
  },
  toolbar: {
    backgroundColor: "transparent",
    color: "white",
    // border: "2px solid red",
  },
}));

export default function NavigationBar() {
  const classes = useStyles();

  const { ref } = useWebAnimations({
    ...bounceInDown,
  });

  return (
    <div className={classes.root}>
      {/* <AppBar ref={ref} position="static" className={classes.appbar}> */}
      <Toolbar ref={ref} className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>
          Business Technologies
        </Typography>
        <Button
          style={{
            fontSize: "1.2rem",
            padding: "2px 15px 2px 15px",

            transition: "0.3s linear",
          }}
          color="inherit"
        >
          Home
        </Button>
        <Button
          style={{ fontSize: "1.2rem", padding: "2px 15px 2px 15px" }}
          color="inherit"
        >
          About Us
        </Button>
        <Button
          style={{ fontSize: "1.2rem", padding: "2px 15px 2px 15px" }}
          color="inherit"
        >
          Services
        </Button>
        <Button
          style={{ fontSize: "1.2rem", padding: "2px 15px 2px 15px" }}
          color="inherit"
        >
          Career
        </Button>
        <Button
          style={{ fontSize: "1.2rem", padding: "2px 15px 2px 15px" }}
          color="inherit"
        >
          Contact
        </Button>
      </Toolbar>
      {/* </AppBar> */}
    </div>
  );
}
