// 配置路由
import { Navigate } from "react-router-dom";
import { lazy } from "react";
import {
  HomeOutlined,
  BarChartOutlined,
  ClusterOutlined,
} from "@ant-design/icons";
import { withKeepAlive } from "keepalive-react-component";
// 模拟权限
const auth = ["角色管理"];

const allDynamicRoute = [
  {
    path: "/layout/home",
    name: "首页",
    element: withKeepAlive(
      lazy(() => import("../views/Home/index.jsx")),
      { cacheId: "home", scroll: true }
    ),
    Icon: () => <HomeOutlined />,
    meta: {},
  },
  {
    path: "/layout/data",
    name: "数据列表",
    element: lazy(() => import("../views/DataList/index.jsx")),
    Icon: () => <BarChartOutlined />,
    meta: {},
  },
  {
    path: "/layout/permissions",
    name: "权限管理",
    element: lazy(() => import("../views/Permissions/index.jsx")),
    Icon: () => <ClusterOutlined />,
    meta: {},
    children: [
      {
        path: "/layout/permissions/role",
        name: "角色管理",
        element: lazy(() => import("../views/Permissions/Role")),
        Icon: () => <ClusterOutlined />,
        meta: {},
      },
      {
        path: "/layout/permissions/menu",
        name: "菜单管理",
        element: lazy(() => import("../views/Permissions/Menu")),
        Icon: () => <ClusterOutlined />,
        meta: {},
      },
    ],
  },
];
const routeFiltering = (routerArr) => {
  if (!Array.isArray(routerArr)) return routerArr;
  let arr = routerArr.filter((item) => {
    if (item.children) {
      item.children = routeFiltering(item.children);
    }
    return !auth.includes(item.name);
  });
  return arr;
};
export const dynamicRoute = routeFiltering(allDynamicRoute);
const routers = [
  {
    path: "/",
    element: () => <Navigate to="/login" />,
  },
  {
    path: "/login",
    name: "Login",
    element: lazy(() => import("../views/Login.jsx")),
  },
  {
    path: "/largeScreen",
    name: "LargeScreen",
    element: lazy(() => import("../views/LargeScreen/index.jsx")),
  },
  {
    path: "/layout",
    name: "Layout",
    element: lazy(() => import("@/components/Layout/index.jsx")),
    children: [
      {
        path: "/layout",
        element: () => <Navigate to="/layout/home" />,
      },
      ...dynamicRoute,
    ],
  },
];
export default routers;
