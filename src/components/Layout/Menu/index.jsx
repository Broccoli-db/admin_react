import React, { useMemo } from "react";
import { Menu } from "antd";
import { dynamicRoute } from "@/router/routers";
import { useNavigate, useLocation } from "react-router-dom";
export default function Index() {
  console.log(useLocation());

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const items = useMemo(() => {
    const getItem = (name, path, icon, children) => ({
      label: name,
      key: path,
      icon,
      children,
    });
    const transformMenu = (items) =>
      items.map((item) => {
        let { name, path, Icon, children } = item;
        return getItem(
          name,
          path,
          <Icon />,
          children && children.length ? transformMenu(children) : null
        );
      });
    return transformMenu(dynamicRoute);
  }, []);
  // 点击菜单
  const clickTheMenu = ({ item, key, keyPath, selectedKeys, domEvent }) => {
    console.log(item, key, keyPath, selectedKeys, domEvent);
    navigate(key, { replace: true });
  };
  return (
    <>
      <Menu
        theme="dark"
        defaultSelectedKeys={pathname}
        mode="inline"
        items={items}
        onSelect={clickTheMenu}
      />
    </>
  );
}
