import { supabase } from "../supabase";

async function getCars(){
    const {data, error} = await supabase.from('cars').select('*')
    console.log(data)
    if (error){
        throw new Error(error)
    }
    return data
}

export { getCars }