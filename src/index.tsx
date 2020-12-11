import React from "react";
import { render } from "react-dom";

import image from "./original.jpg";

export function view(text: string, id: string) {
  render(<div>{text}</div>, document.getElementById(id));
}
