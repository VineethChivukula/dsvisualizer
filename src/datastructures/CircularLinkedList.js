import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

/**
 * CircularLinkedList component represents a circular linked list data structure.
 * It allows adding, removing, and accessing elements in a circular manner.
 *
 * @component
 * @returns {JSX.Element} CircularLinkedList component
 */
function CircularLinkedList() {
  // State variables
  const [list, setList] = useState([]); // Stores the circular linked list
  const [value, setValue] = useState(""); // Stores the value entered in the text field
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } }); // Animation props

  // Add element to the beginning of the list
  const addFirst = () => {
    const newNode = { value, next: list[0] || null }; // Create a new node with the entered value
    if (list.length > 0) {
      list[list.length - 1].next = newNode; // Update the next pointer of the last node
    }
    setList([newNode, ...list]); // Update the list with the new node at the beginning
    setValue(""); // Clear the input field
  };

  // Add element to the end of the list
  const addLast = () => {
    const newNode = { value, next: list[0] || null }; // Create a new node with the entered value
    if (list.length > 0) {
      list[list.length - 1].next = newNode; // Update the next pointer of the last node
    }
    setList([...list, newNode]); // Update the list with the new node at the end
    setValue(""); // Clear the input field
  };

  // Add element at a specific index in the list
  const add = (index, element) => {
    if (index >= 0 && index <= list.length) {
      const newNode = { value: element, next: null }; // Create a new node with the entered value
      const updatedList = [...list];
      if (index === 0) {
        newNode.next = list[0] || newNode; // Update the next pointer of the new node
        if (list.length > 0) {
          list[list.length - 1].next = newNode; // Update the next pointer of the last node
        }
        updatedList.unshift(newNode); // Add the new node at the beginning of the list
      } else {
        newNode.next = updatedList[index]; // Update the next pointer of the new node
        updatedList[index - 1].next = newNode; // Update the next pointer of the previous node
        updatedList.splice(index, 0, newNode); // Insert the new node at the specified index
      }
      setList(updatedList); // Update the list with the new node
      setValue(""); // Clear the input field
    } else {
      alert("Invalid index"); // Show an alert for invalid index
    }
  };

  // Remove the first element from the list
  const removeFirst = () => {
    if (list.length > 0) {
      const updatedList = list.slice(1); // Remove the first element from the list
      if (updatedList.length > 0) {
        updatedList[updatedList.length - 1].next = updatedList[0]; // Update the next pointer of the last node
      }
      setList(updatedList); // Update the list
    } else {
      alert("List is empty"); // Show an alert if the list is empty
    }
  };

  // Remove the last element from the list
  const removeLast = () => {
    if (list.length > 0) {
      const updatedList = list.slice(0, -1); // Remove the last element from the list
      if (updatedList.length > 0) {
        updatedList[updatedList.length - 1].next = updatedList[0]; // Update the next pointer of the last node
      }
      setList(updatedList); // Update the list
    } else {
      alert("List is empty"); // Show an alert if the list is empty
    }
  };

  // Remove element at a specific index from the list
  const remove = (index) => {
    if (index >= 0 && index < list.length) {
      const updatedList = [...list];
      if (index === 0) {
        updatedList.pop(); // Remove the last element from the list
        updatedList[updatedList.length - 1].next = updatedList[0]; // Update the next pointer of the last node
        updatedList.shift(); // Remove the first element from the list
      } else {
        updatedList[index - 1].next = updatedList[index + 1] || updatedList[0]; // Update the next pointer of the previous node
        updatedList.splice(index, 1); // Remove the element at the specified index
      }
      setList(updatedList); // Update the list
    } else {
      alert("Invalid index"); // Show an alert for invalid index
    }
  };

  // Get the first element from the list
  const getFirst = () => {
    if (list.length > 0) {
      alert(`First element: ${list[0].value}`); // Show an alert with the first element value
    } else {
      alert("List is empty"); // Show an alert if the list is empty
    }
  };

  // Get the last element from the list
  const getLast = () => {
    if (list.length > 0) {
      alert(`Last element: ${list[list.length - 1].value}`); // Show an alert with the last element value
    } else {
      alert("List is empty"); // Show an alert if the list is empty
    }
  };

  // Get element at a specific index from the list
  const get = (index) => {
    if (index >= 0 && index < list.length) {
      alert(`Element at index ${index}: ${list[index].value}`); // Show an alert with the element value at the specified index
    } else {
      alert("Invalid index"); // Show an alert for invalid index
    }
  };

  // Get the size of the list
  const size = () => {
    alert(`List size: ${list.length}`); // Show an alert with the size of the list
  };

  // Check if the list is empty
  const isEmpty = () => {
    if (list.length === 0) {
      alert("List is empty"); // Show an alert if the list is empty
    } else {
      alert("List is not empty"); // Show an alert if the list is not empty
    }
  };

  // Clear the list
  const clear = () => {
    setList([]); // Set the list to an empty array
  };

  // Rotate the list by moving the last element to the beginning
  const rotate = () => {
    if (list.length > 0) {
      const lastElement = list.pop(); // Remove the last element from the list
      list.unshift(lastElement); // Add the last element at the beginning of the list
      setList([...list]); // Update the list
    } else {
      alert("List is empty"); // Show an alert if the list is empty
    }
  };

  return (
    <Box p={3} flexGrow={1}>
      {/* Input field for entering the value */}
      <TextField
        label="Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        variant="outlined"
        style={{ marginTop: -10 }}
      />
      {/* Buttons for performing list operations */}
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
        <Button
          variant="contained"
          color="primary"
          onClick={rotate}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Rotate
        </Button>
      </Box>
      {/* Display the circular linked list */}
      <Box mt={3}>
        <Typography variant="h6">Circular Linked List</Typography>
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
                  {item.value}
                </Box>
              </animated.div>
              {index < list.length - 1 && (
                <ArrowForwardIcon style={{ marginRight: 10 }} />
              )}
            </React.Fragment>
          ))}
          {list.length > 0 && <ArrowForwardIcon style={{ marginRight: 10 }} />}
        </Box>
      </Box>
    </Box>
  );
}

export default CircularLinkedList;
