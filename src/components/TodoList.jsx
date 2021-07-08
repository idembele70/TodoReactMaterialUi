import React from "react"
import { Typography, Grid, Box, createTheme, makeStyles, TextField, Button } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: "#6112B0",
      light: "#430c81",
      dark: "#0000",
      contrastText: "#ffff",
    }
  }
})

const useStyles = makeStyles(
  {
    title: {
      color: theme.palette.primary.contrastText,
    },
    addBtn: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
    },
    centerChild: {
      display: "flex",
      justifyContent: "center"
    }
  }
)

function Title({ className }) {
  return <Grid item xs={12} >
    <Box p={1} bgcolor={theme.palette.primary.main} >
      <Typography variant="h6" align="center" className={className} >TODO APP</Typography>
    </Box>
  </Grid>
}

function AddTodo() {
  return <Grid item xs={6}  >
    <Box boxShadow={2} p={4}>
      <form autoComplete="off">
        <TextField id="standard-basic" label="Add new todo" fullWidth variant="outlined" />
        <Box m="8px 0" className={useStyles().centerChild} >
          <Button variant="contained" className={useStyles().addBtn} >ADD</Button>
        </Box>
      </form>
    </Box>
  </Grid>
}

export default function TodoList() {
  const { title } = useStyles();
  return <Grid container justifyContent="center" spacing={2} >
    <Title className={title} />
    <AddTodo />
  </Grid>
}
