import { PAGE_SIZE } from "../constants";
import { supabase } from "../supabase";

async function getRenters(page) {
  const from = (page - 1) * PAGE_SIZE
  const to = from + PAGE_SIZE - 1
  let { data: renters, error, count } = await supabase
    .from("renters")
    .select("*")
    .range(from, to);

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
