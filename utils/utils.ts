"use server"
import { Recipe } from "@/types/Recipe";

// filter based on name
export async function filterSearch(recipes : Recipe[], value : string){
    return recipes.filter(recipe =>
        recipe.label.toLowerCase().includes(value.toLowerCase())
      );

}