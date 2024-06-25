import { Recipe } from '@/types/Recipe'
import React from 'react'
import RecipesList from '../organism/RecipesList'

const Favorites = ({data} :{data : Recipe[]}) => {

  return (
    <div>
    <h1> Favorites </h1>
    <RecipesList recipesList={data}/>
    </div>
  )
}

export default Favorites
