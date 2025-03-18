import React from "react";

function A(props) {
  let { children } = props
  return <> { children }</>
}
function B() { }
function Index() {
  return <A>Data</A>;
}
export default Index;