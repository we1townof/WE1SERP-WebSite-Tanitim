import React from 'react';

const campaigns = [
  {
    name: 'we1',
    domain: 'we1.town',
    keywordsTotal: 2,
    keywordsActive: 1,
    position: 13,
    status: 'Aktif',
    lastCheckDate: '01.11.2025 14:55',
    lastCheckTimeAgo: '17 gün önce',
    statusColor: 'bg-secondary',
    posColor: 'bg-primary'
  },
  {
    name: 'E-Ticaret Projesi',
    domain: 'magazam.com',
    keywordsTotal: 156,
    keywordsActive: 150,
    position: 4,
    status: 'Aktif',
    lastCheckDate: 'Bugün 09:30',
    lastCheckTimeAgo: '2 saat önce',
    statusColor: 'bg-secondary',
    posColor: 'bg-green-500'
  },
  {
    name: 'Teknoloji Blog',
    domain: 'teknoblog.net',
    keywordsTotal: 45,
    keywordsActive: 45,
    position: 8,
    status: 'Pasif',
    lastCheckDate: 'Dün 18:15',
    lastCheckTimeAgo: '1 gün önce',
    statusColor: 'bg-gray-500',
    posColor: 'bg-primary'
  },
  {
    name: 'Kurumsal Site',
    domain: 'sirketim.com.tr',
    keywordsTotal: 12,
    keywordsActive: 12,
    position: 2,
    status: 'Aktif',
    lastCheckDate: 'Bugün 10:00',
    lastCheckTimeAgo: '15 dk önce',
    statusColor: 'bg-secondary',
    posColor: 'bg-green-500'
  },
  {
    name: 'Landing Page',
    domain: 'kampanya.xyz',
    keywordsTotal: 8,
    keywordsActive: 8,
    position: 24,
    status: 'Aktif',
    lastCheckDate: '15.11.2025 11:20',
    lastCheckTimeAgo: '3 gün önce',
    statusColor: 'bg-secondary',
    posColor: 'bg-yellow-600'
  }
];

const stats = [
  { 
    label: 'Toplam Kelime', 
    value: '2,238', 
    change: '+12', 
    isPositive: true,
    icon: <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
  },
  { 
    label: 'Ortalama Sıra', 
    value: '12.4', 
    change: '+1.2', 
    isPositive: true,
    icon: <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
  },
  { 
    label: 'Yükselenler', 
    value: '84', 
    change: 'Son 24s', 
    isPositive: true, 
    neutral: true,
    icon: <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>
  },
  { 
    label: 'Düşenler', 
    value: '12', 
    change: 'Son 24s', 
    isPositive: false,
    icon: <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" transform="scale(1, -1) translate(0, -24)" /></svg>
  }
];

