import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

/**
 * Represents a linked list data structure.
 *
 * @constructor
 * @returns {LinkedList} The LinkedList object.
 */
function LinkedList() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  const addFirst = () => {
    setList([value, ...list]);
    setValue("");
  };

  const addLast = () => {
    setList([...list, value]);
    setValue("");
  };

  const add = (index, element) => {
    if (index >= 0 && index <= list.length) {
      const updatedList = [...list];
      updatedList.splice(index, 0, element);
      setList(updatedList);
      setValue("");
    } else {
      alert("Invalid index");
    }
  };

  const removeFirst = () => {
    if (list.length > 0) {
      setList(list.slice(1));
    } else {
      alert("List is empty");
    }
  };

  const removeLast = () => {
    if (list.length > 0) {
      setList(list.slice(0, -1));
    } else {
      alert("List is empty");
    }
  };

  const remove = (index) => {
    if (index >= 0 && index < list.length) {
      const updatedList = [...list];
      updatedList.splice(index, 1);
      setList(updatedList);
    } else {
      alert("Invalid index");
    }
  };

  const getFirst = () => {
    if (list.length > 0) {
      alert(`First element: ${list[0]}`);
    } else {
      alert("List is empty");
    }
  };

  const getLast = () => {
    if (list.length > 0) {
      alert(`Last element: ${list[list.length - 1]}`);
    } else {
      alert("List is empty");
    }
  };

  const get = (index) => {
    if (index >= 0 && index < list.length) {
      alert(`Element at index ${index}: ${list[index]}`);
    } else {
      alert("Invalid index");
    }
  };

  const size = () => {
    alert(`List size: ${list.length}`);
  };

  const isEmpty = () => {
    if (list.length === 0) {
      alert("List is empty");
    } else {
      alert("List is not empty");
    }
  };

  const clear = () => {
    setList([]);
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
          onClick={addFirst}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Add First
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={addLast}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Add Last
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            const index = parseInt(prompt("Enter the index"), 10);
            if (!isNaN(index)) {
              add(index, value);
            } else {
              alert("Invalid index");
            }
          }}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Add at Index
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={removeFirst}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Remove First
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={removeLast}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Remove Last
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            const index = parseInt(prompt("Enter the index"), 10);
            if (!isNaN(index)) {
              remove(index);
            } else {
              alert("Invalid index");
            }
          }}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Remove at Index
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={getFirst}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Get First
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={getLast}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Get Last
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            const index = parseInt(prompt("Enter the index"), 10);
            if (!isNaN(index)) {
              get(index);
            } else {
              alert("Invalid index");
            }
          }}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Get at Index
        </Button>
        <Button
          variant="contained"
          color="info"
          onClick={size}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Size
        </Button>
        <Button
          variant="contained"
          color="warning"
          onClick={isEmpty}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Is Empty?
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={clear}
          sx={{ minWidth: "140px", whiteSpace: "nowrap" }}
        >
          Clear
        </Button>
      </Box>
      <Box mt={3}>
        <Typography variant="h6">Single Linked List</Typography>
        <Box display="flex" alignItems="center">
          {list.map((item, index) => (
            <React.Fragment key={index}>
              <animated.div style={props}>
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
              {index < list.length - 1 && (
                <ArrowForwardIcon style={{ marginRight: 10 }} />
              )}
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default LinkedList;
