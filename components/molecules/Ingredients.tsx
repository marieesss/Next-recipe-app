import { Ingredient } from '@/types/Ingredient'
import React from 'react'

const IngredientItem = ({ingredientData, servingsNumber, initialServings} :{ingredientData : Ingredient, servingsNumber : number, initialServings : number}) => {
  return (
    <div>{((ingredientData.quantity/initialServings)*servingsNumber).toFixed(2)} {ingredientData.measure === "<unit>" ? "" : ingredientData.measure} {ingredientData.food}</div>
  )
}

export default IngredientItem
