import React from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core/";

function TabComponent() {
  const [value, setValue] = React.useState(0);
  const handleTabs = (e, val) => {
    console.log(val);
    setValue(val);
  };
  return (
    <div>
      <h3>Tabs | Tab | AppBar</h3>
      <AppBar position="static">
        <Tabs value={value} onChange={handleTabs}>
          <Tab label="Item 1" />
          <Tab label="Item 2" />
          <Tab label="Item 3" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Item one detail
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item two detail
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item three detail
      </TabPanel>
    </div>
  );
}

export const TabPanel = ({ children, value, index }) => {
  return <div>{value === index && <p>{children}</p>}</div>;
};

export default TabComponent;
