import React from "react";
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';


import DateTime from './DateTime';
import SuggestiveTodosList from './SuggestiveTodo';
import RecipesList from './RecipesList';
import ChatApp from './ChatApp';



const App = () => {
  return (
    <>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography className="app-title" variant="h5">
            QuaranTEAM
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <DateTime/>
        </Grid>

        <Grid item xs={6}>
          <SuggestiveTodosList/>
        </Grid>

        <Grid item xs={6}>
          <RecipesList/>
        </Grid>

        <Grid item xs={6}>
          <ChatApp/>
        </Grid>
      </Grid>

    </>
  );
}


export default App;
