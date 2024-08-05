import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

/**
 * Represents a HashMap data structure.
 *
 * @constructor
 * @returns {HashMap} The HashMap instance.
 */
function HashMap() {
  const [hashMap, setHashMap] = useState(new Map());
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");

  const handleAdd = () => {
    const newMap = new Map(hashMap);
    newMap.set(key, value);
    setHashMap(newMap);
    setKey("");
    setValue("");
  };

  const handleRemove = () => {
    const newMap = new Map(hashMap);
    newMap.delete(key);
    setHashMap(newMap);
    setKey("");
  };

  const handleContainsKey = () => {
    if (hashMap.has(key)) {
      alert("Key exists in the HashMap");
    } else {
      alert("Key does not exist in the HashMap");
    }
    setKey("");
  };

  const handleGetValue = () => {
    if (hashMap.has(key)) {
      alert(`Value for key "${key}": ${hashMap.get(key)}`);
    } else {
      alert("Key does not exist in the HashMap");
    }
    setKey("");
  };

  const handleSize = () => {
    alert(`HashMap size: ${hashMap.size}`);
  };

  const handleIsEmpty = () => {
    if (hashMap.size === 0) {
      alert("HashMap is empty");
    } else {
      alert("HashMap is not empty");
    }
  };

  const handleClear = () => {
    setHashMap(new Map());
  };

  return (
    <Box p={3} flexGrow={1}>
      <TextField
        label="Key"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        variant="outlined"
        style={{ marginTop: -10 }}
      />
      <TextField
        label="Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        variant="outlined"
        style={{ marginTop: -10, marginLeft: 10 }}
      />
      <Button
        variant="contained"
        color="success"
        onClick={handleAdd}
        style={{ marginLeft: 10 }}
      >
        Add
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={handleRemove}
        style={{ marginLeft: 10 }}
      >
        Remove
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={handleContainsKey}
        style={{ marginLeft: 10 }}
      >
        Contains Key
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGetValue}
        style={{ marginLeft: 10 }}
      >
        Get Value
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
      <Box mt={3}>
        <Typography variant="h6">Hash Map</Typography>
        <Box display="flex" flexWrap="wrap">
          {[...hashMap.entries()].map(([k, v], index) => (
            <Box
              key={index}
              bgcolor="primary.main"
              color="primary.contrastText"
              p={2}
              mt={1}
              textAlign="center"
              mr={1}
            >
              {`${k}: ${v}`}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default HashMap;
