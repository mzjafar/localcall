// File: app/register/page.tsx
'use client';
import React, { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', service: '', location: '', whatsapp: '' });
  const [status, setStatus] = useState<'idle'|'sending'|'done'|'error'>('idle');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const { error } = await supabase.from('services').insert({
        name: form.name,
        service_type: form.service,
        location: form.location,
        whatsapp: form.whatsapp,
        status: 'pending',
        created_at: new Date().toISOString(),
      });
      if (error) throw error;
      setStatus('done');
      setForm({ name: '', service: '', location: '', whatsapp: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Register Your Service</h2>
      <form onSubmit={submit} className="bg-white p-6 rounded-lg shadow">
        <label className="block mb-2 text-sm">Name</label>
        <input required value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} className="w-full p-2 border rounded mb-3" />

        <label className="block mb-2 text-sm">Service Type</label>
        <select required value={form.service} onChange={(e)=>setForm({...form,service:e.target.value})} className="w-full p-2 border rounded mb-3">
          <option value="">Select</option>
          <option>Taxi</option>
          <option>Plumber</option>
          <option>Donor</option>
          <option>Labour</option>
        </select>

        <label className="block mb-2 text-sm">Location</label>
        <input required value={form.location} onChange={(e)=>setForm({...form,location:e.target.value})} className="w-full p-2 border rounded mb-3" />

        <label className="block mb-2 text-sm">WhatsApp Number</label>
        <input required value={form.whatsapp} onChange={(e)=>setForm({...form,whatsapp:e.target.value})} className="w-full p-2 border rounded mb-3" />

        <div className="flex items-center gap-3">
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">{status==='sending'?'Submitting...':'Submit for Review'}</button>
          {status==='done' && <div className="text-green-600">Submitted — pending admin review</div>}
          {status==='error' && <div className="text-red-600">Submission failed</div>}
        </div>
      </form>
    </div>
  );
}

