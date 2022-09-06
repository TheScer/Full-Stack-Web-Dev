import { useState } from "react";

const MenuItem = (props) => {
  const clickHandler = () => {
    console.log("clicked in menuitem");
    props.removeHandler(props.id);
  };
  return (
    <div>
      <p>
        {props.name} {props.price}
      </p>
      <button onClick={clickHandler}>Delete</button>
    </div>
  );
};

export default MenuItem;
