import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

/**
 * Represents a HashTable data structure.
 *
 * @constructor
 * @returns {JSX.Element} The HashTable component.
 */
function HashTable() {
  const [hashtable, setHashTable] = useState({});
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");

  const handleAdd = () => {
    if (key && value) {
      const newHashTable = { ...hashtable, [key]: value };
      setHashTable(newHashTable);
      setKey("");
      setValue("");
    } else {
      alert("Key and Value cannot be null or empty");
    }
  };

  const handleRemove = () => {
    const { [key]: _, ...newHashTable } = hashtable;
    setHashTable(newHashTable);
    setKey("");
  };

  const handleContainsKey = () => {
    if (key in hashtable) {
      alert("Key exists in the HashTable");
    } else {
      alert("Key does not exist in the HashTable");
    }
    setKey("");
  };

  const handleGetValue = () => {
    if (key in hashtable) {
      alert(`Value for key "${key}": ${hashtable[key]}`);
    } else {
      alert("Key does not exist in the HashTable");
    }
    setKey("");
  };

  const handleSize = () => {
    alert(`HashTable size: ${Object.keys(hashtable).length}`);
  };

  const handleIsEmpty = () => {
    if (Object.keys(hashtable).length === 0) {
      alert("HashTable is empty");
    } else {
      alert("HashTable is not empty");
    }
  };

  const handleClear = () => {
    setHashTable({});
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
        <Typography variant="h6">Hash Table</Typography>
        <Box display="flex" flexWrap="wrap">
          {Object.entries(hashtable).map(([k, v], index) => (
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

export default HashTable;
