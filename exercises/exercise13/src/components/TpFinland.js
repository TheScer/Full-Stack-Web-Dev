import React from "react";
import { useHistory } from "react-router-dom";

function TpFinland() {
  const history = useHistory();

  const pushHandler = () => {
    history.push("/");
  };

  return (
    <div>
      <button onClick={pushHandler}>Back to Hel!</button>
    </div>
  );
}

export default TpFinland;
