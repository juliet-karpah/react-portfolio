import { supabase } from "../supabase";

async function getRenters(from = 0) {
  let { data: renters, error } = await supabase
    .from("renters")
    .select("*")
    .range(from, from + 4);

  if (error) {
    throw new Error(error);
  }
  return renters;
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
