import React from "react";

const ColorfullMessage = (props) => {
  const { color, children } = props;
  const contetStyle = {
    color,
    fontSize: "18px"
  };

  return <p style={contetStyle}>{children}</p>;
};

export default ColorfullMessage;
