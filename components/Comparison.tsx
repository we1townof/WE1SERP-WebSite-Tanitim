import React from 'react';

const Comparison: React.FC = () => {
  const rows = [
    { feature: "Telegram Anlık Bildirim", we1: true, others: false },
    { feature: "Kredi Sistemi (Kullandığın Kadar Öde)", we1: true, others: false },
    { feature: "Kurumsal Fatura & KDV Dahil", we1: true, others: true },
    { feature: "Sınırsız Domain/Kelime Ekleme", we1: true, others: false },
    { feature: "Türkçe Destek (7/24)", we1: true, others: false },
    { feature: "Mobil Uyumlu Panel", we1: true, others: true },
    { feature: "Maliyet Avantajı", we1: true, others: false },
  ];

  return (
    <section id="comparison" className="py-24 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Neden <span className="text-gradient">WE1 SERP?</span></h2>
          <p className="text-gray-400">Rakiplerimize göre farkımız, teknolojimiz ve uygun fiyat politikamız.</p>
        </div>

        <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
          <table className="w-full">
            <thead>
              <tr className="bg-white/10 border-b border-white/10">
                <th className="p-6 text-left text-gray-300 font-medium">Özellikler</th>
                <th className="p-6 text-center text-white font-bold bg-telegram/20 border-x border-white/10 w-1/4">
                  <span className="block text-lg">WE1 SERP</span>
                </th>
                <th className="p-6 text-center text-gray-400 font-medium w-1/4">Diğer Araçlar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="p-4 pl-6 text-gray-300">{row.feature}</td>
                  <td className="p-4 text-center bg-telegram/5 border-x border-white/10">
                    {row.we1 ? (
                      <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-secondary/20 text-secondary">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      </div>
                    ) : (
                      <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500/20 text-red-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                      </div>
                    )}
                  </td>
                  <td className="p-4 text-center">
                     {row.others ? (
                      <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-secondary/20 text-secondary">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      </div>
                    ) : (
                      <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500/20 text-red-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;