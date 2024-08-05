import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

/**
 * Represents a Queue data structure.
 *
 * @returns {JSX.Element} The rendered Queue component.
 */
function Queue() {
  const [queue, setQueue] = useState([]);
  const [value, setValue] = useState("");
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  const handleAdd = () => {
    setQueue([...queue, value]);
    setValue("");
  };

  const handleOffer = () => {
    setQueue([...queue, value]);
    setValue("");
  };

  const handleRemove = () => {
    if (queue.length > 0) {
      setQueue(queue.slice(1));
    } else {
      alert("Queue is empty");
    }
  };

  const handlePoll = () => {
    if (queue.length > 0) {
      setQueue(queue.slice(1));
    }
  };

  const handleElement = () => {
    if (queue.length > 0) {
      const frontElement = queue[0];
      alert(`Front element: ${frontElement}`);
    } else {
      alert("Queue is empty");
    }
  };

  const handlePeek = () => {
    if (queue.length > 0) {
      const frontElement = queue[0];
      alert(`Front element: ${frontElement}`);
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
    const contains = queue.includes(searchValue);
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
          color="success"
          onClick={handleOffer}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Offer
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
          color="error"
          onClick={handlePoll}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Poll
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
          color="primary"
          onClick={handlePeek}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Peek
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
        <Typography variant="h6">Queue</Typography>
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
                {item}
              </Box>
            </animated.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Queue;
