import React, { useState } from "react";
import { Select, MenuItem } from "@material-ui/core/";

function SelectBox() {
  const [course, setCourse] = useState();

  const updateValue = (e, val) => {
    console.log(e.target.value);
    setCourse(e.target.value);
  };
  return (
    <div>
      <h3>Select Box or Select</h3>
      <Select value={course} displayEmpty onChange={updateValue}>
        <MenuItem value={1}>React</MenuItem>
        <MenuItem value={2}>JavaScript</MenuItem>
        <MenuItem value={3}>Node</MenuItem>
      </Select>
    </div>
  );
}

export default SelectBox;
