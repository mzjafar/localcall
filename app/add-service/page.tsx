'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function AddService() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    category: '',
    description: ''
  });
  const [status, setStatus] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('Submitting...');

    const { error } = await supabase.from('services').insert([
      {
        name: form.name,
        phone: form.phone,
        address: form.address,
        category: form.category,
        description: form.description,
        status: 'pending'
      }
    ]);

    if (error) setStatus('❌ Error: ' + error.message);
    else {
      setStatus('✅ Service submitted successfully (pending admin approval).');
      setForm({ name: '', phone: '', address: '', category: '', description: '' });
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-800 p-8">
      <div className="max-w-xl mx-auto bg-white/80 p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-4">Add a Service</h1>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="name"
            placeholder="Name of person or business"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
          <input
            name="phone"
            placeholder="Contact number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
          <input
            name="address"
            placeholder="Address or area"
            value={form.address}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
          <input
            name="category"
            placeholder="Category (e.g., Plumber, Taxi, Doctor)"
            value={form.category}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
          <textarea
            name="description"
            placeholder="Short description"
            value={form.description}
            onChange={handleChange}
            className="w-full border rounded p-2"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:brightness-110"
          >
            Submit
          </button>
        </form>
        {status && <p className="mt-4 text-sm text-slate-700">{status}</p>}
      </div>
      <Header route="add-service" setRoute={() => {}} />

 <Footer />
    </main>
  );
}
