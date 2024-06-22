import React from 'react';
import Card from '../molecules/Card';

interface MealListProps {
  recipesList: Array<any>; 
}

const RecipesList: React.FC<MealListProps> = ({ recipesList }) => {

  return (
    <div className="w-full flex flex-wrap justify-between gap-4 px-8">
      {recipesList.map((meal, index) => (
        <Card
          key={index} 
          redLabels={meal.cautions}
          images={meal.image}
          calories={meal.calories}
          cuisineType={meal.cuisineType}
          label={meal.label}
          greenlabels={meal.dietLabels}
          ingredients={meal.ingredients}
        />
      ))}
        </div>

  );
};

export default RecipesList;
