import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

/**
 * Represents a double linked list.
 *
 * @constructor
 * @returns {JSX.Element} The double linked list component.
 */
function DoubleLinkedList() {
  // State variables
  const [list, setList] = useState([]); // Stores the double linked list
  const [value, setValue] = useState(""); // Stores the value entered in the text field
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } }); // Animation props

  // Add a new node at the beginning of the list
  const addFirst = () => {
    setList([{ value, prev: null, next: list[0] }, ...list]);
    setValue("");
  };

  // Add a new node at the end of the list
  const addLast = () => {
    setList([...list, { value, prev: list[list.length - 1], next: null }]);
    setValue("");
  };

  // Add a new node at a specific index in the list
  const add = (index, element) => {
    if (index >= 0 && index <= list.length) {
      const updatedList = [...list];
      updatedList.splice(index, 0, {
        value: element,
        prev: index > 0 ? updatedList[index - 1] : null,
        next: index < list.length ? updatedList[index] : null,
      });
      if (index > 0) updatedList[index - 1].next = updatedList[index];
      if (index < list.length) updatedList[index + 1].prev = updatedList[index];
      setList(updatedList);
      setValue("");
    } else {
      alert("Invalid index");
    }
  };

  // Remove the first node from the list
  const removeFirst = () => {
    if (list.length > 0) {
      const updatedList = list.slice(1);
      if (updatedList.length > 0) updatedList[0].prev = null;
      setList(updatedList);
    } else {
      alert("List is empty");
    }
  };

  // Remove the last node from the list
  const removeLast = () => {
    if (list.length > 0) {
      const updatedList = list.slice(0, -1);
      if (updatedList.length > 0)
        updatedList[updatedList.length - 1].next = null;
      setList(updatedList);
    } else {
      alert("List is empty");
    }
  };

  // Remove a node at a specific index from the list
  const remove = (index) => {
    if (index >= 0 && index < list.length) {
      const updatedList = [...list];
      if (index > 0)
        updatedList[index - 1].next = updatedList[index + 1] || null;
      if (index < list.length - 1)
        updatedList[index + 1].prev = updatedList[index - 1] || null;
      updatedList.splice(index, 1);
      setList(updatedList);
    } else {
      alert("Invalid index");
    }
  };

  // Get the value of the first node in the list
  const getFirst = () => {
    if (list.length > 0) {
      alert(`First element: ${list[0].value}`);
    } else {
      alert("List is empty");
    }
  };

  // Get the value of the last node in the list
  const getLast = () => {
    if (list.length > 0) {
      alert(`Last element: ${list[list.length - 1].value}`);
    } else {
      alert("List is empty");
    }
  };

  // Get the value of a node at a specific index in the list
  const get = (index) => {
    if (index >= 0 && index < list.length) {
      alert(`Element at index ${index}: ${list[index].value}`);
    } else {
      alert("Invalid index");
    }
  };

  // Get the size of the list
  const size = () => {
    alert(`List size: ${list.length}`);
  };

  // Check if the list is empty
  const isEmpty = () => {
    if (list.length === 0) {
      alert("List is empty");
    } else {
      alert("List is not empty");
    }
  };

  // Clear the list
  const clear = () => {
    setList([]);
  };

  return (
    <Box p={3} flexGrow={1}>
      {/* Text field for entering a value */}
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
        {/* Buttons for performing list operations */}
        <Button
          variant="contained"
          color="success"
          onClick={addFirst}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Add First
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={addLast}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Add Last
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            const index = parseInt(prompt("Enter the index"), 10);
            if (!isNaN(index)) {
              add(index, value);
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
          onClick={removeFirst}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Remove First
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={removeLast}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Remove Last
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            const index = parseInt(prompt("Enter the index"), 10);
            if (!isNaN(index)) {
              remove(index);
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
          color="secondary"
          onClick={getFirst}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Get First
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={getLast}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Get Last
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
        <Typography variant="h6">Double Linked List</Typography>
        <Box display="flex" alignItems="center">
          {/* Render the nodes of the list */}
          {list.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && <ArrowBackIcon style={{ marginRight: 10 }} />}
              <animated.div style={props}>
                <Box
                  bgcolor="primary.main"
                  color="primary.contrastText"
                  p={2}
                  mt={1}
                  textAlign="center"
                  mr={1}
                >
                  {item.value}
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

export default DoubleLinkedList;
