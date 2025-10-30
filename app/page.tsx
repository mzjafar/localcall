'use client';
import Header from './components/Header';
import Footer from './components/Footer';


import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function Home() {
  const [message, setMessage] = useState('Connecting to Supabase...');

  useEffect(() => {
    async function testConnection() {
      try {
        const { data, error } = await supabase.from('services').select('*').limit(1);
        if (error) throw error;
        if (data) setMessage('✅ Supabase connection successful!');
      } catch (err) {
        setMessage('❌ Connection failed: ' + err.message);
      }
    }
    testConnection();
  }, []);

  return (
    <main className="p-10 font-sans">
      <h1 className="text-2xl font-bold mb-4">LocalCall.in</h1>
      <p>{message}</p>
      <Header />
 <Footer />
    </main>
  );
}
