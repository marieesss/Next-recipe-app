"use server"
import { createClient } from "../supabase/client"

export async function getFavorites(){
    try {
        const database = createClient()
        const results = await database.from('favorites').select()
        return results 
    } catch (error) {
        console.log(error)
    }
    
}

export async function AddToFavorites(meal_id : string, comments : string){
    try {
        const database = createClient()
        const {error} = await database.from('favorites').insert({ meal_id, comments})
        return error 
    } catch (error) {
        console.log(error)
    }
    
}

export async function removeFromFavorites(meal_id : string){
    try {
        const database = createClient()
        const {error} = await database.from('favorites').delete().eq('meal_id', meal_id)
        return error 
    } catch (error) {
        console.log(error)
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

        return data && data.length > 0
    } catch (error) {
        console.log(error)
        return false;
    }
    
}