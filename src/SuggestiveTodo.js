import React, { useState, useEffect } from 'react';
import axios from 'axios';


const SuggestiveTodo = () => {

  const [todo, setTodo] = useState({});

  const fetchTodo = () => {
    axios.get('/todo')
      .then(({data}) => {
        console.log(data);
        setTodo(data);
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  useEffect(() => {
    fetchTodo();
  },[]);

  const activity = todo.activity;

  return (
    <>
      <p>Here's an idea!</p>
      {todo.link ?
      <a href={todo.link} target="_blank">{activity}</a> : <p>{activity}</p>}


    </>
  );
}


export default SuggestiveTodo;
