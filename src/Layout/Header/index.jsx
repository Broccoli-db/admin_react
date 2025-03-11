import React from "react";
import { Layout } from "antd";
import sty from "./index.module.scss";
export default function Index() {
  const { Header } = Layout;
  return (
    <>
      <Header className={sty.box}>我是头部</Header>
    </>
  );
}
