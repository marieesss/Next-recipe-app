"use server"
import { Favorites } from "@/types/Favorites"
import { createClient } from "../supabase/client"

export async function getFavorites(): Promise<Favorites[]> {
    try {
        const database = createClient();
        const { data, error } = await database.from('favorites').select('meal_id, comments');

        if (error) {
            throw error;
        } 

        return data as Favorites[] || [];
    } catch (error) {
        throw error
    }
}

export async function AddToFavorites(meal_id : string, comments : string){
    try {
        
        const database = createClient()
        const {error} = await database.from('favorites').insert({ meal_id, comments})
        if (error) {
            throw error;
        } 
        return 
    } catch (error) {
        console.log(error)
    }
    
}

export async function removeFromFavorites(meal_id : string){
    try {
        const database = createClient()
        const {error} = await database.from('favorites').delete().eq('meal_id', meal_id)
        if (error) {
            throw error;
        } 
        return 
    } catch (error) {
        throw error
    }
    
}

export async function updateFavorite(meal_id : string,comments : string){
    try {
        const database = createClient()
        const {error} = await database.from('favorites').update({comments}).eq('meal_id', meal_id)
        if (error) {
            throw error;
        } 
        return 
    } catch (error) {
        throw error
    }
    
}


export async function isFavorite(meal_id : string){
    try {
        const database = createClient()
        const { data, error } = await database
        .from('favorites')
        .select()
        .eq('meal_id', meal_id)

        if (error) {
            console.log(error);
            return false;
        }

        return data as Favorites[]
    } catch (error) {
        throw error
    }
    
}