import React, { useState, memo, useEffect } from "react";
import { Button } from "antd";
function Index() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);
  useEffect(() => {
    console.log(123);
  });
  return (
    <div>
      我是父组件
      <Button onClick={() => setCount(count + 1)}>点击</Button>
      <Button onClick={() => setNum(num + 1)}>点击</Button>
      <Child count={count} num={num} />
    </div>
  );
}
const fn = (prevProps, nextProps) => {
  console.log(prevProps, nextProps);
  return prevProps.count === nextProps.count;
};
const Child = memo(() => {
  console.log(123);
  return <div>我是子组件</div>;
}, fn);

export default Index;
