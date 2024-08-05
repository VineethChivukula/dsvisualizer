import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

/**
 * Represents a Deque data structure.
 *
 * @returns {JSX.Element} The Deque component.
 */
function Deque() {
  // State variables
  const [deque, setDeque] = useState([]); // Deque array
  const [value, setValue] = useState(""); // Input value
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  // Add element to the front of the deque
  const handleAddFront = () => {
    setDeque([value, ...deque]);
    setValue("");
  };

  // Add element to the back of the deque
  const handleAddBack = () => {
    setDeque([...deque, value]);
    setValue("");
  };

  // Remove element from the front of the deque
  const handleRemoveFront = () => {
    if (deque.length > 0) {
      setDeque(deque.slice(1));
    } else {
      alert("Deque is empty");
    }
  };

  // Remove element from the back of the deque
  const handleRemoveBack = () => {
    if (deque.length > 0) {
      setDeque(deque.slice(0, -1));
    } else {
      alert("Deque is empty");
    }
  };

  // Get the front element of the deque
  const handleFront = () => {
    if (deque.length > 0) {
      alert(`Front element: ${deque[0]}`);
    } else {
      alert("Deque is empty");
    }
  };

  // Get the back element of the deque
  const handleBack = () => {
    if (deque.length > 0) {
      alert(`Back element: ${deque[deque.length - 1]}`);
    } else {
      alert("Deque is empty");
    }
  };

  // Get the size of the deque
  const handleSize = () => {
    alert(`Deque size: ${deque.length}`);
  };

  // Check if the deque is empty
  const handleIsEmpty = () => {
    if (deque.length === 0) {
      alert("Deque is empty");
    } else {
      alert("Deque is not empty");
    }
  };

  // Clear the deque
  const handleClear = () => {
    setDeque([]);
  };

  // Check if a value exists in the deque
  const handleContains = () => {
    const searchValue = prompt(
      "Enter a value to check if it exists in the deque"
    );
    const contains = deque.includes(searchValue);
    if (contains) {
      alert("Value exists in the deque");
    } else {
      alert("Value does not exist in the deque");
    }
  };

  return (
    <Box p={3} flexGrow={1}>
      {/* Input field for adding values */}
      <TextField
        label="Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        variant="outlined"
        style={{ marginTop: -10 }}
      />
      {/* Buttons for deque operations */}
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
          onClick={handleAddFront}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Add Front
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={handleAddBack}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Add Back
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={handleRemoveFront}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Remove Front
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={handleRemoveBack}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Remove Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleFront}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Front
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleBack}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Back
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
      {/* Display the deque */}
      <Box mt={3}>
        <Typography variant="h6">Deque</Typography>
        <Box display="flex">
          {deque.map((item, index) => (
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

export default Deque;
