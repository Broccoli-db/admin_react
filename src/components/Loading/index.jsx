import React from "react";
import { Spin } from "antd";
import sty from "./index.module.scss";
export default function Index(props) {
  let { width = "100vw", height = "100vh" } = props;
  return (
    <div className={sty.box} style={{ width: width, height: height }}>
      <Spin size="large" />
    </div>
  );
}
