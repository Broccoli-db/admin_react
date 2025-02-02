import React from "react";
import { Breadcrumb, Layout } from "antd";
import { Outlet } from "react-router-dom";
import sty from "./index.module.scss";
export default function Index() {
  const { Content } = Layout;
  return (
    <>
      <Content className={sty.box}>
        {/* 面包屑 */}
        <Breadcrumb className={sty.crumbs} items={[]}></Breadcrumb>
        {/* 子路由 */}
        <div className={sty.content}>
          <Outlet />
        </div>
      </Content>
    </>
  );
}
