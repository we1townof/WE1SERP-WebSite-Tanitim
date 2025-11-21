import React from 'react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Schuduler ile Zamanlama",
    description: "Anahtar kelime ve kampanya kontrollerinizin sıklığını (dakika, saat, günlük) otomatik ayarlayın ve takip sürecini tamamen otomatize edin.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  {
    title: "Anlık Telegram Bildirimi",
    description: "Kritik sıralama değişimlerini, pazar trendlerini veya pozisyon kayıplarını 7/24 anlık olarak Telegram üzerinden öğrenin ve hızla aksiyon alın.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
  },
  {
    title: "Görev/Kampanya Sistemi",
    description: "Her bir web siteniz veya müşteriniz için ayrı hedefler ve ayarlar belirleyin; izleme stratejilerinizi kolayca özelleştirin.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
  },
  {
    title: "Sınırsız Keyword/Domain",
    description: "Takip etmek istediğiniz anahtar kelime ve alan adı sayısında sınır yok. Tüm projelerinizi tek bir platformda yönetin.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
  },
  {
    title: "Tekli ve Toplu Kontrol",
    description: "İhtiyaca göre ister tek bir kelimenin anlık durumunu kontrol edin, ister binlerce kelimenin toplu takibini aynı anda gerçekleştirin.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
  },
  {
    title: "Uygun Fiyat",
    description: "Kapsamlı SERP takip ve AI analiz özelliklerine, piyasadaki benzer profesyonel araçların çok altında bir maliyetle sahip olun.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative bg-dark overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      {/* Radar/Scanning Effect Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-telegram/10 blur-[120px] -z-10 rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-telegram font-bold tracking-wider uppercase text-sm mb-2 block">Özellikler</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Neden <span className="text-gradient">WE1 SERP?</span></h2>
          <p className="text-gray-400 text-lg">
            Gelişmiş otomatik takip scheduler'ı, 500 pozisyona kadar detaylı arama yeteneği ve Telegram Anlık Bildirim Sistemi ile rakiplerinizden her zaman bir adım öndesiniz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 group border border-white/5 hover:border-telegram/30 hover:-translate-y-2 shadow-lg hover:shadow-telegram/10 relative overflow-hidden">
               {/* Card Glow Effect */}
               <div className="absolute -right-10 -top-10 w-32 h-32 bg-telegram/10 rounded-full blur-2xl group-hover:bg-telegram/20 transition-colors"></div>

              <div className="w-12 h-12 bg-gradient-to-br from-telegram/20 to-blue-600/20 rounded-xl flex items-center justify-center text-telegram mb-6 group-hover:scale-110 transition-transform shadow-inner relative z-10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-telegram transition-colors relative z-10">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed relative z-10">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;