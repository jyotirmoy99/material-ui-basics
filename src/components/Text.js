import React from "react";
import { TextField } from "@material-ui/core/";
function Text() {
  const getData = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <h3>TextField</h3>
      <TextField
        color="secondary"
        label="Enter Firstname"
        variant="filled"
        onChange={getData}
      />
      <TextField
        color="secondary"
        label="Enter Lastname"
        variant="outlined"
        onChange={getData}
      />
    </div>
  );
}

export default Text;
