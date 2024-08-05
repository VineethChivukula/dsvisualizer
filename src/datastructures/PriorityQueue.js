import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

/**
 * Represents a priority queue.
 *
 * @returns {JSX.Element} The rendered priority queue component.
 */
function PriorityQueue() {
  // State variables
  const [queue, setQueue] = useState([]); // Represents the priority queue
  const [value, setValue] = useState(""); // Represents the value of the element to be added
  const [priority, setPriority] = useState(""); // Represents the priority of the element to be added
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } }); // Animation props

  // Function to handle adding an element to the priority queue
  const handleAdd = () => {
    const newElement = { value, priority: parseInt(priority, 10) }; // Create a new element object with value and priority
    const updatedQueue = [...queue, newElement].sort(
      (a, b) => a.priority - b.priority
    ); // Add the new element to the queue and sort it based on priority
    setQueue(updatedQueue); // Update the queue state
    setValue(""); // Clear the value input field
    setPriority(""); // Clear the priority input field
  };

  // Function to handle removing an element from the priority queue
  const handleRemove = () => {
    if (queue.length > 0) {
      setQueue(queue.slice(1)); // Remove the first element from the queue
    } else {
      alert("Queue is empty");
    }
  };

  // Function to handle getting the front element of the priority queue
  const handleElement = () => {
    if (queue.length > 0) {
      const frontElement = queue[0].value; // Get the value of the first element in the queue
      alert(`Front element: ${frontElement}`);
    } else {
      alert("Queue is empty");
    }
  };

  // Function to handle getting the size of the priority queue
  const handleSize = () => {
    alert(`Queue size: ${queue.length}`);
  };

  // Function to check if the priority queue is empty
  const handleIsEmpty = () => {
    if (queue.length === 0) {
      alert("Queue is empty");
    } else {
      alert("Queue is not empty");
    }
  };

  // Function to handle clearing the priority queue
  const handleClear = () => {
    setQueue([]); // Clear the queue by setting it to an empty array
  };

  // Function to check if a value exists in the priority queue
  const handleContains = () => {
    const searchValue = prompt(
      "Enter a value to check if it exists in the queue"
    );
    const contains = queue.some((item) => item.value === searchValue); // Check if the queue contains an element with the given value
    if (contains) {
      alert("Value exists in the queue");
    } else {
      alert("Value does not exist in the queue");
    }
  };

  return (
    <Box p={3} flexGrow={1}>
      {/* Input fields for value and priority */}
      <TextField
        label="Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        variant="outlined"
        style={{ marginTop: -10 }}
      />
      <TextField
        label="Priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        variant="outlined"
        style={{ marginTop: -10, marginLeft: 10 }}
      />

      {/* Buttons for various operations */}
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
          onClick={handleAdd}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Add
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={handleRemove}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Remove
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleElement}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Element
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleSize}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Size
        </Button>
        <Button
          variant="contained"
          color="warning"
          onClick={handleIsEmpty}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Is Empty?
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={handleClear}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Clear
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={handleContains}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Contains
        </Button>
      </Box>

      {/* Display the priority queue */}
      <Box mt={3}>
        <Typography variant="h6">Priority Queue</Typography>
        <Box display="flex">
          {queue.map((item, index) => (
            <animated.div key={index} style={props}>
              <Box
                bgcolor="primary.main"
                color="primary.contrastText"
                p={2}
                mt={1}
                textAlign="center"
                mr={1}
              >
                {item.value} (Priority: {item.priority})
              </Box>
            </animated.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default PriorityQueue;
