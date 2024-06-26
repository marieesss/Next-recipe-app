import React, { SetStateAction, useState } from 'react';
import IngredientList from '../molecules/IngredientList';
import { Recipe as RecipeType } from '@/types/Recipe';
import { AddToFavorites, removeFromFavorites, updateFavorite } from '@/utils/services/favorite';
import CustomButton from '../atoms/Button';

interface RecipeProps {
  recipe: RecipeType;
  id: string;
  favorite: boolean;
  commentMessage : string
}

const Recipe: React.FC<RecipeProps> = ({ recipe, id, favorite, commentMessage }) => {
  const [comment, setComment] = useState<string>(commentMessage);
  const [isMyFavorite, setIsMyFavorite] = useState<boolean>(favorite);

  // Add recipe to database table "favorites"
  async function AddFav() {
    await AddToFavorites(id, comment);
    setIsMyFavorite(true);
  }
// remove recipe from database table "favorites"
  async function removeFav() {
    await removeFromFavorites(id);
    setIsMyFavorite(false);
  }

  // If favorite
  // update recipe from database table "favorites"
  async function handleUpdateComment() {
    await updateFavorite(id, comment);

  }

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setComment(event.target.value);
  };

  return (
    <section className="flex flex-row justify-around items-center p-6 bg-white shadow-lg rounded-lg">
      <img src={recipe.image} alt={recipe.label} className="object-fit rounded-lg mb-4" />
      <div>
        <h1 className="text-2xl font-bold mb-2">{recipe.label}</h1>
        <IngredientList initialServings={recipe.yield} ingredients={recipe.ingredients} />
        <ul className="list-disc list-inside mb-4"></ul>
        <div className="flex space-x-4">
          <div className="flex flex-col">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Any Comments?
            </label>
            <textarea
              value={comment}
              onChange={handleCommentChange}
              id="message"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
        </div>
        {isMyFavorite ? (
          <>
            <CustomButton handleClick={handleUpdateComment} text="Update comment" variant="primary" />
            <CustomButton handleClick={removeFav} text="Remove from favorites" variant="warning" />
          </>
        ) : (
          <CustomButton handleClick={AddFav} text="Add to favorite" variant="success" />
        )}
      </div>
    </section>
  );
};

export default Recipe;
