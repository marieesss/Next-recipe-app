"use server"
import { Favorites } from "@/types/Favorites"
import { createClient } from "../supabase/client"

export async function getFavorites(): Promise<Favorites[] | Error> {
    try {
        const database = createClient();
        const { data, error } = await database.from('favorites').select('meal_id, comments');

        if (error) {
            return new Error(error.message);
        }
        return data as Favorites[] || [];
} catch (error) {
    if (error instanceof Error) {
        return error;
    }
    return new Error("An unknown error occurred");
}
}

export async function AddToFavorites(meal_id : string, comments : string):  Promise<void | Error>{
    try {
        
        const database = createClient()
        const {error} = await database.from('favorites').insert({ meal_id, comments})
        if (error) {
            return new Error(error.message);
        }
        return 
    } catch (error) {
        if (error instanceof Error) {
            return error;
        }
        return new Error("An unknown error occurred");
    }
    
}

export async function removeFromFavorites(meal_id : string):  Promise<void | Error>{
    try {
        const database = createClient()
        const {error} = await database.from('favorites').delete().eq('meal_id', meal_id)
        if (error) {
            return new Error(error.message);
        }
        return 
    } catch (error) {
        if (error instanceof Error) {
            return error;
        }
        return new Error("An unknown error occurred");
    }
    
}

export async function updateFavorite(meal_id : string,comments : string) :  Promise<void | Error> {
    try {
        const database = createClient()
        const {error} = await database.from('favorites').update({comments}).eq('meal_id', meal_id)
        if (error) {
            return new Error(error.message);
        }
        return 
    } catch (error) {
        if (error instanceof Error) {
            return error;
        }
        return new Error("An unknown error occurred");
    }
    
}


export async function isFavorite(meal_id: string): Promise<Favorites[] | Error> {
    try {
        const database = createClient();
        const { data, error } = await database
            .from('favorites')
            .select()
            .eq('meal_id', meal_id);

        if (error) {
            return new Error(error.message);
        }

        return data as Favorites[];
    } catch (error) {
        if (error instanceof Error) {
            return error;
        }
        return new Error("An unknown error occurred");
    }
}
