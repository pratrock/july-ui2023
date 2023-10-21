import React from "react";

export const Header = ({ children }) => {
  console.log(children);
  return <div>{children.type == "button" ? children : "nothing"}</div>;
};
