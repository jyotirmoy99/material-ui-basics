import React from "react";
import { Grid } from "@material-ui/core/";

function GridSystem() {
  return (
    <div>
      <h3>Grid</h3>
      <Grid item xs={12} container spacing={2}>
        <Grid item lg={3} sm={6} xs={12}>
          <h1 style={{ backgroundColor: "blueviolet" }}>Block 1</h1>
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <h1 style={{ backgroundColor: "blueviolet" }}>Block 2</h1>
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <h1 style={{ backgroundColor: "blueviolet" }}>Block 3</h1>
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <h1 style={{ backgroundColor: "blueviolet" }}>Block 4</h1>
        </Grid>
      </Grid>
    </div>
  );
}

export default GridSystem;
