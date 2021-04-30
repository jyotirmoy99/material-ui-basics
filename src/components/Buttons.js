import React, { useState } from "react";
import { Button } from "@material-ui/core/";
import { Delete } from "@material-ui/icons/";

//variant - background color

function Buttons() {
  const [color, setColor] = useState("primary");
  const [disableBtn, setDisableBtn] = useState(false);

  //change color on click
  const changeColor = () => {
    setColor("secondary");
  };

  //diable button
  const disableClick = () => {
    setDisableBtn(true);
  };
  return (
    <div>
      <h3>Buttons</h3>
      <Button color="primary">Button-1</Button>
      <Button variant="contained">Button-2</Button>
      <Button variant="outlined">Button-3</Button>
      <Button variant="contained" color={color} onClick={changeColor}>
        Button-4
      </Button>
      <Button variant="contained" disabled={disableBtn} onClick={disableClick}>
        Button-5
      </Button>
      <Button variant="contained" color="secondary" startIcon={<Delete />}>
        Button-6
      </Button>
    </div>
  );
}

export default Buttons;
