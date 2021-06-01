import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    backgroundColor: "#d0c8c8",
    borderRadius: 14,
    width: 200,
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

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://allhacks.herokuapp.com/hacks")
        .then((res) => setData(res.data.hackathon));
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setCompany(e.target.value);
    const customData = async () => {
      await axios
        .get(`https://allhacks.herokuapp.com/${e.target.value}`)
        .then((res) => setData(res.data.hackathon));
    };
    customData();
  };

  return (
    <>
      <div className="container-fluid p-5">
        <FormControl variant="outlined" className={classes.formControl}>
          <Select
            labelId="demo-simple-select-label"
            variant="outlined"
            id="demo-simple-select"
            value={company}
            onChange={handleChange}
          >
            <MenuItem active value={"hacks"}>
              All
            </MenuItem>
            <MenuItem value={"devfolio"}>Devfolio</MenuItem>
            <MenuItem value={"mlh"}>MLH</MenuItem>
            <MenuItem value={"devpost"}>Devpost</MenuItem>
            <MenuItem value={"eventbrite"}>EventBrite</MenuItem>
          </Select>
        </FormControl>
        <div className="row">
          {data?.map((item) => (
            <Card item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardsComponent;
