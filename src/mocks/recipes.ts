import { Recipe } from "../apis/useGetRecipes";

const Recipes: Recipe[] = [
    {
        name: 'Classic Margherita Pizza',
        description: 'A simple and flavorful pizza with fresh tomatoes, mozzarella cheese, and basil.',
        difficulty: 'Medium',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Spain_%28Civil%29.svg/2560px-Flag_of_Spain_%28Civil%29.svg.png',
        social_media: ['telegram', 'twitter'],
        details: [
            {
                label: 'Crust',
                parts: [{ value: 'Pizza Dough' }],
            },
            {
                label: 'Sauce',
                parts: [{ value: 'Tomato Sauce' }],
            },
            {
                label: 'Toppings',
                parts: [
                    { value: 'Fresh Tomatoes', className: 'primary-radiant'},
                    { value: 'Mozzarella Cheese', className: 'secondary-radiant' },
                ],
            },
            {
                label: 'Seasonings',
                parts: [{ value: 'Salt', className: 'primary-radiant' }, { value: 'Black Pepper', className: 'secondary-radiant' }],
            },
            {
                label: 'Cooking Temperature',
                parts: [{ value: '450°F' }],
            },
            {
                label: 'Serves',
                parts: [{ value: '2' }],
            },
        ],
    },
    {
        name: 'Chocolate Chip Cookies',
        description: 'Soft and chewy cookies loaded with chocolate chips.',
        difficulty: 'Hard',
        icon: 'https://static.vecteezy.com/system/resources/previews/011/610/511/original/national-flag-of-united-arab-emirates-uae-dubai-official-color-and-original-proportion-illustration-free-vector.jpg',
        social_media: ['twitter'],
        details: [
            {
                label: 'Dry Ingredients',
                parts: [
                    { value: '2 1/4 cups All-Purpose Flour' },
                    { value: '1/2 teaspoon Baking Soda' },
                ],
            },
            {
                label: 'Wet Ingredients',
                parts: [
                    { value: '1 cup Unsalted Butter, softened' },
                    { value: '3/4 cup Granulated Sugar' },
                ],
            },
            {
                label: 'Mix-ins',
                parts: [{ value: '2 cups Chocolate Chips', className: 'secondary-radiant' }],
            },
            {
                label: 'Baking Temperature',
                parts: [{ value: '375°F' }],
            },
            {
                label: 'Baking Time',
                parts: [{ value: '10-12 minutes' , className: 'secondary-radiant'}],
            },
        ],
    },
]

export default Recipes;