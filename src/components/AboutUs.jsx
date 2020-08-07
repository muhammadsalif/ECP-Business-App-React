import React from "react";
import Grid from "@material-ui/core/Grid";
import Text from "./Text";
import Animation from "./Animation";
import gif from "../images/about.gif";
import { Heading } from "./Heading";

import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "@wellyshen/use-web-animations";

export const AboutUs = () => {
  const text =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus distinctio veritatis, iure quos dolores sit libero est tempore nam earum saepe! Quibusdam commodi unde tempore";

  return (
    <>
      {" "}
      <Grid
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "4rem 0",
          // border: "2px solid white",
          // height: "20vh",
        }}
        item
        xs={12}
        id="aboutUs"
      >
        <Heading heading="About Us" type={fadeInUp}></Heading>
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
          padding: "3rem 0",
          // height: "80vh",
        }}
        item
        lg={6}
        md={6}
        xs={11}
      >
        <Text paragraph={text} type={fadeInLeft}></Text>
      </Grid>
      <Grid
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          // border: "2px dotted orange",
          // height: "80vh",
          padding: "3rem 0",
        }}
        item
        lg={6}
        md={6}
        xs={11}
      >
        <Animation gif={gif} type={fadeInRight}></Animation>
      </Grid>
    </>
  );
};
