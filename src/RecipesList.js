import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Recipe from './Recipe';
import { Paper } from '@material-ui/core';
import { Button } from '@material-ui/core';



const RecipesList = () => {

  const [ingres, setIngres] = useState('');
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = () => {
    axios.get('/recipes', {
      params: {
        ingredients: ingres
      }
    })
      .then(({data}) => {
        setRecipes(data.results.slice(0, 5));
      })
      .catch((err) => {
        console.log(err.message);
      })
  }

  return (
    <Paper className="paper">
      <h3>Find Food Recipes</h3>

      <label htmlFor="ingredients"></label>
      <input id="ingreInput" name="ingredients" type="text" placeholder="Ingredients" onChange={(event) => {
        setIngres(event.target.value);
      }}></input>
      <br></br>
      <br></br>
      <Button variant="contained" color="primary" size="small" onClick={(event) => {
        fetchRecipes();
        document.getElementById('ingreInput').value = '';
      }}>Find Recipes!</Button>

      {recipes.map((recipe) =>
        <Recipe recipe={recipe} key={recipe.title}/>
      )}
    </Paper>
  );

}

export default RecipesList;