import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Paper } from '@material-ui/core';
import { Button } from '@material-ui/core';



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
    <Paper className="paper">
      <div>
        <h3>Here's an idea</h3>

        {todo.link ?
        <div><a href={todo.link} target="_blank">{activity}</a></div> :
        <p>{activity}</p>}

        <Button variant="contained" color="primary" size="small" onClick={() => {fetchTodo()}}>Next..</Button>
      </div>
    </Paper>
  );
}


export default SuggestiveTodo;
