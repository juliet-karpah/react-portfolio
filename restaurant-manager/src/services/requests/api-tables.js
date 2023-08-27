import { supabase } from "../supabase";

async function getTables(){
    const {data, error} = await supabase.from('tables').select('*')
    if (error){
        throw new Error(error)
    }
    return data
}

export { getTables }