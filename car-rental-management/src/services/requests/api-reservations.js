import { supabase } from "../supabase";

async function getReservations(pathname) {
  let query = supabase
    .from("reservations")
    .select("*, cars(id, price), renters(full_name)");
  if (pathname == "/upcoming-reservations") {
    query = query.eq("status", "upcoming");
  } else if (pathname == "/past-reservations") {
    query = query.eq("status", "complete");
  } else {
    query = query.eq("status", "in-progress");
  }
  const { data, error } = await query;
  if (error) {
    throw new Error(error);
  }
  return data;
}

export { getReservations };
