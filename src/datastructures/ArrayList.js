import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

/**
 * Represents an ArrayList data structure.
 *
 * @constructor
 * @returns {JSX.Element} The ArrayList component.
 */
function ArrayList() {
  const [list, setList] = useState([]); // State to store the list
  const [value, setValue] = useState(""); // State to store the input value
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  // Function to add an element to the end of the list
  const add = (element) => {
    setList([...list, element]);
    setValue("");
  };

  // Function to add an element at a specific index in the list
  const addAtIndex = (index, element) => {
    if (index >= 0 && index <= list.length) {
      const updatedList = [...list];
      updatedList.splice(index, 0, element);
      setList(updatedList);
      setValue("");
    } else {
      alert("Invalid index");
    }
  };

  // Function to remove an element at a specific index from the list
  const removeAtIndex = (index) => {
    if (index >= 0 && index < list.length) {
      const updatedList = [...list];
      updatedList.splice(index, 1);
      setList(updatedList);
    } else {
      alert("Invalid index");
    }
  };

  // Function to remove a specific element from the list
  const removeObject = (element) => {
    const index = list.indexOf(element);
    if (index !== -1) {
      removeAtIndex(index);
    } else {
      alert("Element not found");
    }
  };

  // Function to get the element at a specific index in the list
  const get = (index) => {
    if (index >= 0 && index < list.length) {
      alert(`Element at index ${index}: ${list[index]}`);
    } else {
      alert("Invalid index");
    }
  };

  // Function to set the element at a specific index in the list
  const set = (index, element) => {
    if (index >= 0 && index < list.length) {
      const updatedList = [...list];
      updatedList[index] = element;
      setList(updatedList);
      setValue("");
    } else {
      alert("Invalid index");
    }
  };

  // Function to get the size of the list
  const size = () => {
    alert(`List size: ${list.length}`);
  };

  // Function to check if the list is empty
  const isEmpty = () => {
    if (list.length === 0) {
      alert("List is empty");
    } else {
      alert("List is not empty");
    }
  };

  // Function to clear the list
  const clear = () => {
    setList([]);
  };

  return (
    <Box p={3} flexGrow={1}>
      <TextField
        label="Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
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
        {/* Buttons for various operations */}
        <Button
          variant="contained"
          color="success"
          onClick={() => add(value)}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Add
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            const index = parseInt(prompt("Enter the index"), 10);
            if (!isNaN(index)) {
              addAtIndex(index, value);
            } else {
              alert("Invalid index");
            }
          }}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Add at Index
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            const index = parseInt(prompt("Enter the index"), 10);
            if (!isNaN(index)) {
              removeAtIndex(index);
            } else {
              alert("Invalid index");
            }
          }}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Remove at Index
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => removeObject(value)}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Remove Object
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
            if (!isNaN(index)) {
              set(index, value);
            } else {
              alert("Invalid index");
            }
          }}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Set at Index
        </Button>
        <Button
          variant="contained"
          color="info"
          onClick={size}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Size
        </Button>
        <Button
          variant="contained"
          color="warning"
          onClick={isEmpty}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Is Empty?
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={clear}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Clear
        </Button>
      </Box>
      <Box mt={3}>
        <Typography variant="h6">Array List</Typography>
        <Box display="flex" alignItems="center">
          {/* Displaying the list elements */}
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
              {index < list.length - 1 && (
                <ArrowForwardIcon style={{ marginRight: 10 }} />
              )}
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default ArrayList;
