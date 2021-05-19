import React from "react";

import DateTime from './DateTime';
import SuggestiveTodosList from './SuggestiveTodo';
import RecipesList from './RecipesList';

const App = () => {
  return (
    <>
      <h1>
        Hello MVP
      </h1>
      <DateTime/>
      <SuggestiveTodosList/>
      <RecipesList/>
    </>
  );
}


export default App;
