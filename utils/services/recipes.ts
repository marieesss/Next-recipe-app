import { Hit, Recipe } from "@/types/Recipe";
import { fetchData } from "./api";

const initUrl = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${process.env.NEXT_PUBLIC_RECIPE_ID}&app_key=${process.env.NEXT_PUBLIC_RECIPE_KEY}&mealType=Dinner`;

export async function getMeals(url = initUrl) {
    try {
        const res = await fetchData(url);
        const next = res._links.next.href
        const recipes = res.hits.map((hit: Hit) => {
            const {
                label,
                image,
                ingredients,
                cuisineType,
                dietLabels,
                calories,
                cautions,
                uri
            } = hit.recipe;
            return {
                label,
                image,
                ingredients,
                cuisineType,
                dietLabels,
                calories,
                cautions,
                uri

            };
        });
        return {recipes, next};
    } catch (error) {
        console.error("Failed to fetch meals:", error);
        throw error;
    }
}

export async function getRecipeById(id : string) {
    try {
        const url = `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${process.env.NEXT_PUBLIC_RECIPE_ID}&app_key=${process.env.NEXT_PUBLIC_RECIPE_KEY}`;
        const res = await fetchData(url);  
        return res.recipe as Recipe;
    } catch (error) {
        throw error;
    }
}

