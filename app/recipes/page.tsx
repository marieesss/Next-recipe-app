"use client"
import CustomButton from '@/components/atoms/Button';
import Dropdown from '@/components/atoms/Dropdown';
import SearchBar from '@/components/molecules/SearchBar';
import RecipesList from '@/components/organism/RecipesList';
import { Recipe } from '@/types/Recipe';
import { getMeals } from '@/utils/services/recipes';
import { filterSearch } from '@/utils/utils';
import React, { useEffect, useState } from 'react'

const Index =  () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [nextPage, setNextPage] = useState<string | null>();
  // used to filter even on clicking Load More
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    fetchRecipes();
  }, []);

  // fetch recipes
  const fetchRecipes = async () => {
    try {
      const { recipes, next } = await getMeals();
      setRecipes(recipes);
      setNextPage(next);
    } catch (error) {
      console.log(error);
    }
  };

  // Handle search recipes
  const handleSearch = (value: string) => {
    setSearchValue(value)
     handleFilter()
  };

  const handleFilter = async () =>{
    if (searchValue.trim().length > 0) {
      const filtered = await filterSearch(recipes, searchValue);
      setFilteredRecipes(filtered);
    }
  }

  // Handle refresh recipes
  const handleRefresh = async () => {
    if (nextPage) {
      try {
        // retrieve new recipes
        const { recipes: newRecipes, next: newNextPage } = await getMeals(nextPage);
        setRecipes([...recipes, ...newRecipes]);
        setNextPage(newNextPage);
        handleFilter()
      } catch (error) {
        console.error('Error refreshing recipes:', error);
      }
    }
  };

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <Dropdown recipes={recipes} setFilteredRecipes={setFilteredRecipes}/>
      {filteredRecipes.length > 0 ? (
        <>
          <RecipesList recipesList={filteredRecipes} />
          {nextPage && <CustomButton text={'Load More'} handleClick={handleRefresh} />}
        </>
      ) : recipes.length > 0 ? (
        <>
        <RecipesList recipesList={recipes} />
        {recipes && <CustomButton text={'Load More'} handleClick={handleRefresh} />}
      </>
      ) :
      (
        <div className="flex-1 w-full flex flex-col gap-20 items-center">
          No matching recipes found
        </div>
      )}
    </div>
  );
}

export default Index
