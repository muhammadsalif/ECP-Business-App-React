import React from "react";
import Grid from "@material-ui/core/Grid";
import Text from "./Text";
import Animation from "./Animation";
import gif from "../images/about.gif";
import { Heading } from "./Heading";

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
          // border: "2px solid white",
          height: "20vh",
        }}
        item
        xs={12}
      >
        <Heading heading="About Us"></Heading>
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
        <Text paragraph={text}></Text>
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
        <Animation gif={gif}></Animation>
      </Grid>
    </>
  );
};
