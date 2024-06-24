"use server"
import { MainRecipe, MyRecipe, Recipe } from "@/types/Recipe";
import { createClient } from "../supabase/client"
import { MyIngredient } from "@/types/Ingredient";

let  database = createClient();

export async function createMyRecipe(recipe : MyRecipe) {
    try {
        // Create recipe
        const recipeId = await creatRecipe(recipe)

        // Create ingredients
        const arrayIngredients = recipe.ingredients
        await createIngredients(arrayIngredients, recipeId)
        

        return data;
    } catch (error) {
        console.error('Error fetching favorites:', error);
        throw error;
    }
}

async function creatRecipe(recipe : MyRecipe){
    try {
        // Create a recipe
        const { data, error } = await database
        .from('my_recipes')
        .insert({ label: recipe.label, yield : recipe.yield, description : recipe.description})
        .select()

        if(error){
            return error
        }

        const recipeId : number= data?.id 
        return recipeId          
    } catch (error) {
        return error
    }

}

async function createIngredients(arrayIngredients : MyIngredient[], recipeId : number){
    try {
        const data : IngredientRequest= arrayIngredients.map((ingredient)=>(ingredient.recipeId = recipeId))
        const { error } = await supabase
        .from('countries')
        .insert([
            { id: 1, name: 'Nepal' },
            { id: 1, name: 'Vietnam' },
        ])

        if(error){
            return error
        }

        const recipeId : number= data?.id 
        return recipeId          
    } catch (error) {
        return error
    }

}