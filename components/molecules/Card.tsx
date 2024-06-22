import React from 'react';
import { Ingredient } from '@/types/Ingredient';
import Badge from '../atoms/Badges';

interface CardProps {
  label: string;
  images: string;
  ingredients: Ingredient[];
  cuisineType: string[];
  greenlabels: string[];
  redLabels:string[]
  calories: number;
}

const Card: React.FC<CardProps> = ({
  label,
  images,
  ingredients,
  cuisineType,
  greenlabels,
  calories,
  redLabels
}) => {

  return (
    <a
      href="#"
      className=" w-64 relative block overflow-hidden rounded-lg border border-gray-500 p-4 sm:p-6 lg:p-8"
    >

      <div className="sm:flex sm:justify-between sm:gap-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
            {label}
          </h3>

          <p className="mt-1 text-xs font-medium text-gray-600">
            {greenlabels?.join(", ")}
          </p>
        </div>

        <div className="hidden sm:block sm:shrink-0">
          <img
            alt={label}
            src={images}
            width={200}
            className="size-16 rounded-lg object-cover shadow-sm"
          />
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-500">
          Cuisine Type: {cuisineType?.join(', ')}
        </p>
        <p className="text-sm text-gray-500">
          Calories: {calories?.toFixed(2)}
        </p>
        {redLabels.map((redLabel)=>( <Badge text={redLabel} type='caution'/>))}
        {greenlabels?.map((greenlabel)=>( <Badge text={greenlabel} type='healthy'/>))}
        <p className="text-sm text-gray-500">
          Ingredients:
        </p>
        <ul className="list-disc list-inside">
          {ingredients?.map((ingredient, index) => (
            <li key={index}>
              {ingredient?.food}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
};

export default Card;
