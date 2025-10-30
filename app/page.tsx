'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// ✅ Environment variables with fallback empty string
const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const supabaseAnonKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

// ✅ Safe createClient only if both exist
const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');

export default function Home() {
  const [message, setMessage] = useState('Connecting to Supabase...');

  useEffect(() => {
    async function testConnection() {
      try {
        const { data, error } = await supabase.from('services').select('*').limit(1);
        if (error) {
          console.error('❌ Connection failed:', error.message);
          setMessage('❌ Connection failed: ' + error.message);
        } else {
          console.log('✅ Supabase connection successful!');
          setMessage('✅ Supabase connection successful!');
        }
      } catch (err) {
        console.error('❌ Error:', err);
        setMessage('❌ Error: ' + (err as Error).message);
      }
    }

    testConnection();
  }, []);

  return (
    <main className="p-10 text-center font-sans">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">LocalCall.in</h1>
      <p>{message}</p>
    </main>
  );
}
