import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

// Material Ui icons
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    boxShadow: "none",
    borderBottom: "4px solid black",
    paddingBottom: "0.5rem",
    width: "100%",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        // className="border"
        style={{ height: "40vh", width: "80%", margin: "0 auto" }}
        id="footer"
      >
        {/*  */}
        <Grid
          item
          xs={12}
          sm={6}
          lg={8}
          style={{
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // border: "2px solid orange",
          }}
        >
          <Paper className={classes.paper}>
            <InstagramIcon
              style={{
                fontSize: "2rem",
                cursor: "pointer",
                color: "white",
              }}
            ></InstagramIcon>
            <FacebookIcon
              style={{
                fontSize: "2rem",
                cursor: "pointer",
                color: "white",
              }}
            ></FacebookIcon>
            <WhatsAppIcon
              style={{
                fontSize: "2rem",
                cursor: "pointer",
                color: "white",
              }}
            ></WhatsAppIcon>
            <TwitterIcon
              style={{
                fontSize: "2rem",
                cursor: "pointer",
                color: "white",
              }}
            ></TwitterIcon>
          </Paper>
        </Grid>

        {/* Second Item of grid */}
        <Grid
          item
          xs={12}
          sm={6}
          lg={8}
          style={{
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // border: "2px solid orange",
          }}
        >
          <span>
            <h6
              style={{
                color: "white",
                fontSize: "1rem",
                letterSpacing: "2px",
                fontWeight: "normal",
              }}
            >
              Copyright &copy; 2020 Technology Pakistan, Inc. All rights
              reserved.
            </h6>
          </span>
        </Grid>
      </Grid>
    </>
  );
}
