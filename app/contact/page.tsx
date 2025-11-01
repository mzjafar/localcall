// File: app/contact/page.tsx
'use client';
import React, { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function ContactPage() {
  const [msg, setMsg] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  async function send(e: React.FormEvent) {
    e.preventDefault();
    try {
      const { error } = await supabase.from('contacts').insert({
        name: msg.name,
        email: msg.email,
        message: msg.message,
        created_at: new Date().toISOString(),
      });
      if (error) throw error;
      setSent(true);
      setMsg({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      alert('Failed to send message');
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Contact Us</h2>
      <form onSubmit={send} className="bg-white p-6 rounded-lg shadow">
        <label className="block mb-1 text-sm">Name</label>
        <input required value={msg.name} onChange={(e)=>setMsg({...msg,name:e.target.value})} className="w-full p-2 border rounded mb-3" />
        <label className="block mb-1 text-sm">Email</label>
        <input required value={msg.email} onChange={(e)=>setMsg({...msg,email:e.target.value})} className="w-full p-2 border rounded mb-3" />
        <label className="block mb-1 text-sm">Message</label>
        <textarea required value={msg.message} onChange={(e)=>setMsg({...msg,message:e.target.value})} className="w-full p-2 border rounded mb-3" rows={5}></textarea>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">Send</button>
          {sent && <div className="text-green-600">Message sent — we will reply via email</div>}
        </div>
      </form>
    </div>
  );
}
