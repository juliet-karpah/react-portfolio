import { supabase } from "../supabase";

async function getChats() {
  const { data, error } = await supabase.from("renters").select(`
  id,
  created_at,
  full_name,
  image,
  chats (id, created_at, from, message)
  `).order('created_at', { ascending: false })

  if (error) {
    throw new Error(error);
  }
  return data;
}

export { getChats };
