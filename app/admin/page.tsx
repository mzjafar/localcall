'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

const supabase = createClient(
  supabaseUrl as string,
  supabaseAnonKey as string
);

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
        setMessage('❌ Connection error: ' + (err as Error).message);
      }
    }

    testConnection();
  }, []);

  return (
    <main className="p-10 font-sans text-center">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">LocalCall.in</h1>
      <p className="text-gray-700">{message}</p>
    </main>
  );
}
