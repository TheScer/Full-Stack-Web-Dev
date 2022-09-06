import React from "react";

function Country(props) {
  return (
    <div>
      <p>Country: {props.name}</p>
      <p>Capital: {props.capital}</p>
      <br />
    </div>
  );
}

export default Country;
