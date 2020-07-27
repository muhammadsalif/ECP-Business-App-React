import React from "react";
import useWebAnimations, { bounceInLeft } from "@wellyshen/use-web-animations";

function Animation({ gif }) {
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
          height: "100%",
          // backgroundColor: "red",
        }}
        src={gif}
        alt="gif"
      />
    </div>
  );
}

export default Animation;
