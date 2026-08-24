import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ghxwobmggqpnfhelurcb.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
  console.warn(
    'Supabase configuration is missing. Please configure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in environment settings.'
  );
}

export const isSupabaseConfigured = Boolean(
  import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY
);

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey || 'placeholder_anon_key_for_client_build'
);
