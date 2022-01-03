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

const TabsDetails = ({ details }) => {
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
        <p className="product__description">{details.description}</p>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="prod__detail__main">
          <p>Type: </p>
          <p>{details.categoryData && details.categoryData.name}</p>
        </div>
        <div className="prod__detail__main">
          <p>Brand: </p>
          <p>{details.brand}</p>
        </div>
        <div className="prod__detail__main">
          <p>Fabric: </p>
          <p>{details.fabric}</p>
        </div>
        <div className="prod__detail__main">
          <p>Sleeve: </p>
          <p>{details.sleeve}</p>
        </div>
        <div className="prod__detail__main">
          <p>Pattern: </p>
          <p>{details.pattern}</p>
        </div>
        <div className="prod__detail__main">
          <p>Suitable For: </p>
          <p>{details.suitableFor}</p>
        </div>
        <div className="prod__detail__main">
          <p>Used For: </p>
          <p>{details.collectionData ? details.collectionData.name : ""}</p>
        </div>
      </TabPanel>
    </Box>
  );
};

export default TabsDetails;
