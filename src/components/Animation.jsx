import React from "react";
import animation from "../images/ECP_Business.gif";
import useWebAnimations, { bounceInLeft } from "@wellyshen/use-web-animations";

function Animation() {
  const { ref } = useWebAnimations({
    ...bounceInLeft,
  });

  return (
    <div
      style={{
        width: "100%",
        margin: "0 auto",
      }}
    >
      <img
        ref={ref}
        style={{
          width: "100%",
          //  height: "28rem",
          height: "100%",
        }}
        src={animation}
        alt="gif"
      />
    </div>
  );
}

export default Animation;
