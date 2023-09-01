import { supabase } from "../supabase";

async function getCars() {
  const { data, error } = await supabase.from("cars").select("*");

  if (error) {
    throw new Error(error);
  }
  return data;
}

async function getCount() {
  const { count } = supabase
    .from("countries")
    .select("*", { count: "exact", head: true });
  return count;
}

export { getCars, getCount };
