import { useState } from "react";
/*
  设置根节点字体大小
*/
export const setRootFontSize = () => {
  const resizeObserver = new ResizeObserver((entries) => {
    requestAnimationFrame(() => {
      for (let entry of entries) {
        const { width } = entry.contentRect;
        document.documentElement.style.fontSize = `${width / 100}px`;
      }
    });
  });
  return resizeObserver.observe(document.body);
};
/*
  二次封装useState
*/
export const useAllState = (val) => {
  let [state, setState] = useState(() => {
    return typeof val === "function" ? val() : val;
  });
  const setObjState = (newVal) => {
    if (typeof newVal === "function") {
      newVal = newVal(state);
    }
    setState((pre) => {
      if (Object.prototype.toString.call(newVal).includes("Object")) {
        return { ...pre, ...newVal };
      } else {
        return newVal;
      }
    });
  };
  return [state, setObjState];
};
