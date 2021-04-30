import React from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { Menu, MenuItem, Button } from "@material-ui/core/";

function MenuReactRouting() {
  const [anchor, setAnchor] = React.useState(null);

  const openMenu = (event) => {
    setAnchor(event.currentTarget);
  };

  const closeMenu = (event) => {
    setAnchor(null);
  };

  return (
    <Router>
      <h3>Menu | React Routing</h3>
      <Button onClick={openMenu}>Menu</Button>
      <Menu open={anchor} onClose={closeMenu}>
        <MenuItem onClick={closeMenu}>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <Link to="/about">About</Link>
        </MenuItem>
      </Menu>

      <Route path="/about">
        <About />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Router>
  );
}

//Home Component
export const Home = () => {
  return (
    <div>
      <p>Home Page</p>
    </div>
  );
};

//About Component
export const About = () => {
  return (
    <div>
      <p>About Page</p>
    </div>
  );
};

export default MenuReactRouting;
