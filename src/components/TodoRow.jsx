import { Box, Checkbox, FormControlLabel, Grid, ThemeProvider, TextField, Typography } from "@material-ui/core";
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import React, { useRef, useState } from "react";
import theme from "../values/theme";

function useToggleDone(initialValue) {
  const [isDone, setDone] = useState(initialValue)
  const onToggleDone = () => setDone(!isDone)
  return [isDone, onToggleDone]
}

export default function TodoRow({ message, id, editable, done, onDelete, onEditTodo, onDone }) {
  const newMessage = useRef(message);
  const [isDone, onToggleDone] = useToggleDone(done)
  const handleDelete = (e) => {
    const { id, parentElement } = e.target
    if (id)
      return onDelete(id);
    return onDelete(parentElement.id);
  }

  const handleEdit = (e) => {
    e.preventDefault();
    const { id, parentElement } = e.target;
    if (id) return onEditTodo(id, newMessage.current ? newMessage.current.value : "");
    return onEditTodo(parentElement.id, newMessage.current ? newMessage.current.value : "");
  }

  const handleDone = (e) => {
    const { name } = e.target;
    onToggleDone()
    if (name) return onDone(name)
  }

  return <Box width={"80vw"}>
    <Grid container alignItems="center">
      <Grid item xs={1}>
        <Grid container justifyContent="center">
          <ThemeProvider theme={theme} >
            <FormControlLabel onClick={handleDone} checked={isDone}
              control={<Checkbox icon={<CheckCircleOutlinedIcon color="primary" />} checkedIcon={<CheckCircleRoundedIcon color="primary" />} name={id + " "} />}
            />
          </ThemeProvider>
        </Grid>
      </Grid>
      <Grid item xs={9}>
        {editable ? <form id={id + ""} onSubmit={handleEdit} autoComplete="off">
          <TextField id={id + ""} label="Update your todo" defaultValue={message} inputRef={newMessage} variant="filled" />
        </form>
          :
          <Typography variant="body1" style={{ textDecoration: done ? "line-through" : "none" }}>{message}</Typography>
        }
      </Grid>
      <Grid item xs={1}>
        <Grid container justifyContent="space-around">
          <Grid item>
            <DeleteRoundedIcon id={id + ""} style={{ cursor: "pointer" }} onClick={handleDelete} />
          </Grid>
          <Grid item>
            {
              editable ?
                <CheckCircleIcon id={id + ""} style={{ cursor: "pointer" }} onClick={handleEdit} />
                : <CreateRoundedIcon id={id + ""} style={{ cursor: "pointer" }} onClick={handleEdit} />
            }
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Box>
}