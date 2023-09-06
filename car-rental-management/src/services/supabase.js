import { createClient } from "@supabase/supabase-js";
import { SUPABASE_KEY } from "./config";

export const supabaseUrl = "https://orilwosmhsktkjgnugez.supabase.co";
const supabaseKey = SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
