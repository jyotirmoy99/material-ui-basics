import React from "react";
import { Container } from "@material-ui/core/";

//by default - lg

function ContainerLayout() {
  return (
    <div>
      <h3>Container | Layout</h3>
      <Container maxWidth="lg" style={{ backgroundColor: "green" }}>
        Large Size
      </Container>
      <br />
      <Container maxWidth="md" style={{ backgroundColor: "green" }}>
        Medium Size
      </Container>
      <br />
      <Container maxWidth="sm" style={{ backgroundColor: "green" }}>
        Small Size
      </Container>
      <br />
      <Container maxWidth="xs" style={{ backgroundColor: "green" }}>
        Xtra-small Size
      </Container>
      <br />
      <Container fixed style={{ backgroundColor: "green" }}>
        Fixed
      </Container>
    </div>
  );
}

export default ContainerLayout;
