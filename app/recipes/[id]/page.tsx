    "use client"
import CustomButton from '@/components/atoms/Button'
import IngredientList from '@/components/organism/IngredientList'
import RecipesList from '@/components/organism/RecipesList'
    import { Recipe } from '@/types/Recipe'
    import { AddToFavorites, isFavorite, removeFromFavorites, updateFavorite } from '@/utils/services/favorite'
    import { getRecipeById, getRecipesSuggestions } from '@/utils/services/recipes'
    import React, { useEffect, useState } from 'react'

    const RecipeDetails = ({ params }: { params: { id: string } }) => {
    const [recipe, setRecipe] = useState<Recipe>();
    const [isMyFavorite, setIsMyFavorite] = useState<boolean>(false);
    const [comment, setComment] = useState<string>("");
    const [suggestions, setSuggestions] = useState<Recipe[]>([]);


    const initializeData = async() =>{
        // verify if recipe is in database as "favorite"
        // retrieve favorite
        const isMyFavoriteRes = await isFavorite(params.id)
        // if array empty, set false
        setIsMyFavorite( isMyFavoriteRes && isMyFavoriteRes.length >0 )
        if(isMyFavoriteRes && isMyFavoriteRes.length >0){
            setComment(isMyFavoriteRes[0].comments)
        }
        // Get recipe by id
        const recipeRes = await getRecipeById(params.id)
        setRecipe(recipeRes)
        let sug = await getRecipesSuggestions(recipeRes.dishType[0])
        setSuggestions(sug)
    }


    useEffect(() => {
        initializeData()
    }, [params.id]);


    async function AddFav() {
        const error = await AddToFavorites(params.id, comment)
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

    async function handleUpdateComment() {
        const error = await updateFavorite(params.id, comment)
        if(error){
            console.log(error)
        }
        
    }

    const handleCommentChange = (event:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>{
        setComment(event.target.value)
    }
    
    if(recipe) return (
        <div>
        <section className="flex flex-row justify-around items-center p-6 bg-white shadow-lg rounded-lg">
        <img src={recipe.image} alt={recipe.label} className=" object-fit rounded-lg mb-4" />
        <div>
        <h1 className="text-2xl font-bold mb-2">{recipe.label}</h1>
        <IngredientList initialServings={recipe.yield} ingredients={recipe.ingredients}/> 
        <ul className="list-disc list-inside mb-4">
        </ul>
        <div className="flex space-x-4">
        <div className="flex flex-col">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Any Comments ? </label>
        <textarea value={comment} onChange={handleCommentChange} id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
        </div>

        </div>
            {isMyFavorite ?
            <>
            <CustomButton 
            handleClick={handleUpdateComment}
            text='Update comment'
            variant='primary'
            />
             <CustomButton 
            handleClick={removeFav}
            text='Remove from favorites'
            variant='warning'
            />
            
            
            </>
            :
            <CustomButton 
            handleClick={AddFav}
            text='Add to favorite'
            variant={"success"}/>
            }

        </div>   
        </section>
        {suggestions.length > 0 ? 
            <div className="my-12 px-4">
            <h3>Other Suggestions</h3>
            <RecipesList recipesList={suggestions}/>
        </div>
     : null }
        </div>
    )
    }

    export default RecipeDetails
