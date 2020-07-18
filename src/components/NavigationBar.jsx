import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useWebAnimations, { bounceInDown } from "@wellyshen/use-web-animations";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    border: "none",
    boxShadow: "0px",
    backgroundColor: "transparent",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#E7B757",
    fontSize: "2rem",
  },
  appbar: {
    backgroundColor: "transparent",
  },
  toolbar: {
    backgroundColor: "transparent",
  },
}));

export default function NavigationBar() {
  const classes = useStyles();

  const { ref } = useWebAnimations({
    ...bounceInDown,
  });

  return (
    <div className={classes.root}>
      <AppBar ref={ref} position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
            Business Technologies
          </Typography>
          <Button
            style={{ fontSize: "1.2rem", padding: "0 12px 0 12px" }}
            color="inherit"
          >
            Home
          </Button>
          <Button
            style={{ fontSize: "1.2rem", padding: "0 12px 0 12px" }}
            color="inherit"
          >
            About Us
          </Button>
          <Button
            style={{ fontSize: "1.2rem", padding: "0 12px 0 12px" }}
            color="inherit"
          >
            Services
          </Button>
          <Button
            style={{ fontSize: "1.2rem", padding: "0 12px 0 12px" }}
            color="inherit"
          >
            Career
          </Button>
          <Button
            style={{ fontSize: "1.2rem", padding: "0 12px 0 12px" }}
            color="inherit"
          >
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
