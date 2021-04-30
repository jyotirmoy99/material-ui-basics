import React, { useState } from "react";
import { Slider } from "@material-ui/core/";

function RangeSlider() {
  const [val, setVal] = useState([30, 60]);

  const updateValue = (e, item) => {
    setVal(item);
    console.log(item);
  };
  return (
    <div>
      <h3>Range Slider</h3>
      <div style={{ width: 300, marginLeft: "auto", marginRight: "auto" }}>
        <Slider
          color="primary"
          valueLabelDisplay="auto"
          onChange={updateValue}
          value={val}
        />
      </div>
    </div>
  );
}

export default RangeSlider;
