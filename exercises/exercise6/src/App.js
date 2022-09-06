import MenuItem from "./components/MenuItem";
import "./Menu.css";
//import AddItem from "./components/AddItem";
import { useState } from "react";
import AddItem from "./components/AddItem";

const menu = [
  {
    id: 1,
    name: "hamburger",
    price: 9,
  },
  {
    id: 2,
    name: "pizza",
    price: 12,
  },
  {
    id: 3,
    name: "meatballs",
    price: 10,
  },
];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);

  // const removeHandler = () => {
  //   console.log('clicked on app.js')
  // }

  const removeHandler = (id) => {
    console.log("Clicked " + id);
    setMenuItems((prevMenuItems) =>
      prevMenuItems.filter((item) => {
        return item.id !== id;
      })
    );
  };

  return (
    <div className="menu">
      <h1>Scer's Bistro</h1>
      <ul>
        {menuItems.map((item) => (
          <MenuItem
            removeHandler={removeHandler}
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
          />
        ))}
      </ul>
      <div>
        <AddItem setMenuItems={setMenuItems} />
      </div>
    </div>
  );
};

export default App;
