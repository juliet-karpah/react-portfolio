import { supabase } from "../supabase";

async function getChats() {
  const { data, error } = await supabase.from("chats").select(`
  id,
  created_at,
  message,
  from (id, full_name, image),
  to(id, full_name, image)
  `);

  if (error) {
    throw new Error(error);
  }
  return data;
}

async function addChat(data) {
  if (!data.message || !data.to) throw new Error("add message or user");
  const { data: response, error } = await supabase
    .from("chats")
    .insert([data])
    .select();
  if (error) throw new Error("Error while adding message", error);
  return response;
}

export { getChats, addChat };
