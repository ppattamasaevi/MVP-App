import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Paper } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';


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
        <Typography gutterBottom variant="h6">It's a brand new day</Typography>

        {todo.link ?
        <div><Typography><a href={todo.link} target="_blank">{activity}</a></Typography></div> :
        <Typography>{activity}</Typography>}
        <br></br>
        <Button variant="contained" color="primary" size="small" onClick={() => {fetchTodo()}}>Next..</Button>
      </div>
    </Paper>
  );
}


export default SuggestiveTodo;
