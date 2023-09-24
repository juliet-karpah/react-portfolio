import { PAGE_SIZE } from "../constants";
import { supabase } from "../supabase";

async function getRenters(page, pag=false) {
  const from = (page - 1) * PAGE_SIZE
  const to = from + PAGE_SIZE - 1
  let query = supabase.from("renters").select("*")
  
  let { data: renters, error, count } = pag ? await query.range(from, to) : await query

  if (error) {
    throw new Error(error);
  }
  return {renters, count};
}

async function getRenterByID(id){
  const { data, error } = await supabase
  .from('renters')
  .select()
  .eq('id', id)

  if(error){
    console.log(error)
  }
  return data
}


export { getRenters, getRenterByID };
