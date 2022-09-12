import React from "react";

function Counter(props) {

  const counter = () => {
    console.log("clicked");
    props.setCount((x) => x + 1);
    return props.count;
  };
  return (
    <div>
      <button onClick={counter}>other button was clicked {props.count}</button>
    </div>
  );
}

export default Counter;
