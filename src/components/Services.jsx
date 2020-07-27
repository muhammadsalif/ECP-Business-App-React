import React from "react";

import Grid from "@material-ui/core/Grid";
import Text from "./Text";
import Animation from "./Animation";
import gif from "../images/services.gif";
import { Heading } from "./Heading";

import {
  fadeInLeft,
  fadeInRight,
  bounceInDown,
} from "@wellyshen/use-web-animations";

function Services() {
  const text =
    "Lorem ipsum dolor sit, Doloribus distinctio veritatis, iure quos dolores sit libero est tempore nam earum saepe!";
  return (
    <>
      {" "}
      <Grid
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // border: "2px solid white",
          height: "20vh",
        }}
        item
        xs={12}
      >
        <Heading heading="Services" type={bounceInDown}></Heading>
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
          height: "80vh",
        }}
        item
        lg={6}
        md={6}
        xs={11}
      >
        <Animation gif={gif} type={fadeInLeft}></Animation>
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
        <Text paragraph={text} type={fadeInRight}></Text>
      </Grid>
    </>
  );
}

export default Services;
