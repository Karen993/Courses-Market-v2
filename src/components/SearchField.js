import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";

const useStyles = makeStyles(() => {
  return {
    search: {
      width: "50%",
      height: 40,
    },
  };
});

export default function SearchField({ courses }) {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    courses.filter((course) =>
      setFilteredCourses(course.courseName.includes(searchValue.trim()))
    );
  }, [searchValue, courses]);

  return (
    <div>
      <div className={classes.search}>
        <TextField
          id="outlined-basic"
          label="Outlined"
          value={searchValue}
          onChange={(evt) => setSearchValue(evt.target.value)}
        />
      </div>
    </div>
  );
}
