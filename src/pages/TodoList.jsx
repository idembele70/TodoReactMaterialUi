import { Grid } from '@material-ui/core';
import React, { useState, useEffect } from "react";
import AddTodo from "../components/AddTodo";
import Title from "../components/Title";
import TodoRow from "../components/TodoRow";
import { addToLocalStorage, getLocalStorage } from "../services/todo.service";

export default function TodoList() {
  const [data, setData] = useState(getLocalStorage())

  useEffect(
    () => console.log(data), [data]
  )

  const addData = (message) => {
    const newData = [...data, { message, id: data.length, editable: false, done: false }]
    setData(newData)
    addToLocalStorage(newData)
  }

  const deleteOneTodo = (todoId) => {
    const newData = []
    data.forEach(
      todo => todo.id != todoId ? newData.push(todo) : null
    )
    setData(newData)
    addToLocalStorage(newData)
  }
  const editOneTodo = (todoId, newValue) => {
    const todo = data.find(todo => todo.id == todoId)
    todo.editable = !todo.editable;
    const newData = [];
    if (todo.editable) {
      data.forEach(t => t.id != todoId ? newData.push(t) : newData.push(todo))
    } else {
      if (newValue)
        todo.message = newValue;
      data.forEach(t => t.id != todoId ? newData.push(t) : newData.push(todo))
    }
    addToLocalStorage(newData)
    setData(newData)
  }

  const doneOneTodo = (todoId) => {
    const todo = data.find(t => t.id == todoId)
    todo.done = !todo.done
    const newData = [];
    data.forEach(t => t.id == todoId ? newData.push(todo) : newData.push(t))
    addToLocalStorage(newData);
    setData(newData);
  }
  return <Grid container justifyContent="center" spacing={2}>
    <Title />
    <AddTodo onAddTodo={addData} />
    {data.map(
      ({ message, id, editable }) => <TodoRow key={id} message={message} id={id} editable={editable} onDelete={deleteOneTodo} onEditTodo={editOneTodo} onDone={doneOneTodo} />
    )}
  </Grid>
}
