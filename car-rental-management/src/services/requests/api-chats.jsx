import { supabase } from "../supabase";

async function getChats() {
  const { data, error } = await supabase.from("chats").select(`
  id,
  created_at,
  message,
  from (id, full_name, image)
  `)

  if (error) {
    throw new Error(error);
  }
  return data;
}

export { getChats };
