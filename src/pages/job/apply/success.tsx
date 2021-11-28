import React, { Component } from "react";
import * as YYUI from "@ysyp/ui/dist/src/index";
import data from "./success.data";

export default class Index extends Component {
  render() {
    return (
      <>
        {data.map((v) => {
          return React.createElement(
            YYUI[v.name],
            {
              ...v.data,
            },
            null
          );
        })}
      </>
    );
  }
}
