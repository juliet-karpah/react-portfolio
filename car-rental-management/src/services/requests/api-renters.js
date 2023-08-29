import { supabase } from "../supabase";

async function getRenters() {
  let { data: renters, error } = await supabase.from("renters").select("*");
  console.log(renters);
  if (error) {
    throw new Error(error);
  }
  return renters;
}

export { getRenters };
