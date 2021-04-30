import React from "react";
import { Box, Button } from "@material-ui/core/";

//Box acts like a div tag
//clone is used to change the style of the tags present inside the Box component
//if we want to add style inside Box without "clone" then the tags present inside the Box will not change
//m - margin
//p - padding
//component="span" - converts the Box into span

function BoxLayout() {
  return (
    <div>
      <h3>Box | Layout</h3>
      <Box component="span" style={{ color: "green" }} clone m={10} p={10}>
        <Button>Hello</Button>
      </Box>
    </div>
  );
}

export default BoxLayout;
