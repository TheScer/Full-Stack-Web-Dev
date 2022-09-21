import React from "react";
import { useState, useEffect, useRef } from "react";

const MenuUpdater = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const textRef = useRef("");
  const numRef = useRef(0);
  const descriptionRef = useRef("");

  const addMenuItemHandler = async (item) => {
    console.log(item);
    const response = await fetch(
      //HAVE TO ADD TABLE-NAME.JSON AT THE END OF THE FIREBASE ADDRESS
      "https://restaurantwebsite-d1b6a-default-rtdb.europe-west1.firebasedatabase.app/",
      {
        method: "Post",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const item = {
    name: textRef.current.value,
    cost: numRef.current.value,
    description: descriptionRef.current.value,
  };

  return (
    <div>
      <h1>MenuUpdater</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">item name: </label>
          <textarea rows="1" id="name" ref={textRef}></textarea>
        </div>
        <div>
          <label htmlFor="cost">item cost: </label>
          <textarea rows="1" id="cost" ref={numRef}></textarea>
        </div>
        <div>
          <label htmlFor="description">item description: </label>
          <textarea rows="3" id="description" ref={descriptionRef}></textarea>
        </div>
        <button onClick={addMenuItemHandler(item)}>Add Menu Item</button>
      </form>
    </div>
  );
};

export default MenuUpdater;
