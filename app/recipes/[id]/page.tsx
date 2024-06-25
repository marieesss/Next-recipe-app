"use client";
import { Recipe as RecipeType } from '@/types/Recipe';
import Recipe from '@/components/organism/Recipe';
import RecipesList from '@/components/organism/RecipesList';
import { isFavorite } from '@/utils/services/favorite';
import { getRecipeById, getRecipesSuggestions } from '@/utils/services/recipes';
import React, { useCallback, useEffect, useState } from 'react';

const RecipeDetails = ({ params }: { params: { id: string } }) => {
  const [recipe, setRecipe] = useState<RecipeType>();
  const [isMyFavorite, setIsMyFavorite] = useState<boolean>(false);
  const [suggestions, setSuggestions] = useState<RecipeType[]>([]);
  const [comment, setComment] = useState<string>();

  const initializeData = useCallback(async () => {
    try {
      const isMyFavoriteRes = await isFavorite(params.id);
      if(isMyFavoriteRes instanceof Error){
        return 
      }
      setIsMyFavorite(isMyFavoriteRes && isMyFavoriteRes.length > 0);
      if (isMyFavoriteRes && isMyFavoriteRes.length > 0) {
        setComment(isMyFavoriteRes[0].comments);
      }
      const recipeRes = await getRecipeById(params.id);
      if(recipeRes instanceof Error){
        return 
      }
      setRecipe(recipeRes);
      const sug = await getRecipesSuggestions(recipeRes.dishType[0]);
      if(sug instanceof Error){
        return 
      }
      setSuggestions(sug);
    } catch (error) {
      console.error("Error initializing data:", error);
    }
  }, [params.id]);


  useEffect(() => {
    initializeData();
  }, [params.id]);

  if (recipe)
    return (
      <div>
        <Recipe 
            recipe={recipe} 
            id={params.id} 
            favorite={isMyFavorite} 
            commentMessage={comment ? comment : ""} 
        />

        {suggestions.length > 0 ? (
          <div className="my-12 px-4">
            <h3>Other Suggestions</h3>
            <RecipesList recipesList={suggestions} />
          </div>
        ) : null}
      </div>
    );

  return null;
};

export default RecipeDetails;
