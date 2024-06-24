import { createClient } from '@/utils/supabase/server'
import { cookies } from "next/headers"

export function connect(){
    const supabase = createClient()
    return supabase
}