import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

/**
 * Represents a HashSet data structure.
 *
 * @constructor
 * @returns {HashSet} The HashSet object.
 */
function HashSet() {
  const [hashSet, setHashSet] = useState(new Set());
  const [value, setValue] = useState("");

  const handleAdd = () => {
    const newSet = new Set(hashSet);
    newSet.add(value);
    setHashSet(Array.from(newSet).sort(() => Math.random() - 0.5));
    setValue("");
  };

  const handleRemove = () => {
    const newSet = new Set(hashSet);
    newSet.delete(value);
    setHashSet(newSet);
    setValue("");
  };

  const handleContains = () => {
    if (hashSet.has(value)) {
      alert("Value exists in the HashSet");
    } else {
      alert("Value does not exist in the HashSet");
    }
    setValue("");
  };

  const handleSize = () => {
    alert(`HashSet size: ${hashSet.size}`);
  };

  const handleIsEmpty = () => {
    if (hashSet.size === 0) {
      alert("HashSet is empty");
    } else {
      alert("HashSet is not empty");
    }
  };

  const handleClear = () => {
    setHashSet(new Set());
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
          color="error"
          onClick={handleRemove}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Remove
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleContains}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Contains
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
      </Box>
      <Box mt={3}>
        <Typography variant="h6">Hash Set</Typography>
        <Box display="flex" flexWrap="wrap">
          {[...hashSet].map((item, index) => (
            <Box
              key={index}
              bgcolor="primary.main"
              color="primary.contrastText"
              p={2}
              mt={1}
              textAlign="center"
              mr={1}
            >
              {item}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default HashSet;
