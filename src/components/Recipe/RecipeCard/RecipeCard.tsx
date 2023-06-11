import React from 'react';

import Button from '../../Button/Button';
import { Recipe } from '../../../apis/useGetRecipes';
import RecipeIcon from '../../../assets/img/recipe.png';

import styles from './RecipeCard.module.css';

interface RecipeCardProps {
    className?: string;
    recipe: Recipe;
}

export default function RecipeCard({ className, recipe }: RecipeCardProps) {
    const handleClick = () => {
        window.open(`https://google.com/search?q=${recipe.name}`, '__bank');
    };

    return (
        <div className={`${styles['recipe-card-wrapper']} ${className}`}>
            <div className={styles['recipe-card']}>
                <div>
                    <div className={styles['recipe-card-title']}>
                        <img src={RecipeIcon} className={styles['recipe-card-icon']} alt="recipe" />
                        <h3>Difficulty: {recipe.difficulty}</h3>
                    </div>
                    <p className={styles['recipe-card-description']}>
                        {recipe.description}
                    </p>
                </div>
                <Button className={styles['recipe-card-action']} onClick={handleClick}>View Full Recipe</Button>
            </div>
        </div>
    )
}