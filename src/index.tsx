import React from "react";
import { render } from "react-dom";

import image from "./original.jpg";

render(
  <div style={{ height: "90vh", border: "solid 4px gold" }}>
    <img
      style={{ width: "100%", height: "100%", display: "block" }}
      src={image}
      alt="oval"
    />
  </div>,
  // eslint-disable-next-line no-undef
  document.getElementById("root")
);
