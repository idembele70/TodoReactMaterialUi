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
    else if (getLocalStorage()) return setData(getLocalStorage)
  }, [data]
  )
  const addData = (message) => {
    setData([...data, { message, id: data.length }])
  }

  const deleteOneTodo = (todoId) => {
    console.log(todoId)
    setData(
      data => data.filter(todo => todo.id != todoId)
    )
  }
  return <Grid container justifyContent="center" spacing={2} >
    <Title />
    <AddTodo onAddTodo={addData} />
    {data.map(
      ({ message, id }) => <TodoRow key={id} message={message} id={id} editable={false} onDelete={deleteOneTodo} />
    )}
  </Grid>
}
