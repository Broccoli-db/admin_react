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
/**
* 参数处理
* @param {*} params  参数
*/
export function tansParams(params) {
  let result = ''
  for (const propName of Object.keys(params)) {
    const value = params[propName];
    var part = encodeURIComponent(propName) + "=";
    if (value !== null && value !== "" && typeof (value) !== "undefined") {
      if (typeof value === 'object') {
        for (const key of Object.keys(value)) {
          if (value[key] !== null && value[key] !== "" && typeof (value[key]) !== 'undefined') {
            let params = propName + '[' + key + ']';
            var subPart = encodeURIComponent(params) + "=";
            result += subPart + encodeURIComponent(value[key]) + "&";
          }
        }
      } else {
        result += part + encodeURIComponent(value) + "&";
      }
    }
  }
  return result
}
export const errorCode = {
  '401': '认证失败，无法访问系统资源',
  '403': '当前操作没有权限',
  '404': '访问资源不存在',
  'default': '系统未知错误，请反馈给管理员'
}
const sessionCache = {
  set(key, value) {
    if (!sessionStorage) {
      return
    }
    if (key != null && value != null) {
      sessionStorage.setItem(key, value)
    }
  },
  get(key) {
    if (!sessionStorage) {
      return null
    }
    if (key == null) {
      return null
    }
    return sessionStorage.getItem(key)
  },
  setJSON(key, jsonValue) {
    if (jsonValue != null) {
      this.set(key, JSON.stringify(jsonValue))
    }
  },
  getJSON(key) {
    const value = this.get(key)
    if (value != null) {
      return JSON.parse(value)
    }
    return null
  },
  remove(key) {
    sessionStorage.removeItem(key);
  }
}
const localCache = {
  set(key, value) {
    if (!localStorage) {
      return
    }
    if (key != null && value != null) {
      localStorage.setItem(key, value)
    }
  },
  get(key) {
    if (!localStorage) {
      return null
    }
    if (key == null) {
      return null
    }
    return localStorage.getItem(key)
  },
  setJSON(key, jsonValue) {
    if (jsonValue != null) {
      this.set(key, JSON.stringify(jsonValue))
    }
  },
  getJSON(key) {
    const value = this.get(key)
    if (value != null) {
      return JSON.parse(value)
    }
    return null
  },
  remove(key) {
    localStorage.removeItem(key);
  }
}
export const cache = {
  /**
   * 会话级缓存
   */
  session: sessionCache,
  /**
   * 本地缓存
   */
  local: localCache
}