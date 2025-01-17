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
  const [list, setList] = useState([]); // State variable to store the array
  const [numElements, setNumElements] = useState(""); // State variable to store the number of elements
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  // Function to add elements to the array
  const add = () => {
    const num = parseInt(numElements, 10);
    if (num > 0) {
      const updatedList = Array(num).fill(0);
      setList(updatedList);
    } else {
      alert("Number of elements should be greater than 0");
    }
  };

  // Function to get an element at a specific index
  const get = (index) => {
    if (index >= 0 && index < list.length) {
      alert(`Element at index ${index}: ${list[index]}`);
    } else {
      alert("Invalid index");
    }
  };

  // Function to set an element at a specific index
  const setItem = (index, element) => {
    if (index >= 0 && index < list.length) {
      const updatedList = [...list];
      updatedList[index] = element;
      setList(updatedList);
    } else {
      alert("Invalid index");
    }
  };

  // Function to get the length of the array
  const length = () => {
    alert(`Array length: ${list.length}`);
  };

  // Function to sort the array
  const sort = () => {
    const sortedList = [...list].sort((a, b) => a - b);
    setList(sortedList);
  };

  // Function to perform binary search on the array
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
      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          overflowX: "auto",
          mt: 2,
          mb: 2,
          gap: 1,
        }}
      >
        <Button
          variant="contained"
          color="success"
          onClick={add}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
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
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
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
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Set at Index
        </Button>
        <Button
          variant="contained"
          color="info"
          onClick={length}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Length
        </Button>
        <Button
          variant="contained"
          color="info"
          onClick={sort}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
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
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Binary Search
        </Button>
      </Box>
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
