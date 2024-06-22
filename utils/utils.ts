import { Recipe } from "@/types/Recipe";

// filter based on name
export function filterSearch(recipes : Recipe[], value : string){
    return recipes.filter(recipe =>
        recipe.label.toLowerCase().includes(value.toLowerCase())
      );

}