import React, { useState } from 'react';
import { Recipe } from '@/types/Recipe';
import { ascendingReorderList, descendingReorderList } from '@/utils/utils';
const Dropdown = ({ recipes, setFilteredRecipes }: { recipes: Recipe[], setFilteredRecipes: (recipes: Recipe[]) => void }) => {
  const [filterKey, setFilterKey] = useState<string>('label');
  let ascendingValues = ["label", "calories"]
  let descendingValues = ["!label", "!calories"]

  async function handleFilter(value: string) {
    setFilterKey(value); 

    let filtered: Recipe[];

    // If value is in array, do ascending sort based on key
    if (ascendingValues.find((ascendingValue)=> ascendingValue == value)) {
      filtered = await ascendingReorderList(recipes, value as keyof Recipe);
    // If value is in array, do descending sort based on key
    // Remove ! 
    } else if (descendingValues.find((descendingValues)=> descendingValues == value)) {
      filtered = await descendingReorderList(recipes, value.substring(1) as keyof Recipe);
    } else {
      return; 
    }

    setFilteredRecipes(filtered);
  }

  return (
    <div className="mb-4">
      <label htmlFor="filter" className="block text-sm font-medium text-gray-700">
        Filter by:
      </label>
      <select
        id="filter"
        name="filter"
        value={filterKey}
        onChange={(e) => handleFilter(e.target.value as keyof Recipe)}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        <option disabled value="label">Please choose</option>
        <option value="label">Label A-Z</option>
        <option value="calories">Calories 1-9</option>
        <option value="!label">Label Z-A</option>
        <option value="!calories">Calories 9-1</option>
      </select>
    </div>
  );
};

export default Dropdown;
