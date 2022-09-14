import { React, useState, useEffect } from "react";

function CountryData(props) {
  // useEffect(() => {

  // }, [props.isHidden]);

  return (
    <div>
      {props.isHidden && (
        <ul>
          <legend>info for {props.name}</legend>
          <br></br>
          <li>capital: {props.capital}</li>
          <li>region: {props.region}</li>
          <li>subregion: {props.subregion}</li>
          <li></li>
        </ul>
      )}
    </div>
  );
}

export default CountryData;
