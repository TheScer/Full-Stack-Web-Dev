import React from "react";
import MenuItem from "./MenuItem";
import { useState } from "react";

function MenuList(props) {
  return (
    <div>
      <ul>
        {props.menuItems.map((item) => (
          <MenuItem
            removeHandler={props.removeHandler}
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
          />
        ))}
      </ul>
    </div>
  );
}

export default MenuList;
