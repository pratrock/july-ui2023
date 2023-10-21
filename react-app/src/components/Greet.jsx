/* export function Greet() {
  return (
    <>
      <h1>Hello world</h1>
    </>
  );
} */
import React from "react";
export default function Greet() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello world")
  );
}
