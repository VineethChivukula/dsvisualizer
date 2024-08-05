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
  const [queue, setQueue] = useState([]);
  const [value, setValue] = useState("");
  const [priority, setPriority] = useState("");
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  const handleAdd = () => {
    const newElement = { value, priority: parseInt(priority, 10) };
    const updatedQueue = [...queue, newElement].sort(
      (a, b) => a.priority - b.priority
    );
    setQueue(updatedQueue);
    setValue("");
    setPriority("");
  };

  const handleRemove = () => {
    if (queue.length > 0) {
      setQueue(queue.slice(1));
    } else {
      alert("Queue is empty");
    }
  };

  const handleElement = () => {
    if (queue.length > 0) {
      const frontElement = queue[0].value;
      alert(`Front element: ${frontElement}`);
    } else {
      alert("Queue is empty");
    }
  };

  const handleSize = () => {
    alert(`Queue size: ${queue.length}`);
  };

  const handleIsEmpty = () => {
    if (queue.length === 0) {
      alert("Queue is empty");
    } else {
      alert("Queue is not empty");
    }
  };

  const handleClear = () => {
    setQueue([]);
  };

  const handleContains = () => {
    const searchValue = prompt(
      "Enter a value to check if it exists in the queue"
    );
    const contains = queue.some((item) => item.value === searchValue);
    if (contains) {
      alert("Value exists in the queue");
    } else {
      alert("Value does not exist in the queue");
    }
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
      <TextField
        label="Priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        variant="outlined"
        style={{ marginTop: -10, marginLeft: 10 }}
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
