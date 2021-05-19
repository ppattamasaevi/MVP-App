import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Recipe from './Recipe';

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
    <>
      <h3>Don't know what to cook?</h3>

      <label htmlFor="ingredients"></label>
      <input id="ingreInput" name="ingredients" type="text" placeholder="Ingredients" onChange={(event) => {
        setIngres(event.target.value);
      }}></input>
      <button onClick={(event) => {
        fetchRecipes();
        document.getElementById('ingreInput').value = '';
      }}>Find Recipes!</button>

      {recipes.map((recipe) =>
        <Recipe recipe={recipe} key={recipe.title}/>
      )}
    </>
  );

}

export default RecipesList;