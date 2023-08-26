import { supabase } from "../supabase";

async function getReservations(){
    const {data, error} = await supabase.from('reservations').select('*')
    if (error){
        throw new Error(error)
    }
    return data
}

export { getReservations }