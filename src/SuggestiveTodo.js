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
      <h3>An idea for today!</h3>

      {todo.link ?
      <div><a href={todo.link} target="_blank">{activity}</a></div> :
      <p>{activity}</p>}

      <button onClick={() => {fetchTodo()}}>Next..</button>
    </>
  );
}


export default SuggestiveTodo;
