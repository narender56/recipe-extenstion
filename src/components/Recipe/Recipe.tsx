import React from 'react';

import { Recipe } from '../../apis/useGetRecipes';
import RoundedIcon from '../RoundedIcon/RoundedIcon';
import RecipeCard from './RecipeCard/RecipeCard';
import RecipeDetails from './RecipeDetails/RecipeDetails';

import styles from './Recipe.module.css';

interface RecipeComponentProps {
    recipe: Recipe
};

export default function RecipeComponent({ recipe }: RecipeComponentProps) {
    return (
        <div className={styles['recipe-wrapper']}>
            <div className={styles['recipe-card-title-wrapper']}>
            <div className={styles['recipe-card-title']}>
                <img src={recipe.icon} className={styles['recipe-card-icon']} alt="recipe" />
                <h4>{recipe.name}</h4>
            </div>
            <div className={styles['recipe-social-media-icons']}>
                {
                    recipe.social_media.map(social_media => <RoundedIcon key={social_media} icon={social_media} />)
                }
            </div>
            </div>
            <RecipeCard recipe={recipe} className={styles['recipe-card']} />
            <RecipeDetails recipe={recipe} className={styles['recipe-details']} />
         </div>
    )
}