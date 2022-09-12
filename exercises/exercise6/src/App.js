import MenuItem from "./components/MenuItem";
import "./Menu.css";
import { useState } from "react";
import AddItem from "./components/AddItem";
import MenuList from "./components/MenuList";

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
      <MenuList
        menu={menu}
        removeHandler={removeHandler}
        menuItems={menuItems}
      />

      <div>
        <AddItem setMenuItems={setMenuItems} />
      </div>
    </div>
  );
};

export default App;
