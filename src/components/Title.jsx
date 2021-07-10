import React from "react"
import { Box, Grid, Typography, makeStyles, ThemeProvider } from '@material-ui/core';
import theme from "../values/theme";

function Title() {
  return <Grid item xs={12} >
    <Box p={1} bgcolor={theme.palette.primary.main} >
      <ThemeProvider theme={theme}>
        <Typography variant="h6" align="center" color="textPrimary">TODO APP</Typography>
      </ThemeProvider>
    </Box>
  </Grid>
}

export default Title;