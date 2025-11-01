'use client';
import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// ✅ Supabase setup
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function AdminPage() {
  const [pin, setPin] = useState('');
  const [authorized, setAuthorized] = useState(false);
  const [pendingServices, setPendingServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // 🔑 Login handler
  function handleLogin() {
    if (pin === '1234') {
      setAuthorized(true);
    } else {
      alert('❌ Invalid PIN');
    }
  }

  // 🔄 Fetch pending data only after authorized
  useEffect(() => {
    async function fetchPending() {
      if (!authorized) return;
      setLoading(true);
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('status', 'pending')
        .order('created_at', { ascending: false });
      if (error) console.error(error);
      setPendingServices(data || []);
      setLoading(false);
    }
    fetchPending();
  }, [authorized]);

  // 🧩 If not authorized → show login page
  if (!authorized) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-slate-800">
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
        <input
          type="password"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          placeholder="Enter Admin PIN"
          className="border p-2 rounded mb-3 w-64 text-center"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:brightness-110"
        >
          Login
        </button>
      </main>
    );
  }

  // ✅ After login
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-slate-800 p-6">
      <div className="max-w-4xl mx-auto bg-white/90 p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-4">Admin Panel — Pending Services</h1>
        {message && <p className="mb-3 text-sm text-blue-700">{message}</p>}

        {loading ? (
          <p>Loading...</p>
        ) : pendingServices.length === 0 ? (
          <p>No pending services 🎉</p>
        ) : (
          <div className="space-y-3">
            {pendingServices.map((s) => (
              <div
                key={s.id}
                className="border rounded-lg p-4 flex justify-between items-start bg-white hover:bg-blue-50 transition"
              >
                <div>
                  <h2 className="font-semibold">{s.name}</h2>
                  <p className="text-sm text-slate-600">{s.category}</p>
                  <p className="text-sm text-slate-500">{s.phone}</p>
                  {s.address && <p className="text-sm text-slate-500">{s.address}</p>}
                  {s.description && (
                    <p className="text-sm mt-1 text-slate-600">{s.description}</p>
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setMessage(`✅ Approved ${s.name}`)}
                    className="px-3 py-1 rounded bg-green-600 text-white text-sm hover:brightness-110"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => setMessage(`❌ Rejected ${s.name}`)}
                    className="px-3 py-1 rounded bg-red-500 text-white text-sm hover:brightness-110"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
