import React from 'react';

import { Recipe } from '../../apis/useGetRecipes';
import styles from './RecipeDetails.module.css';


interface RecipeDetailsProps {
  className?: string;
  recipe: Recipe;
}

export default function RecipeDetails({ className, recipe }: RecipeDetailsProps) {
  return (
    <div className={`${styles['recipe-details']} ${className}`}>
      {recipe.details.map((detail, index) => (
        <div className={styles['recipe-details-wrapper']} key={index}>
          <div className={styles['recipe-details-label']}>{detail.label}</div>
          <div className={styles['recipe-details-value']}>
            {detail.parts.map((part, partIndex, parts) => (
                <span key={part.value + partIndex} >
                    <span className={part.className} >
                        {part.value}
                    </span>
                    {parts.length > 1 && partIndex < parts.length - 1 && <> / </>}
                </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
