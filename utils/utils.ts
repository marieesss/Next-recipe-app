"use server"
import { Recipe } from "@/types/Recipe";

// filter based on name
export async function filterSearch(recipes : Recipe[], value : string){
    return recipes.filter(recipe =>
        recipe.label.toLowerCase().includes(value.toLowerCase())
      );

}

// Reorder list in ascending order
// reorder by key (ex: label, calories...)
export async function ascendingReorderList(liste: Array<Recipe>, key: keyof Recipe) {
  return liste.sort((a, b) => {
    const aValue = a[key];
    const bValue = b[key];

    // Reorder for string
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return aValue.toLowerCase().localeCompare(bValue.toLowerCase());
    }

    // Reorder for number
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return aValue - bValue;
    }

    return 0;
  });
}
// Reorder list in descending order
// reorder by key (ex: label, calories...)
export async function descendingReorderList(liste: Recipe[], key: keyof Recipe) {
  return liste.sort((a, b) => {
    const aValue = a[key];
    const bValue = b[key];

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return bValue.toLowerCase().localeCompare(aValue.toLowerCase());
    }

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return bValue - aValue;
    }

    return 0;
  });
}