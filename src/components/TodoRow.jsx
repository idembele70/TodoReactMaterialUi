import { Box, Checkbox, FormControlLabel, Grid, ThemeProvider, TextField } from "@material-ui/core";
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import React, { useRef } from "react";
import theme from "../values/theme";

export default function TodoRow({ message, id, editable,done, onDelete, onEditTodo, onDone }) {
  const newMessage = useRef(message);
  const isDone = useRef(done);

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
    const { id, parentElement } = e.target;
    if (id) return onDone(id)
    onDone(parentElement.id)
  }

  return <Box width={"80vw"}>
    <Grid container alignItems="center">
      <Grid item xs={1}>
        <Grid container justifyContent="center">
          <ThemeProvider theme={theme} >
            <FormControlLabel onClick={handleDone} inputRef={isDone}
              control={<Checkbox icon={<CheckCircleOutlinedIcon id={id} color="primary" />} checkedIcon={<CheckCircleRoundedIcon id={id} color="primary" />} name="check" />}
            />
          </ThemeProvider>
        </Grid>
      </Grid>
      <Grid item xs={9}>
        {editable ? <form id={id + ""} onSubmit={handleEdit} autoComplete="off">
          <TextField id={id + ""} label="Update your todo" defaultValue={message} inputRef={newMessage} variant="filled" />
        </form>
          :
          message
        }
      </Grid>
      <Grid item xs={1}>
        <Grid container justifyContent="space-around">
          <Grid item>
            <DeleteRoundedIcon id={id} style={{ cursor: "pointer" }} onClick={handleDelete} />
          </Grid>
          <Grid item>
            {
              editable ?
                <CheckCircleIcon id={id} style={{ cursor: "pointer" }} onClick={handleEdit} />
                : <CreateRoundedIcon id={id} style={{ cursor: "pointer" }} onClick={handleEdit} />
            }
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Box>
}