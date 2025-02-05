import React, { useEffect } from "react";
import RouterView from "./router/index";
import { setRootFontSize } from "./utils";
import { KeepAliveProvider, } from "keepalive-react-component";
export default function App() {
  console.log(process.env);

  useEffect(() => {
    setRootFontSize();
  });
  return (
    <>
      <KeepAliveProvider>
        <RouterView />
      </KeepAliveProvider>
    </>
  );
}
