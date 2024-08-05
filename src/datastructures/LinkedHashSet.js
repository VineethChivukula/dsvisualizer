import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

/**
 * Represents a LinkedHashSet.
 *
 * @constructor
 * @returns {LinkedHashSet} The LinkedHashSet object.
 */
function LinkedHashSet() {
  const [linkedHashSet, setLinkedHashSet] = useState({
    set: new Set(),
    list: [],
  });
  const [value, setValue] = useState("");

  const handleAdd = () => {
    if (!linkedHashSet.set.has(value)) {
      const newSet = new Set(linkedHashSet.set).add(value);
      const newList = [...linkedHashSet.list, value];
      setLinkedHashSet({ set: newSet, list: newList });
    }
    setValue("");
  };

  const handleRemove = () => {
    if (linkedHashSet.set.has(value)) {
      const newSet = new Set(linkedHashSet.set);
      newSet.delete(value);
      const newList = linkedHashSet.list.filter((item) => item !== value);
      setLinkedHashSet({ set: newSet, list: newList });
    }
    setValue("");
  };

  const handleContains = () => {
    if (linkedHashSet.set.has(value)) {
      alert("Value exists in the LinkedHashSet");
    } else {
      alert("Value does not exist in the LinkedHashSet");
    }
    setValue("");
  };

  const handleSize = () => {
    alert(`LinkedHashSet size: ${linkedHashSet.set.size}`);
  };

  const handleIsEmpty = () => {
    if (linkedHashSet.set.size === 0) {
      alert("LinkedHashSet is empty");
    } else {
      alert("LinkedHashSet is not empty");
    }
  };

  const handleClear = () => {
    setLinkedHashSet({ set: new Set(), list: [] });
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
        onClick={handleContains}
        style={{ marginLeft: 10 }}
      >
        Contains
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
        <Typography variant="h6">Linked Hash Set</Typography>
        <Box display="flex" flexWrap="wrap">
          {linkedHashSet.list.map((item, index) => (
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

export default LinkedHashSet;
