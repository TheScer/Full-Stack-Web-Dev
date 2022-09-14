import React, { useEffect } from "react";
import "./App.css";
import CountryData from "./components/CountryData";
import Input from "./components/Input";
import { useState } from "react";

//CURRENT STATUS

function App() {
  const [country, setCountry] = useState({});
  const [list, setList] = useState([]);
  const [currentNum, setCurrentNum] = useState(0);
  const [isHidden, setIsHidden] = useState(true);

  const fetchCountryData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    const countryList = data.map((item) => {
      return {
        id: item.id,
        name: item.name.common,
        capital: item.capital,
        region: item.region,
        subregion: item.subregion,
      };
    });
    setList(countryList);
  };

  useEffect(() => {
    const randNum = (max) => {
      return Math.floor(Math.random() * max);
    };
    setCurrentNum(randNum(list.length));
  }, [country]);

  useEffect(() => {}, [isHidden]);

  const chooseCountry = () => {
    setCountry({
      name: list[currentNum].name,
      capital: list[currentNum].capital,
      region: list[currentNum].region,
      subregion: list[currentNum].subregion,
    });
    console.log(list[currentNum].capital);
    console.log(list[currentNum].region);
    setIsHidden(false);
  };

  const submitHandler = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Country Guessing Game!</h1>
        <h3>What is the capital of {country.name}?</h3>
        <br></br>

        <Input>input</Input>

        <button onClick={submitHandler}>submit</button>

        <CountryData
          name={country.name}
          capital={country.capital}
          region={country.region}
          subregion={country.subregion}
          isHidden={isHidden}
        />

        <button onClick={chooseCountry}>Choose another country</button>
      </header>
    </div>
  );
}

export default App;
