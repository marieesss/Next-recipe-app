# Recipe App with Edamam API

## Description

Project that allow users to search and add to favorites recipes throught a list provided by Edamam API

## Features

- Search recipes by keyword
- Filter recipes by calories and label
- Manage favorite recipes
- Fetch recipes from Edamam API
- Store favorite recipes and their comments in Supabase

## Prerequisites

- Supabase account
- Edamam API account

## Environment Variables

Create a `.env` file in the root of your project and add the following environment variables:

```env
NEXT_PUBLIC_RECIPE_ID=your_edamam_api_id
NEXT_PUBLIC_RECIPE_KEY=your_edamam_api_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_KEY=your_supabase_key
