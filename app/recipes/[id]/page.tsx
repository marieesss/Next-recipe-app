    "use client"
    import { Recipe } from '@/types/Recipe'
    import { AddToFavorites, isFavorite, removeFromFavorites } from '@/utils/services/favorite'
    import { getRecipeById } from '@/utils/services/recipes'
    import React, { useEffect, useState } from 'react'

    const RecipeDetails = ({ params }: { params: { id: string } }) => {
    const [recipe, setRecipe] = useState<Recipe>();
    const [isMyFavorite, setIsMyFavorite] = useState<boolean>(false);


    const initializeData = async() =>{
        // verify if recipe is in database as "favirites"
        const isMyFavoriteRes = await isFavorite(params.id)
        setIsMyFavorite(isMyFavoriteRes)
        // Get recipe by id
        const recipeRes = await getRecipeById(params.id)
        setRecipe(recipeRes)
    }


    useEffect(() => {
        initializeData()
    }, [params.id]);


    async function AddFav() {
        const error = await AddToFavorites(params.id, "")
        setIsMyFavorite(true)
        if(error){
            console.log(error)
        }
        
    }

    async function removeFav() {
        const error = await removeFromFavorites(params.id)
        setIsMyFavorite(false)
        if(error){
            console.log(error)
        }
        
    }


    if(recipe) return (
        <div>
        <section className="flex flex-row justify-around items-center p-6 bg-white shadow-lg rounded-lg">
        <img src={recipe.image} alt={recipe.label} className=" object-fit rounded-lg mb-4" />
        <div>
        <h1 className="text-2xl font-bold mb-2">{recipe.label}</h1>
        <h2 className="text-l font-bold mb-2">{recipe.yield}</h2>
        <ul className="list-disc list-inside mb-4">
            {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">{ingredient.text} </li>
            ))}
        </ul>

        <ul className="list-disc list-inside mb-4">
        </ul>
        <div className="flex space-x-4">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
        <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
            {isMyFavorite ?
            <button 
            onClick={removeFav}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
            Remove from favorites
            </button> :
            <button 
            onClick={AddFav}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
            Add to Favorites
            </button>
            }

        </div>
        </div>
        </section>
        </div>
    )
    }

    export default RecipeDetails
