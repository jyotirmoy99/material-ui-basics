import React, { useState } from "react";
import { Checkbox } from "@material-ui/core/";
import { Favorite, FavoriteBorder } from "@material-ui/icons/";
function CheckBoxes() {
  const [name, setName] = useState([]);

  const getValue = (e) => {
    let item = name;
    item.push(e.target.value);
    console.log(item);
  };
  return (
    <div>
      <h3>CheckBoxes</h3>
      <Checkbox color="primary" value="apple" onChange={(e) => getValue(e)} />
      <Checkbox color="primary" value="mango" onChange={(e) => getValue(e)} />
      <Checkbox
        color="primary"
        value="banana"
        indeterminate
        onChange={(e) => getValue(e)}
      />
      <Checkbox
        color="secondary"
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        value="heart"
        onChange={(e) => getValue(e)}
      />
    </div>
  );
}

export default CheckBoxes;
