"use server"
import { EdamamResponse, Hit, Recipe, RecipeResponse } from "@/types/Recipe";
import { fetchData } from "./api";
import { Favorites } from "@/types/Favorites";
import { getFavorites } from "./favorite";

const initUrl = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${process.env.NEXT_PUBLIC_RECIPE_ID}&app_key=${process.env.NEXT_PUBLIC_RECIPE_KEY}&mealType=Dinner`;

export async function getMeals(url = initUrl) : Promise<RecipeResponse | Error>{
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
        if (error instanceof Error) {
            return error;
        }
        return new Error("An unknown error occurred");
    }
}

export async function getRecipeById(id : string) : Promise<Recipe| Error>{
    try {
        const url = `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${process.env.NEXT_PUBLIC_RECIPE_ID}&app_key=${process.env.NEXT_PUBLIC_RECIPE_KEY}`;
        const res = await fetchData(url) ;  
        return res.recipe as Recipe;
    }catch (error) {
        if (error instanceof Error) {
            return error;
        }
        return new Error("An unknown error occurred");
    }
}

export async function getRecipesSuggestions(query : string) : Promise<Recipe[] | Error>  {
    try {
        const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.NEXT_PUBLIC_RECIPE_ID}&app_key=${process.env.NEXT_PUBLIC_RECIPE_KEY}`;
        const data = await fetchData(url) as EdamamResponse;  
        // retrieve the first 3 response
        const response = data.hits.slice(0, 3).map((hit)=> hit.recipe)
        return response as Recipe[];
    }catch (error) {
    if (error instanceof Error) {
        return error;
    }
    return new Error("An unknown error occurred");
}
}

export async function getRecipesFavorites(): Promise<Recipe[] | Error> {
    try {
        let recipes =[] as Recipe[]
        // retrieve favorites id recipes from db
        const favoritesId = await getFavorites() as Favorites[];
        let promises
        if(favoritesId?.length > 0){

            // Get info about all favorites recipes
            promises = favoritesId.map(async (fav : Favorites) => {
                const recipe = await getRecipeById(fav.meal_id)
                // return favorite recipes and comments associated
                return {...recipe, comments: fav.comments };
            });
            const results = await Promise.allSettled(promises);
    
            // Return only results that has been ok 
            recipes = results
                .filter(result => result.status === 'fulfilled')
                .map(result => (result as PromiseFulfilledResult<Recipe>).value);
                return recipes;
        }
        return recipes
    } catch (error) {
        if (error instanceof Error) {
            return error;
        }
        return new Error("An unknown error occurred");
    }
}

