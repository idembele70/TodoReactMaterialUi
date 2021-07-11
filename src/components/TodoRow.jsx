import { Box, Checkbox, FormControlLabel, Grid, ThemeProvider } from "@material-ui/core";
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import React from "react";
import theme from "../values/theme";

export default function TodoRow({ message, id, onDelete, editable }) {

  const handleDelete = (e) => {
    const { id, parentElement } = e.target
    if (id) onDelete(id)
    else onDelete(parentElement.id)
  }

  const handleEdit = (e) => {
    
  }

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
            <DeleteRoundedIcon id={id} style={{ cursor: "pointer" }} onClick={handleDelete} />
          </Grid>
          <Grid item>
            {
              editable ?
                <CheckCircleIcon id={id} style={{ cursor: "pointer" }}  onClick={handleEdit} />
                : <CreateRoundedIcon style={{ cursor: "pointer" }}  onClick={handleEdit} />
            }
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Box>
}