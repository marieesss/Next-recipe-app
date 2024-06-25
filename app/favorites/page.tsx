import Favorites from "@/components/layout/Favorites";
import { getRecipesFavorites } from "@/utils/services/recipes";
import { Recipe } from '@/types/Recipe';

export default async function Page() {
    const data: Recipe[] | Error = await getRecipesFavorites();

    if (data instanceof Error) {
        return <div>Error: {data.message}</div>;
    }

    return <Favorites data={data} />;
}
