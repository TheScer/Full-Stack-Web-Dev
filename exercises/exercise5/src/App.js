import "./App.css";
import Country from "./components/Country";

const countries = [
  {
    name: "Djibouti",
    capital: "Djibouti City",
  },
  {
    name: "Thailand",
    capital: "Bangkok",
  },
];

function App() {
  return (
    <div className="App">
      <header>
        <p>Oscar Hero Exercise 5</p>
        <br />
        <div>
          <Country name={countries[0].name} capital={countries[0].capital} />
          <Country name={countries[1].name} capital={countries[1].capital} />
        </div>
      </header>
    </div>
  );
}

export default App;
