import React from 'react'
import CustomButton from '../atoms/Button';

interface IngredientListProps {
    servingsNumber: number;
    handleAddServing: ()=>  void;
    handleRemoveServing: ()=>  void;
  }


const Servings : React.FC<IngredientListProps> = ({ servingsNumber, handleAddServing, handleRemoveServing}) => {
return (
    <div className="flex flex-row">
        <CustomButton variant={"success"} text='-' handleClick={handleRemoveServing}/>
        <h3>{servingsNumber ? servingsNumber : 0} servings</h3>
        <CustomButton variant={"success"} text='+' handleClick={handleAddServing}/>
    </div>
  )
}

export default Servings
