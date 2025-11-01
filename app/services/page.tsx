'use client';


import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function ServicesPage() {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchApproved() {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('status', 'approved')
        .order('created_at', { ascending: false });

      if (error) console.error('Error fetching:', error);
      setServices(data || []);
      setLoading(false);
    }
    fetchApproved();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-800 p-6">
      <div className="max-w-5xl mx-auto bg-white/80 p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-4 text-blue-700">
          Approved Services
        </h1>

        {loading ? (
          <p>Loading...</p>
        ) : services.length === 0 ? (
          <p>No approved services yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((s) => (
              <div
                key={s.id}
                className="p-4 border rounded-xl bg-white hover:shadow-md transition"
              >
                <h2 className="text-lg font-semibold text-blue-800">{s.name}</h2>
                <p className="text-sm text-slate-600">{s.category}</p>
                <p className="text-sm text-slate-500 mt-1">
                  📞 {s.phone}
                </p>
                {s.address && (
                  <p className="text-sm text-slate-500">{s.address}</p>
                )}
                {s.description && (
                  <p className="text-sm mt-2 text-slate-700">
                    {s.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
 
    </main>
  );
}
