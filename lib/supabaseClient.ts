// File: lib/supabaseClient.ts
/*
Supabase client wrapper (safe for Next.js builds)
*/
import { createClient } from '@supabase/supabase-js';


const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';


if (!url || !anon) {
// In production you should ensure env vars are set in Vercel
// This warning will show in the console during builds/runs
// but the client will still be created with empty strings.
// This avoids TypeScript "string | undefined" errors.
// Replace with proper error handling if you need stricter checks.
// eslint-disable-next-line no-console
console.warn('⚠️ Missing Supabase environment variables.');
}


export const supabase = createClient(String(url), String(anon));