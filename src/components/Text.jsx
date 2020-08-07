import React from "react";
import "fontsource-roboto";
import useWebAnimations from "@wellyshen/use-web-animations";
import { makeStyles } from "@material-ui/core/styles";
import Typist from "react-typist";

const useStyles = makeStyles((theme) => ({
  heading: {
    color: "white",
    fontSize: "2rem",
    textAlign: "left",
    letterSpacing: "1px",
    fontFamily: "Sora",
    lineHeight: "3rem",
  },
}));

function Text({ paragraph, type }) {
  const classes = useStyles();

  const { ref } = useWebAnimations({
    ...type,
  });

  return (
    <div>
      <h2 ref={ref} className={classes.heading}>
        <Typist>{paragraph}</Typist>
      </h2>
    </div>
  );
}

export default Text;
