import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ghxwobmggqpnfhelurcb.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseAnonKey) {
  console.warn(
    'Supabase VITE_SUPABASE_ANON_KEY is missing in environment variables. ' +
    'Please set VITE_SUPABASE_ANON_KEY in your local .env file or Vercel Environment Variables.'
  );
}

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey || 'placeholder_anon_key_for_client_build'
);
