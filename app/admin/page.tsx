'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function AdminPanel() {
  const [pendingServices, setPendingServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  async function fetchPending() {
    setLoading(true);
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('status', 'pending')
      .order('created_at', { ascending: false });

    if (error) console.error('Fetch error:', error);
    setPendingServices(data || []);
    setLoading(false);
  }

  async function updateStatus(id: number, status: string) {
    const { error } = await supabase.from('services').update({ status }).eq('id', id);
    if (error) {
      console.error('Update error:', error);
      setMessage('❌ Error updating status: ' + error.message);
    } else {
      setMessage(`✅ Service ${status}!`);
      setPendingServices((prev) => prev.filter((item) => item.id !== id));
    }
  }

  useEffect(() => {
    fetchPending();
  }, []);

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
                  {s.address && (
                    <p className="text-sm text-slate-500">{s.address}</p>
                  )}
                  {s.description && (
                    <p className="text-sm mt-1 text-slate-600">{s.description}</p>
                  )}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => updateStatus(s.id, 'approved')}
                    className="px-3 py-1 rounded bg-green-600 text-white text-sm hover:brightness-110"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => updateStatus(s.id, 'rejected')}
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
      <Header />
 <Footer />
    </main>
  );
}
