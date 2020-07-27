import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";

export const Heading = ({ heading, type }) => {
  const { ref } = useWebAnimations({
    ...type,
  });

  return (
    <h1
      ref={ref}
      style={{
        color: "white",
        fontSize: "2.5rem",
        borderBottom: "6px solid #3CAEFE",
        borderRadius: "30%",
      }}
    >
      {heading}
    </h1>
  );
};
