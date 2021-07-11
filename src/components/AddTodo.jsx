import { Box, Button, Grid, makeStyles, TextField, ThemeProvider } from "@material-ui/core"
import React, { useRef } from "react"
import theme from "../values/theme.js"
export default function AddTodo({ onAddTodo }) {
  const msgRef = useRef(null)
  const handleAddTodo = (e) => {
    e.preventDefault()
    onAddTodo(msgRef.current.value)
    msgRef.current.value = null
  }

  return <Grid item xs={6}>
    <Box boxShadow={2} p={4}>
      <form autoComplete="off">
        <TextField id="standard-basic" label="Add new todo" fullWidth variant="outlined" inputRef={msgRef} />
        <Box m="8px 0" >
          <ThemeProvider theme={theme}>
            <Grid container justifyContent="center">
              <Grid item>
                <Button type="submit" variant="contained" color="primary" onClick={handleAddTodo} >ADD</Button>
              </Grid>
            </Grid>
          </ThemeProvider>
        </Box>
      </form>
    </Box>
  </Grid>
}