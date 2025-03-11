import React, { useState } from "react";
import { Layout } from "antd";
import Menu from "./Menu";
import Header from "./Header";
import User from "./User";
import Content from "./Content";
import Footer from "./Footer";
const { Sider } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <User /> {/* 左侧顶部登录名称 */}
        <Menu /> {/* 左侧菜单栏 */}
      </Sider>
      <Layout>
        <Header /> {/* 右侧头部 */}
        <Content /> {/* 右侧中间内容 */}
        <Footer /> {/*右侧底部*/}
      </Layout>
    </Layout>
  );
};
export default App;
