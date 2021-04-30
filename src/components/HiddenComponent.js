import React from "react";
import { Grid, Hidden } from "@material-ui/core/";

function HiddenComponent() {
  return (
    <div>
      <h3>Hidden</h3>
      <Grid container spacing={2} xs={12} item>
        <Grid item lg={3} sm={6} xs={12}>
          <h1 style={{ backgroundColor: "blue" }}>Block 1</h1>
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <h1 style={{ backgroundColor: "blue" }}>Block 2</h1>
        </Grid>
        <Hidden only={["xs", "sm"]}>
          <h1 style={{ backgroundColor: "blue", flex: 1 }}>Block 3</h1>
        </Hidden>
        <Grid item lg={3} sm={6} xs={12}>
          <h1 style={{ backgroundColor: "blue" }}>Block 4</h1>
        </Grid>
      </Grid>
    </div>
  );
}

export default HiddenComponent;
