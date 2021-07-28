import React, { Component } from "react";
import { renderData } from "@ysyp/ui";
import data from "./index.data";

export default class Index extends Component {
  render() {
    return <>{data.map((v) => renderData(v))}</>;
  }
}
