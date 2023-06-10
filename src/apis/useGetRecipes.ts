import recipes from '../mocks/recipes';

export interface RecipePart {
    value: string;
    className?: string;
}

export interface RecipeDetails {
    label: string;
    parts: RecipePart[];
}

type SocialMedia = 'twitter' | 'telegram'

export interface Recipe {
    name: string;
    description: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    details: RecipeDetails[];
    icon: string;
    social_media: SocialMedia[];
}

export default function useGetRecipes(): Recipe[] {
    // assuming getting data from api's
    return recipes;
}