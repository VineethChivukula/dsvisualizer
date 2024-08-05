import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

/**
 * CircularLinkedList component represents a circular linked list data structure.
 * It allows adding, removing, and accessing elements in a circular manner.
 *
 * @component
 * @returns {JSX.Element} CircularLinkedList component
 */
function CircularLinkedList() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  const addFirst = () => {
    const newNode = { value, next: list[0] || null };
    if (list.length > 0) {
      list[list.length - 1].next = newNode;
    }
    setList([newNode, ...list]);
    setValue("");
  };

  const addLast = () => {
    const newNode = { value, next: list[0] || null };
    if (list.length > 0) {
      list[list.length - 1].next = newNode;
    }
    setList([...list, newNode]);
    setValue("");
  };

  const add = (index, element) => {
    if (index >= 0 && index <= list.length) {
      const newNode = { value: element, next: null };
      const updatedList = [...list];
      if (index === 0) {
        newNode.next = list[0] || newNode;
        if (list.length > 0) {
          list[list.length - 1].next = newNode;
        }
        updatedList.unshift(newNode);
      } else {
        newNode.next = updatedList[index];
        updatedList[index - 1].next = newNode;
        updatedList.splice(index, 0, newNode);
      }
      setList(updatedList);
      setValue("");
    } else {
      alert("Invalid index");
    }
  };

  const removeFirst = () => {
    if (list.length > 0) {
      const updatedList = list.slice(1);
      if (updatedList.length > 0) {
        updatedList[updatedList.length - 1].next = updatedList[0];
      }
      setList(updatedList);
    } else {
      alert("List is empty");
    }
  };

  const removeLast = () => {
    if (list.length > 0) {
      const updatedList = list.slice(0, -1);
      if (updatedList.length > 0) {
        updatedList[updatedList.length - 1].next = updatedList[0];
      }
      setList(updatedList);
    } else {
      alert("List is empty");
    }
  };

  const remove = (index) => {
    if (index >= 0 && index < list.length) {
      const updatedList = [...list];
      if (index === 0) {
        updatedList.pop();
        updatedList[updatedList.length - 1].next = updatedList[0];
        updatedList.shift();
      } else {
        updatedList[index - 1].next = updatedList[index + 1] || updatedList[0];
        updatedList.splice(index, 1);
      }
      setList(updatedList);
    } else {
      alert("Invalid index");
    }
  };

  const getFirst = () => {
    if (list.length > 0) {
      alert(`First element: ${list[0].value}`);
    } else {
      alert("List is empty");
    }
  };

  const getLast = () => {
    if (list.length > 0) {
      alert(`Last element: ${list[list.length - 1].value}`);
    } else {
      alert("List is empty");
    }
  };

  const get = (index) => {
    if (index >= 0 && index < list.length) {
      alert(`Element at index ${index}: ${list[index].value}`);
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

  const rotate = () => {
    if (list.length > 0) {
      const lastElement = list.pop();
      list.unshift(lastElement);
      setList([...list]);
    } else {
      alert("List is empty");
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
        onClick={addFirst}
        style={{ marginLeft: 10 }}
      >
        Add First
      </Button>
      <Button
        variant="contained"
        color="success"
        onClick={addLast}
        style={{ marginLeft: 10 }}
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
        style={{ marginLeft: 10 }}
      >
        Add at Index
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={removeFirst}
        style={{ marginLeft: 10 }}
      >
        Remove First
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={removeLast}
        style={{ marginLeft: 10 }}
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
        style={{ marginLeft: 10 }}
      >
        Remove at Index
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={getFirst}
        style={{ marginLeft: 10 }}
      >
        Get First
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={getLast}
        style={{ marginLeft: 10 }}
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
        style={{ marginLeft: 10 }}
      >
        Get at Index
      </Button>
      <Button
        variant="contained"
        color="info"
        onClick={size}
        style={{ marginLeft: 10 }}
      >
        Size
      </Button>
      <Button
        variant="contained"
        color="warning"
        onClick={isEmpty}
        style={{ marginLeft: 10 }}
      >
        Is Empty?
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={clear}
        style={{ marginLeft: 10 }}
      >
        Clear
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={rotate}
        style={{ marginLeft: 10 }}
      >
        Rotate
      </Button>
      <Box mt={3}>
        <Typography variant="h6">Circular Linked List</Typography>
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
                  {item.value}
                </Box>
              </animated.div>
              {index < list.length - 1 && (
                <ArrowForwardIcon style={{ marginRight: 10 }} />
              )}
            </React.Fragment>
          ))}
          {list.length > 0 && <ArrowForwardIcon style={{ marginRight: 10 }} />}
        </Box>
      </Box>
    </Box>
  );
}

export default CircularLinkedList;