const DashboardPreview: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
       {/* Background glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl bg-telegram/10 blur-[100px] -z-10 rounded-full"></div>

       <div className="container mx-auto px-4">
          <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-bold mb-4">Kullanıcı Dostu <span className="text-gradient">Kontrol Paneli</span></h2>
             <p className="text-gray-400 max-w-2xl mx-auto">
               Karmaşık veri yığınları arasında kaybolmayın. Sade, anlaşılır ve mobil uyumlu arayüzümüzle verilerinize hakim olun.
             </p>
          </div>

          {/* Browser Window Mockup */}
          <div className="relative max-w-6xl mx-auto rounded-2xl border border-white/10 bg-[#0f172a]/90 backdrop-blur-xl shadow-2xl overflow-hidden group perspective-1000 ring-1 ring-white/10">
             {/* Browser Header */}
             <div className="h-12 bg-[#1e293b] border-b border-white/5 flex items-center px-4 gap-4">
                <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="bg-black/30 px-4 py-1.5 rounded-lg text-xs text-gray-400 font-mono flex items-center gap-2 min-w-[200px] justify-center border border-white/5">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                        serp.we1.town
                    </div>
                </div>
             </div>

             {/* App Layout - Based on Screenshot (Top Nav + Content) */}
             <div className="flex flex-col h-[600px] md:h-[700px] bg-[#0f172a]">
                
                {/* Top Navigation Bar */}
                <div className="h-16 bg-[#1e293b] border-b border-white/5 flex items-center px-6 justify-between">
                    {/* Left: Logo & Nav Items */}
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2 font-bold text-xl text-white">
                             <div className="w-8 h-8 bg-secondary rounded flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                             </div>
                             <span>SERP Tracker</span>
                        </div>
                        <nav className="hidden lg:flex items-center gap-1">
                            <a href="#" className="px-3 py-2 text-gray-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" /></svg>
                                Dashboard
                            </a>
                            <a href="#" className="px-4 py-2 bg-secondary text-white rounded text-sm font-bold flex items-center gap-2 shadow-lg shadow-secondary/20">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                                Kampanyalar
                            </a>
                            <a href="#" className="px-3 py-2 text-gray-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                Tekil Kontrol
                            </a>
                             <a href="#" className="px-3 py-2 text-gray-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                                Task Yönetimi
                            </a>
                        </nav>
                    </div>

                    {/* Right: Balance & User */}
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center bg-[#0f172a] border border-white/10 rounded px-3 py-1.5">
                            <span className="text-gray-400 text-xs mr-2">Bakiye:</span>
                            <span className="text-white font-mono font-bold">100 USD</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                            </div>
                            <span className="hidden md:inline text-gray-300">User</span>
                            <span className="bg-secondary px-2 py-0.5 rounded text-[10px] font-bold text-white">Premium</span>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="p-6 md:p-10 overflow-y-auto">
                    
                    {/* Page Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                            </div>
                            <h1 className="text-2xl font-bold text-white">Kampanya Yönetimi</h1>
                        </div>
                        <button className="bg-secondary hover:bg-green-600 text-white px-5 py-2.5 rounded-lg font-bold transition-all flex items-center gap-2 shadow-lg shadow-secondary/20">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                            Yeni Kampanya
                        </button>
                    </div>

                    {/* Stats Cards (New Feature) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="bg-[#1e293b] p-4 rounded-lg border border-white/5 shadow-lg flex items-center justify-between group hover:border-white/10 transition-colors">
                                <div>
                                    <div className="text-gray-400 text-xs font-medium mb-1">{stat.label}</div>
                                    <div className="text-2xl font-bold text-white flex items-end gap-2">
                                        {stat.value}
                                        <span className={`text-xs font-medium px-1.5 py-0.5 rounded ${stat.neutral ? 'bg-gray-700 text-gray-300' : (stat.isPositive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400')}`}>
                                            {stat.change}
                                        </span>
                                    </div>
                                </div>
                                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                    {stat.icon}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Campaigns Table Card */}
                    <div className="bg-[#1e293b] rounded-lg border border-white/5 shadow-xl overflow-hidden">
                        <div className="p-4 border-b border-white/5 flex items-center gap-3 bg-[#1e293b]">
                             <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
                             <span className="font-bold text-white">KAMPANYALAR</span>
                             <span className="bg-gray-700 text-gray-300 text-xs px-2 py-0.5 rounded">{campaigns.length} KAMPANYA</span>
                        </div>
                        
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#182533] text-gray-400 text-xs uppercase border-b border-white/5">
                                        <th className="p-4 font-semibold">Kampanya Adı</th>
                                        <th className="p-4 font-semibold">Domain</th>
                                        <th className="p-4 font-semibold">Anahtar Kelimeler</th>
                                        <th className="p-4 font-semibold">Ortalama Pozisyon</th>
                                        <th className="p-4 font-semibold">Durum</th>
                                        <th className="p-4 font-semibold">Son Kontrol</th>
                                        <th className="p-4 font-semibold text-right">İşlemler</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {campaigns.map((camp, index) => (
                                        <tr key={index} className="hover:bg-white/5 transition-colors group">
                                            <td className="p-4">
                                                <div className="font-bold text-white text-sm">{camp.name}</div>
                                            </td>
                                            <td className="p-4">
                                                <div className="inline-block bg-blue-500/10 text-blue-400 px-2 py-1 rounded text-xs font-medium mb-1">{camp.domain}</div>
                                                <div className="flex items-center gap-1 text-[10px] text-gray-500">
                                                    <span>tr/tr</span>
                                                    <span>•</span>
                                                    <span>Turkey</span>
                                                    <span>•</span>
                                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                                    <span>Desktop</span>
                                                    <span>•</span>
                                                    <span>İlk 100 sıra</span>
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <div className="flex flex-col gap-1">
                                                    <span className="bg-black/40 text-white text-xs px-2 py-1 rounded w-fit">{camp.keywordsTotal} kelime</span>
                                                    <span className="text-secondary text-xs">{camp.keywordsActive} takip ediliyor</span>
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <span className={`${camp.posColor} text-white px-3 py-1 rounded text-sm font-bold shadow-lg shadow-primary/20`}>#{camp.position}</span>
                                            </td>
                                            <td className="p-4">
                                                <span className={`${camp.statusColor} text-white px-3 py-1 rounded text-xs font-bold shadow-lg shadow-secondary/20`}>{camp.status}</span>
                                            </td>
                                            <td className="p-4">
                                                <div className="text-sm text-white">{camp.lastCheckDate}</div>
                                                <div className="text-xs text-gray-500">{camp.lastCheckTimeAgo}</div>
                                            </td>
                                            <td className="p-4 text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <button className="p-2 bg-[#0f172a] border border-white/10 rounded hover:bg-primary hover:border-primary transition-colors text-white group-hover:border-white/20">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
                                                    </button>
                                                    <button className="p-2 bg-[#0f172a] border border-white/10 rounded hover:bg-yellow-500 hover:border-yellow-500 transition-colors text-white group-hover:border-white/20">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                                                    </button>
                                                    <button className="p-2 bg-[#0f172a] border border-white/10 rounded hover:bg-red-500 hover:border-red-500 transition-colors text-white group-hover:border-white/20">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                         {/* Pagination Footer */}
                        <div className="bg-[#182533] px-4 py-3 border-t border-white/5 flex justify-between items-center">
                            <div className="text-xs text-gray-500">Toplam {campaigns.length} kayıt gösteriliyor</div>
                            <div className="flex gap-1">
                                <button className="px-2 py-1 rounded bg-white/5 text-gray-400 text-xs disabled:opacity-50">Önceki</button>
                                <button className="px-2 py-1 rounded bg-primary text-white text-xs">1</button>
                                <button className="px-2 py-1 rounded bg-white/5 text-gray-400 text-xs disabled:opacity-50">Sonraki</button>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
          </div>
       </div>
    </section>
  )
}

export default DashboardPreview;