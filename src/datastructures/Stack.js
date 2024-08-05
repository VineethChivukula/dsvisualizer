import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

/**
 * Represents a Stack data structure.
 *
 * @returns {JSX.Element} The Stack component.
 */
function Stack() {
  const [stack, setStack] = useState([]);
  const [value, setValue] = useState("");
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  const handlePush = () => {
    setStack([...stack, value]);
    setValue("");
  };

  const handlePop = () => {
    setStack(stack.slice(0, -1));
  };

  const handlePeek = () => {
    if (stack.length > 0) {
      const topElement = stack[stack.length - 1];
      alert(`Top element: ${topElement}`);
    } else {
      alert("Stack is empty");
    }
  };

  const handleIsEmpty = () => {
    if (stack.length === 0) {
      alert("Stack is empty");
    } else {
      alert("Stack is not empty");
    }
  };

  const handleSearch = () => {
    const searchValue = prompt("Enter a value to search");
    const index = stack.findIndex((item) => item === searchValue);
    if (index !== -1) {
      alert(`Value found at index ${index}`);
    } else {
      alert("Value not found in the stack");
    }
  };

  const handleSize = () => {
    alert(`Stack size: ${stack.length}`);
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
          onClick={handlePush}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Push
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={handlePop}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Pop
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
          color="warning"
          onClick={handleIsEmpty}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Is Empty?
        </Button>
        <Button
          variant="contained"
          color="info"
          onClick={handleSearch}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Search
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleSize}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Size
        </Button>
      </Box>
      <Box mt={3}>
        <Typography variant="h6">Stack</Typography>
        <Box display="flex" flexDirection="column-reverse">
          {stack.map((item, index) => (
            <animated.div key={index} style={props}>
              <Box
                bgcolor="primary.main"
                color="primary.contrastText"
                p={2}
                mt={1}
                textAlign="center"
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

export default Stack;
