import React from "react";
import loader from "../../assets/loader.svg";

export function Loader() {
  return <img src={loader} style={{ width: "150px", marginInline: "auto" }} />;
}
