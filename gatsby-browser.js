import React from "react";
import { MenuProvider } from "./src/components/MenuContext";

export function wrapRootElement({ element }) {
  return <MenuProvider>{element}</MenuProvider>;
}
