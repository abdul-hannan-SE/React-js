import React from "react";
import useVariable from "../context/variableContext";

function Test() {
  const variable = useVariable();

  return (
    <>
      <div>Variable value is : {variable.variable}</div>
      <button onClick={variable.changeName}>click</button>
    </>
  );
}

export default Test;
