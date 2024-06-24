import { Recipe } from '@/types/Recipe'
import React from 'react'
import RecipesList from '../organism/RecipesList'

const Favorites = ({data} :{data : Recipe[]}) => {
    console.log(data)

  return (
    <div>
    <h1> Favorites </h1>
    <RecipesList recipesList={data}/>
    </div>
  )
}

export default Favorites
