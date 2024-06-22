import { fetchData } from "./api";

export async function getMeals() {
    try {
        const url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=e54e42cd&app_key=501b216ff0da961baca2990d55216528%09&mealType=Dinner`;
        const res = await fetchData(url)
        const recipes = res.hits.map(hit => {
            const { label, image, ingredients, cuisineType, dietLabels, calories, cautions} = hit.recipe;
            return { label, image, ingredients, cuisineType, dietLabels, calories,  cautions};
        });
        return recipes;
        
    } catch (error) {
       return error
    }

}
