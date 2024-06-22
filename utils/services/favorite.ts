import { createClient } from "../supabase/server";

export async function getFavorites(){
    try {
        const database = createClient()
        const results = await database.from('favorites').select()
        return results 
    } catch (error) {
        console.log(error)
    }
    
}