import React from "react";
import { Switch } from "@material-ui/core/";

function Switches() {
  const getValue = (e, val) => {
    //in parameter if we pass only 'e' then in console.log we have to take 'e.target.value'
    console.log(val);
  };
  return (
    <div>
      <h3>Switch</h3>
      <span>Small: </span>
      <Switch color="primary" size="small" onChange={getValue} />
      <br />
      <span>Large/Medium: </span>
      <Switch color="secondary" size="large" onChange={getValue} />
      <br />
    </div>
  );
}

export default Switches;
