import React, { useEffect, useState } from "react";
import { Grid } from '@material-ui/core';
import Title from "../components/Title";
import AddTodo from "../components/AddTodo"
import { addToLocalStorage, getLocalStorage } from "../services/todo.service";
import TodoRow from "../components/TodoRow";

export default function TodoList() {
  const [data, setData] = useState([])
  useEffect(() => {
    if (data.length && getLocalStorage() != data) {
      return addToLocalStorage(data);
    }
    setData(getLocalStorage)

  }, [data]
  )
  const addData = (newMessage) => {
    setData([...data, newMessage])
  }
  return <Grid container justifyContent="center" spacing={2} >
    <Title />
    <AddTodo onAddTodo={addData} />
    {data.map(
      (message, idx) => <TodoRow key={idx} message={message} />
    )}
  </Grid>
}
