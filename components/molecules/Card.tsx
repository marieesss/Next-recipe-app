import React from 'react';
import { Ingredient } from '@/types/Ingredient';
import Badge from '../atoms/Badges';
import Link from 'next/link'


interface CardProps {
  label: string;
  images: string;
  ingredients: Ingredient[];
  cuisineType: string[];
  greenlabels: string[];
  redLabels:string[]
  calories: number;
  id : string;
  comments? : string

}

const Card: React.FC<CardProps> = ({
  label,
  images,
  ingredients,
  cuisineType,
  greenlabels,
  calories,
  redLabels,
  id, 
  comments
}) => {
  return (
    <Link href={`/recipes/${id}`}>
    <div
      className=" w-64 relative block overflow-hidden rounded-lg border border-gray-500 p-4 sm:p-6 lg:p-8"
    >

      <div className="sm:flex sm:justify-between sm:gap-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
            {label}
          </h3>
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
        <p className="text-sm text-gray-500">
          Ingredients:
        </p>
        {redLabels.map((redLabel, index)=>( <Badge key={index} text={redLabel} type='caution'/>))}
        {greenlabels?.map((greenlabel, index)=>( <Badge key={index} text={greenlabel} type='healthy'/>))}
      </div>

      {comments && <div className='text-sm text-gray-500'>Comments : {comments}</div>}
    </div>
    </Link>
  );
};

export default Card;
