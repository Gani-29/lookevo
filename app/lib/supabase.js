import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qonfamgoqpxllolqdviw.supabase.co";
const supabaseAnonKey = "sb_publishable_IhWqnpuzehCBd2VisBfeTQ_Ys-d835l";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);