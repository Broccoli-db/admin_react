//浏览器兼容
import "react-app-polyfill/stable";
import "react-app-polyfill/ie11";
import "react-app-polyfill/ie9";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import "dayjs/locale/zh-cn";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store"; //引入store文件
import "./index.scss";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            Layout: "#00b96b",
            algorithm: true, // 启用算法
          },
          Input: {
            colorPrimary: "#eb2f96",
            algorithm: true, // 启用算法
          },
        },
      }}
      locale={zhCN}
    >
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </ConfigProvider>
  </>
);
// 测试代理
// fetch("/jian/subscriptions/recommended_collections")
//   .then((res) => res.json())
//   .then((res) => console.log(res));
// fetch("/zhi/news/latest")
//   .then((res) => res.json())
//   .then((res) => console.log(res));
