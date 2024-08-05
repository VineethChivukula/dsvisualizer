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
  const [deque, setDeque] = useState([]);
  const [value, setValue] = useState("");
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  const handleAddFront = () => {
    setDeque([value, ...deque]);
    setValue("");
  };

  const handleAddBack = () => {
    setDeque([...deque, value]);
    setValue("");
  };

  const handleRemoveFront = () => {
    if (deque.length > 0) {
      setDeque(deque.slice(1));
    } else {
      alert("Deque is empty");
    }
  };

  const handleRemoveBack = () => {
    if (deque.length > 0) {
      setDeque(deque.slice(0, -1));
    } else {
      alert("Deque is empty");
    }
  };

  const handleFront = () => {
    if (deque.length > 0) {
      alert(`Front element: ${deque[0]}`);
    } else {
      alert("Deque is empty");
    }
  };

  const handleBack = () => {
    if (deque.length > 0) {
      alert(`Back element: ${deque[deque.length - 1]}`);
    } else {
      alert("Deque is empty");
    }
  };

  const handleSize = () => {
    alert(`Deque size: ${deque.length}`);
  };

  const handleIsEmpty = () => {
    if (deque.length === 0) {
      alert("Deque is empty");
    } else {
      alert("Deque is not empty");
    }
  };

  const handleClear = () => {
    setDeque([]);
  };

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
      <TextField
        label="Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        variant="outlined"
        style={{ marginTop: -10 }}
      />
      <Button
        variant="contained"
        color="success"
        onClick={handleAddFront}
        style={{ marginLeft: 10 }}
      >
        Add Front
      </Button>
      <Button
        variant="contained"
        color="success"
        onClick={handleAddBack}
        style={{ marginLeft: 10 }}
      >
        Add Back
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={handleRemoveFront}
        style={{ marginLeft: 10 }}
      >
        Remove Front
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={handleRemoveBack}
        style={{ marginLeft: 10 }}
      >
        Remove Back
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={handleFront}
        style={{ marginLeft: 10 }}
      >
        Front
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={handleBack}
        style={{ marginLeft: 10 }}
      >
        Back
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleSize}
        style={{ marginLeft: 10 }}
      >
        Size
      </Button>
      <Button
        variant="contained"
        color="warning"
        onClick={handleIsEmpty}
        style={{ marginLeft: 10 }}
      >
        Is Empty?
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={handleClear}
        style={{ marginLeft: 10 }}
      >
        Clear
      </Button>
      <Button
        variant="contained"
        color="success"
        onClick={handleContains}
        style={{ marginLeft: 10 }}
      >
        Contains
      </Button>
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
