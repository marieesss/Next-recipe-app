import Favorites from "@/components/layout/Favorites"
import { getFavorites } from "@/utils/services/favorite"
import { getRecipesFavorites } from "@/utils/services/recipes"

export default async function Page() {
    const data = await getRecipesFavorites()   
    if(data) return <Favorites data={data}/>
  }