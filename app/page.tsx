import RecipesList from "@/components/organism/RecipesList";
import { getMeals } from "@/utils/services/recipes";

export default async function Index() {
  const res = await getMeals();

  if (res && res.length > 0) {

    return (
      <>
  <input
    type="text"
    id="Search"
    placeholder="Search for..."
    className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
  /> 
      <RecipesList recipesList={res}/>

      </>
    );

  }

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      No data available
    </div>
  );
}
