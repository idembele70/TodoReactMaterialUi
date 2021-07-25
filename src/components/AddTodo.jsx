import { Box, Button, Grid, TextField, ThemeProvider } from "@material-ui/core"
import React, { useRef, useState } from "react"
import theme from "../values/theme.js"
export default function AddTodo({ onAddTodo }) {
  const msgRef = useRef(null)
  const [error, setError] = useState(false)
  const handleAddTodo = (e) => {
    e.preventDefault()
    if(!msgRef.current.value) 
    return setError(true)
    if(error) setError(false)
    onAddTodo(msgRef.current.value)
    msgRef.current.value = null
  }

  return <Grid item xs={11} sm={6}>
    <Box boxShadow={2} p={4}>
      <form autoComplete="off">
        <TextField id={"standard-"+(error ?"error" : "basic")} error={error} label="Add new todo" fullWidth variant="outlined" inputRef={msgRef} helperText={error ? "this input value cannot be null" : ""} />
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