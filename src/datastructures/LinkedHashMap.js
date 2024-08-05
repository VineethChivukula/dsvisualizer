import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

/**
 * Represents a LinkedHashMap.
 *
 * @constructor
 * @returns {JSX.Element} The rendered LinkedHashMap component.
 */
function LinkedHashMap() {
  // State variables
  const [linkedHashMap, setLinkedHashMap] = useState({
    map: new Map(),
    keys: [],
  });
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");

  // Add key-value pair to the LinkedHashMap
  const handleAdd = () => {
    if (!linkedHashMap.map.has(key)) {
      const newMap = new Map(linkedHashMap.map).set(key, value);
      const newKeys = [...linkedHashMap.keys, key];
      setLinkedHashMap({ map: newMap, keys: newKeys });
    } else {
      const newMap = new Map(linkedHashMap.map).set(key, value);
      setLinkedHashMap({ map: newMap, keys: linkedHashMap.keys });
    }
    setKey("");
    setValue("");
  };

  // Remove key-value pair from the LinkedHashMap
  const handleRemove = () => {
    if (linkedHashMap.map.has(key)) {
      const newMap = new Map(linkedHashMap.map);
      newMap.delete(key);
      const newKeys = linkedHashMap.keys.filter((k) => k !== key);
      setLinkedHashMap({ map: newMap, keys: newKeys });
    }
    setKey("");
  };

  // Check if the LinkedHashMap contains a specific key
  const handleContainsKey = () => {
    if (linkedHashMap.map.has(key)) {
      alert("Key exists in the LinkedHashMap");
    } else {
      alert("Key does not exist in the LinkedHashMap");
    }
    setKey("");
  };

  // Get the value associated with a specific key in the LinkedHashMap
  const handleGetValue = () => {
    if (linkedHashMap.map.has(key)) {
      alert(`Value for key "${key}": ${linkedHashMap.map.get(key)}`);
    } else {
      alert("Key does not exist in the LinkedHashMap");
    }
    setKey("");
  };

  // Get the size of the LinkedHashMap
  const handleSize = () => {
    alert(`LinkedHashMap size: ${linkedHashMap.map.size}`);
  };

  // Check if the LinkedHashMap is empty
  const handleIsEmpty = () => {
    if (linkedHashMap.map.size === 0) {
      alert("LinkedHashMap is empty");
    } else {
      alert("LinkedHashMap is not empty");
    }
  };

  // Clear the LinkedHashMap
  const handleClear = () => {
    setLinkedHashMap({ map: new Map(), keys: [] });
  };

  return (
    <Box p={3} flexGrow={1}>
      {/* Input fields for key and value */}
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
          onClick={handleContainsKey}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Contains Key
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleGetValue}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Get Value
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

      {/* Display the LinkedHashMap */}
      <Box mt={3}>
        <Typography variant="h6">Linked Hash Map</Typography>
        <Box display="flex" flexWrap="wrap">
          {linkedHashMap.keys.map((k, index) => (
            <Box
              key={index}
              bgcolor="primary.main"
              color="primary.contrastText"
              p={2}
              mt={1}
              textAlign="center"
              mr={1}
            >
              {`${k}: ${linkedHashMap.map.get(k)}`}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default LinkedHashMap;
