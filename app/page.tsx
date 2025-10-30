'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// ✅ Ensure both variables are always strings
const supabaseUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL as string) || '';
const supabaseAnonKey = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string) || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('⚠️ Missing Supabase environment variables.');
}

// ✅ Explicit type cast to string
const supabase = createClient(supabaseUrl as string, supabaseAnonKey as string);

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
