import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useWebAnimations, { bounceInDown } from "@wellyshen/use-web-animations";

import {
  Link,
  // Element,
  // Events,
  // animateScroll as scroll,
  // scrollSpy,
  // scroller,
} from "react-scroll";

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
        <Typography
          variant="h6"
          className={classes.title}
          onClick={() => (window.location.href = "/")}
        >
          Business Technologies
        </Typography>

        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
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
        </Link>
        <Link
          activeClass="active"
          to="aboutUs"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <Button
            style={{
              fontSize: "1.2rem",
              padding: "2px 15px 2px 15px",

              transition: "0.3s linear",
            }}
            color="inherit"
          >
            About Us
          </Button>
        </Link>
        <Link
          activeClass="active"
          to="services"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <Button
            style={{
              fontSize: "1.2rem",
              padding: "2px 15px 2px 15px",

              transition: "0.3s linear",
            }}
            color="inherit"
          >
            Services
          </Button>
        </Link>
        <Link
          activeClass="active"
          to="footer"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <Button
            style={{
              fontSize: "1.2rem",
              padding: "2px 15px 2px 15px",

              transition: "0.3s linear",
            }}
            color="inherit"
          >
            Contact Us
          </Button>
        </Link>
      </Toolbar>
      {/* </AppBar> */}
    </div>
  );
}
