import React from "react";
import { Slider } from "@material-ui/core/";

function Sliders() {
  const mark = [
    {
      value: 0,
      label: "low",
    },
    {
      value: 100,
      label: "100",
    },
    {
      value: 200,
      label: "high",
    },
  ];

  const getValue = (e, val) => {
    console.log(val);
  };
  return (
    <div>
      <h3>Slider</h3>
      <p>Horizontal</p>
      <div style={{ width: 300, marginLeft: "auto", marginRight: "auto" }}>
        <Slider
          color="primary"
          defaultValue={70}
          max={200}
          step={10}
          marks={mark}
          valueLabelDisplay="auto"
          onChange={getValue}
        />
        {/* by default max is 100 */}
      </div>
      <p>Vertical</p>
      <div style={{ height: 300, marginLeft: "auto", marginRight: "auto" }}>
        <Slider
          color="secondary"
          defaultValue={70}
          max={200}
          step={20}
          marks={mark}
          valueLabelDisplay="auto"
          onChange={getValue}
          orientation="vertical"
        />
        {/* by default max is 100 */}
      </div>
    </div>
  );
}

export default Sliders;
