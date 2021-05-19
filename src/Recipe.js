import React, { useState, useEffect } from 'react';

const Recipe = ({ recipe }) => {

  const {title, thumbnail, href, ingredients} = recipe;

  return (
    <div>
      <a target="_blank" href={href}>{title}</a>

    </div>
  );

}

export default Recipe;