import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

/**
 * ArrayComponent is a React component that represents an array data structure.
 * It allows users to initialize an array, get an element at a specific index,
 * set an element at a specific index, get the length of the array, sort the array,
 * and perform binary search on the array.
 *
 * @returns {React.Component} The ArrayComponent React component.
 */
const ArrayComponent = () => {
  const [list, setList] = useState([]);
  const [numElements, setNumElements] = useState("");
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  const add = () => {
    const num = parseInt(numElements, 10);
    if (num > 0) {
      const updatedList = Array(num).fill(0);
      setList(updatedList);
    } else {
      alert("Number of elements should be greater than 0");
    }
  };

  const get = (index) => {
    if (index >= 0 && index < list.length) {
      alert(`Element at index ${index}: ${list[index]}`);
    } else {
      alert("Invalid index");
    }
  };

  const setItem = (index, element) => {
    if (index >= 0 && index < list.length) {
      const updatedList = [...list];
      updatedList[index] = element;
      setList(updatedList);
    } else {
      alert("Invalid index");
    }
  };

  const length = () => {
    alert(`Array length: ${list.length}`);
  };

  const sort = () => {
    const sortedList = [...list].sort((a, b) => a - b);
    setList(sortedList);
  };

  const binarySearch = (element) => {
    const sortedList = [...list].sort((a, b) => a - b);
    let left = 0;
    let right = sortedList.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (sortedList[mid] === element) {
        alert(`Element ${element} found at index ${mid}`);
        return;
      } else if (sortedList[mid] < element) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    alert(`Element ${element} not found`);
  };

  return (
    <Box p={3} flexGrow={1}>
      <TextField
        label="Number of Elements"
        value={numElements}
        onChange={(e) => setNumElements(e.target.value)}
        variant="outlined"
        style={{ marginTop: -10 }}
      />
      <Button
        variant="contained"
        color="success"
        onClick={add}
        style={{ marginLeft: 10 }}
      >
        Initialize Array
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          const index = parseInt(prompt("Enter the index"), 10);
          if (!isNaN(index)) {
            get(index);
          } else {
            alert("Invalid index");
          }
        }}
        style={{ marginLeft: 10 }}
      >
        Get at Index
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          const index = parseInt(prompt("Enter the index"), 10);
          const element = parseInt(prompt("Enter the element"), 10);
          if (!isNaN(index) && !isNaN(element)) {
            setItem(index, element);
          } else {
            alert("Invalid index or element");
          }
        }}
        style={{ marginLeft: 10 }}
      >
        Set at Index
      </Button>
      <Button
        variant="contained"
        color="info"
        onClick={length}
        style={{ marginLeft: 10 }}
      >
        Length
      </Button>
      <Button
        variant="contained"
        color="info"
        onClick={sort}
        style={{ marginLeft: 10 }}
      >
        Sort
      </Button>
      <Button
        variant="contained"
        color="info"
        onClick={() => {
          const element = parseInt(prompt("Enter the element"), 10);
          if (!isNaN(element)) {
            binarySearch(element);
          } else {
            alert("Invalid element");
          }
        }}
        style={{ marginLeft: 10 }}
      >
        Binary Search
      </Button>
      <Box mt={3}>
        <Typography variant="h6">Array</Typography>
        <Box display="flex" alignItems="center">
          {list.map((item, index) => (
            <React.Fragment key={index}>
              <animated.div style={props}>
                <Box
                  bgcolor="primary.main"
                  color="primary.contrastText"
                  p={2}
                  mt={1}
                  textAlign="center"
                  mr={1}
                >
                  {item}
                </Box>
              </animated.div>
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ArrayComponent;
