import React, { useState } from 'react'
import Servings from './Servings'
import { Ingredient } from '@/types/Ingredient';
import IngredientItem from './Ingredients';

interface IngredientListProps {
    ingredients: Ingredient[];
    initialServings: number
  }

const IngredientList : React.FC<IngredientListProps> = ({ ingredients, initialServings}) => {
    const [servings, setServings] = useState<number>(initialServings);
    const handleAdd = ()=>{
        let newServings = servings
        if(newServings){
            setServings(++newServings)
        }else{
            setServings(1) 
        }
    }
    const handleRemove = ()=>{
        let newServings = servings
        if(newServings && newServings>0){
            setServings(--newServings)
        }     
    }
  return (
    <div>
      <Servings servingsNumber={servings} handleAddServing={handleAdd} handleRemoveServing={handleRemove} />
      {ingredients.map((ingredient: Ingredient, index)=>(
        <IngredientItem key={index} ingredientData={ingredient} servingsNumber={servings} initialServings={initialServings}/>
      ))}
    </div>
  )
}

export default IngredientList
