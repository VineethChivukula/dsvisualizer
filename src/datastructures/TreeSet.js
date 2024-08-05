import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

/**
 * Represents a TreeSet data structure.
 *
 * @constructor
 * @returns {TreeSet} The TreeSet object.
 */
function TreeSet() {
  const [treeSet, setTreeSet] = useState({ set: new Set(), list: [] });
  const [value, setValue] = useState("");

  const handleAdd = () => {
    if (!treeSet.set.has(value)) {
      const newSet = new Set(treeSet.set).add(value);
      const newList = [...treeSet.list, value].sort();
      setTreeSet({ set: newSet, list: newList });
    }
    setValue("");
  };

  const handleRemove = () => {
    if (treeSet.set.has(value)) {
      const newSet = new Set(treeSet.set);
      newSet.delete(value);
      const newList = treeSet.list.filter((item) => item !== value);
      setTreeSet({ set: newSet, list: newList });
    }
    setValue("");
  };

  const handleContains = () => {
    if (treeSet.set.has(value)) {
      alert("Value exists in the TreeSet");
    } else {
      alert("Value does not exist in the TreeSet");
    }
    setValue("");
  };

  const handleSize = () => {
    alert(`TreeSet size: ${treeSet.set.size}`);
  };

  const handleIsEmpty = () => {
    if (treeSet.set.size === 0) {
      alert("TreeSet is empty");
    } else {
      alert("TreeSet is not empty");
    }
  };

  const handleClear = () => {
    setTreeSet({ set: new Set(), list: [] });
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
        <Typography variant="h6">Tree Set</Typography>
        <Box display="flex" flexWrap="wrap">
          {treeSet.list.map((item, index) => (
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

export default TreeSet;
