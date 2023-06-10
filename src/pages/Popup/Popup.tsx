import React, { useState } from 'react';
import Autocomplete, { AutocompleteItem } from '../../components/Autocomplete/Autocomplete';

import styles from './Popup.module.css';
import useGetRecipes, { Recipe } from '../../apis/useGetRecipes';
import RecipeComponent from '../../components/Recipe/Recipe';


export default function Popup () {
  const recipes = useGetRecipes();
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe>({ ...recipes[0] }); // selecting default as first Recipe

  const handleClear = () => {
    setSelectedRecipe(recipes[0]);
  };
  
  const handleSelect= (value: AutocompleteItem) => {
    const recipe = recipes.find(r => r.name === value.id)!;
    setSelectedRecipe(recipe)
  };

  return (
    <div className={styles['App']}>
      <Autocomplete items={recipes.map(recipe => ({ name: recipe.name, id: recipe.name }))} onSelect={handleSelect} onClear={handleClear} />
      {
        selectedRecipe && (
          <RecipeComponent recipe={selectedRecipe} />
        )
      }
    </div>
  );
};
