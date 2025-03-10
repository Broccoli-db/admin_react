import React, { useEffect, useState } from "react";
import RouterView from "./router/index";
import { setRootFontSize } from "./utils";
import { KeepAliveProvider } from "keepalive-react-component";
import { ContextProvider } from "./context";
export default function App() {
  useEffect(() => {
    setRootFontSize();
    setRemUnit();
    window.addEventListener("resize", setRemUnit);
    return () => {
      window.removeEventListener("resize", setRemUnit);
    };
  }, []);
  const [widthNum, setWidthNum] = useState(0);
  const setRemUnit = () => {
    const docEl = document.documentElement;
    const width = docEl.clientWidth;
    // const height = docEl.clientHeight;
    // Math.min(width, height) / 100; // 将视口宽度的1/100作为根字体大小
    setWidthNum(width / 100);
  };
  return (
    <>
      <KeepAliveProvider>
        <ContextProvider.Provider value={{ widthNum }}>
          <RouterView />
        </ContextProvider.Provider>
      </KeepAliveProvider>
    </>
  );
}
