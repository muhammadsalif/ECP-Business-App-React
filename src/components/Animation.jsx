import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";

function Animation({ gif, type }) {
  const { ref } = useWebAnimations({
    ...type,
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
