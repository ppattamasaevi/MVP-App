import React from "react";

import DateTime from './DateTime';
import SuggestiveTodosList from './SuggestiveTodo';
import RecipesList from './RecipesList';
import ChatApp from './ChatApp';

const App = () => {
  return (
    <>
      <h1>
        QuaranTEAM
      </h1>
      <DateTime/>
      <SuggestiveTodosList/>
      <RecipesList/>
      <ChatApp/>
    </>
  );
}


export default App;
