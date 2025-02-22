import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import sty from "./index.module.scss";
export default function Index() {
  const leftTop = useRef(null);
  const leftBottom = useRef(null);
  let myChart;
  var option;
  option = {
    title: {
      text: "",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Email",
        type: "line",
        stack: "Total",
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: "Union Ads",
        type: "line",
        stack: "Total",
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: "Video Ads",
        type: "line",
        stack: "Total",
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: "Direct",
        type: "line",
        stack: "Total",
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: "Search Engine",
        type: "line",
        stack: "Total",
        data: [820, 932, 901, 934, 1290, 1330, 1320],
      },
    ],
  };
  useEffect(() => {
    myChart = echarts.init(leftTop.current);
    option && myChart.setOption(option);
  });
  window.onresize = function () {
    // myChart.dispose();
    myChart.resize();
    // echarts.init(leftTop.current);
    // myChart.setOption(option);
  };
  return (
    <>
      <div className={sty.box}>
        {/* 标题 */}
        <div className={sty.title}>可 视 化 大 屏</div>
        {/* 内容 */}
        <div className={sty.content}>
          {/* 左侧图标 */}
          <div className={sty.left}>
            <div className={sty.leftTop} id="leftTop" ref={leftTop}></div>
            <div
              className={sty.leftBottom}
              id="leftBottom"
              ref={leftBottom}
            ></div>
          </div>
          {/* 中间地图 */}
          <div className={sty.middle}></div>
          {/* 右侧图标 */}
          <div className={sty.right}></div>
        </div>
      </div>
    </>
  );
}
