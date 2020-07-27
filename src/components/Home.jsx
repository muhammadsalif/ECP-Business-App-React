import React from "react";

import gif from "../images/ECP_Business.gif";
import Animation from "./Animation";
import Text from "./Text";
import Grid from "@material-ui/core/Grid";
import { bounceInRight, bounceInLeft } from "@wellyshen/use-web-animations";

function Home() {
  const text =
    "Scalable extended business office services Staff Augmentation Innovative    and intelligent technology solutions and services Product Management    Customized solutions to meet the needs of the changing market";

  return (
    <>
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
        <Text paragraph={text} type={bounceInRight}></Text>
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
        <Animation gif={gif} type={bounceInLeft}></Animation>
      </Grid>
    </>
  );
}

export default Home;
