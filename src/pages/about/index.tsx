import React, { Component } from "react";
import { RenderData } from "@ysyp/ui";
import data from "./index.data";

export default class Index extends Component {
  render() {
    return <>{data.map((v) => RenderData(v))}</>;
  }
}
