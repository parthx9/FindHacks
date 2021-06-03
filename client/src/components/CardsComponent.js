import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core";
import HashLoader from "react-spinners/HashLoader";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    backgroundColor: "#33353d",
    borderRadius: 14,
    width: 240,
    marginBottom: 40,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const CardsComponent = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [company, setCompany] = useState("All");
  const [loader, setLoader] = useState(true);

  const apiURL = "https://allhacks.herokuapp.com";

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios.get(`${apiURL}/hacks`);
      setData(results.data.hackathon);
      setLoader(false);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setCompany(e.target.value);
    const customData = async () => {
      const results = await axios.get(`${apiURL}/${e.target.value}`);
      setData(results.data.hackathon);
    };
    customData();
  };

  return (
    <React.Fragment>
      <div className="container-fluid p-md-5 p-3">
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel className="dropdown-title">Filter Hackathons</InputLabel>

          <Select
            labelId="demo-simple-select-label"
            variant="outlined"
            id="demo-simple-select"
            value={company}
            onChange={handleChange}
            className="menu-item"
          >
            <MenuItem active value={"hacks"}>
              All
            </MenuItem>
            <MenuItem className="menu-item" value={"devfolio"}>
              Devfolio
            </MenuItem>
            <MenuItem className="menu-item" value={"mlh"}>
              MLH
            </MenuItem>
            <MenuItem className="menu-item" value={"devpost"}>
              Devpost
            </MenuItem>
            <MenuItem className="menu-item" value={"eventbrite"}>
              EventBrite
            </MenuItem>
            <MenuItem className="menu-item" value={"hackerearth"}>
              HackerEarth
            </MenuItem>
          </Select>
        </FormControl>
        {loader ? (
          <div className="loader">
            <HashLoader
              size={170}
              color={"#26a17a"}
              loading={loader}
            ></HashLoader>
          </div>
        ) : (
          <div className="row">
            {data?.map((item, idx) => (
              <Card item={item} key={idx} />
            ))}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default CardsComponent;
