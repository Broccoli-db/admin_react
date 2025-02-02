import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;

export default function Index() {
  return (
    <>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        我是底部
      </Footer>
    </>
  );
}
