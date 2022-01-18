import React from "react";

const TitleRender = ({ router }) => {
  return (
    <title>
      {router.pathname === "/"
        ? "Carnet"
        : router.pathname.substring(1).charAt(0).toUpperCase() +
          router.pathname.slice(2).replace(/(-)/g, " ") +
          "| test"}
    </title>
  );
};

export default TitleRender;
