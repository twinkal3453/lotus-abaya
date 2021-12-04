import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import "./tabs.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabsDetails = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab className="tabStyle" label="Description" {...a11yProps(0)} />
          <Tab className="tabStyle" label="Product Details" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore error
          laborum, aspernatur quidem corrupti aperiam molestiae ipsum culpa
          dolorem facere natus consequuntur, incidunt optio debitis porro ex
          asperiores. Consectetur, rerum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
          consequatur ea laudantium esse rerum illo maxime autem repellendus, in
          omnis excepturi debitis, quod aliquid repudiandae voluptatem quo
          veniam quas? Magni fugiat temporibus tempora sapiente consequatur
          tenetur atque nemo voluptatum? Saepe.
        </p>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="prod__detail__main">
          <p>Type: </p>
          <p>Hijab</p>
        </div>
        <div className="prod__detail__main">
          <p>Brand: </p>
          <p>Haya</p>
        </div>
        <div className="prod__detail__main">
          <p>Size: </p>
          <p>Free</p>
        </div>
        <div className="prod__detail__main">
          <p>Color: </p>
          <p>Dark</p>
        </div>
        <div className="prod__detail__main">
          <p>Fabric: </p>
          <p>Cotton</p>
        </div>
        <div className="prod__detail__main">
          <p>Sleeve: </p>
          <p>Full Sleeve</p>
        </div>
        <div className="prod__detail__main">
          <p>Pattern: </p>
          <p>Solid</p>
        </div>
        <div className="prod__detail__main">
          <p>Suitable For: </p>
          <p>Womens, Girls, Ladies</p>
        </div>
      </TabPanel>
    </Box>
  );
};

export default TabsDetails;
