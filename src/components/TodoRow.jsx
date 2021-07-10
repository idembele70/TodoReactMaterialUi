import React from "react"
import { Grid, Checkbox, FormControlLabel, ThemeProvider, Box, Button, Paper, makeStyles } from "@material-ui/core"
import theme from "../values/theme"
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';

export default function TodoRow({message}) {
  return <Box width={"80vw"}>
    <Grid container alignItems="center">
      <Grid item xs={1}>
        <Grid container justifyContent="center">
          <ThemeProvider theme={theme} >
            <FormControlLabel
              control={<Checkbox icon={<CheckCircleOutlinedIcon color="primary" />} checkedIcon={<CheckCircleRoundedIcon color="primary" />} name="check" />}
            />
          </ThemeProvider>
        </Grid>
      </Grid>
      <Grid item xs={9}>
        {message}
      </Grid>
      <Grid item xs={1}>
        <Grid container justifyContent="space-around">
          <Grid item>
            <DeleteRoundedIcon style={{ cursor: "pointer" }} />
          </Grid>
          <Grid item>
            <CreateRoundedIcon style={{ cursor: "pointer" }} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Box>
}