import React from "react";
import "fontsource-roboto";
import useWebAnimations, { bounceInRight } from "@wellyshen/use-web-animations";
import { makeStyles } from "@material-ui/core/styles";

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

function Text({ paragraph }) {
  const classes = useStyles();

  const { ref } = useWebAnimations({
    ...bounceInRight,
  });

  return (
    <div>
      <h2 ref={ref} className={classes.heading}>
        {paragraph}
      </h2>
    </div>
  );
}

export default Text;
