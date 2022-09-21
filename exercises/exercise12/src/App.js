// import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import AddPerson from "./components/AddPerson";

function App() {
  const [persons, setPersons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //need to add a person in the AddPerson component (added to the state)
  const addPersonHandler = async (person) => {
    console.log(person);
    const response = await fetch(
      "https://famouspersondisplay2-default-rtdb.europe-west1.firebasedatabase.app/persons.json",
      {
        method: "Post",
        body: JSON.stringify(person),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };
  //then, that object needs to be added to the database
  //then, we can fetch all of that data from the database
  //put the database data into the person list
  //loop through the person list to display the data

  return (
    <div className="App">
      <header className="App-header">
        {" "}
        <AddPerson onAddPerson={addPersonHandler} />
      </header>
    </div>
  );
}

export default App;
