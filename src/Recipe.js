import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';


const Recipe = ({ recipe }) => {

  const {title, thumbnail, href, ingredients} = recipe;

  return (
    <div>
      <Typography>
        <a target="_blank" href={href}>{title}</a>
      </Typography>
    </div>
  );

}

export default Recipe;