import React from "react";
import { Button, ButtonGroup } from "@material-ui/core/";

//orientation = vertical/horizontal
//* by default orientation value is horizontal

function ButtonsGroup() {
  return (
    <div>
      <h3>Buttons Group</h3>
      <ButtonGroup color="primary" variant="contained" orientation="vertical">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </ButtonGroup>
    </div>
  );
}

export default ButtonsGroup;
