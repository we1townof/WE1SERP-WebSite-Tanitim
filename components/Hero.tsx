import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [greeting, setGreeting] = useState('Merhaba');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) setGreeting('Günaydın');
    else if (hour >= 12 && hour < 18) setGreeting('İyi Günler');
    else if (hour >= 18 && hour < 22) setGreeting('İyi Akşamlar');
    else setGreeting('İyi Geceler');
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
        style={{ 
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', 
            backgroundSize: '50px 50px' 
        }}>
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-telegram/20 rounded-full blur-[120px] -z-10 opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-secondary/10 rounded-full blur-[120px] -z-10 opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl -z-10 animate-pulse"></div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 text-center lg:text-left">
          
          {/* Dynamic Greeting Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 mx-auto lg:mx-0 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
            <span className="text-sm text-gray-300 font-medium">
              {greeting}, <span className="text-white">SEO Uzmanı</span>
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            Sıralamanız Değiştiğinde <br />
            <span className="text-gradient">Telegram'dan</span> <br />
            Haberiniz Olsun
          </h1>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Google sıralamalarınızı 7/24 takip eden, düşüş ve yükselişleri anında cebinize bildiren <strong>profesyonel SEO asistanı</strong>. Rakipleriniz uyurken siz hamlenizi yapın, organik trafiğinizi artırın ve en doğru <strong>SERP verilerine</strong> anında ulaşın.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a href="https://we1.town/kategori/serp" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-telegram hover:bg-blue-500 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-telegram/25 hover:shadow-telegram/40 hover:-translate-y-1 text-center">
              Hemen Satın Al
            </a>
            <a href="#how-it-works" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold text-lg transition-all text-center backdrop-blur-sm">
              Nasıl Çalışır?
            </a>
          </div>
        </div>

        {/* Animated Graphic */}
        <div className="relative h-[500px] flex items-center justify-center perspective-1000">
            {/* Back Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-telegram/30 to-secondary/30 blur-[60px] rounded-full"></div>

            {/* Mock Phone / Dashboard */}
            <div className="relative w-80 md:w-96 aspect-[9/19] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl animate-float z-20 overflow-hidden ring-1 ring-white/10 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                {/* Screen Content */}
                <div className="absolute inset-0 bg-slate-900 flex flex-col">
                    {/* Status Bar */}
                    <div className="h-6 w-full bg-black/50 flex justify-between px-6 items-center text-[10px] text-white">
                        <span>09:41</span>
                        <div className="flex gap-1">
                            <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
                            <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
                        </div>
                    </div>
                    {/* Telegram App Header */}
                    <div className="bg-[#242f3d] p-4 flex items-center gap-3 border-b border-black/20">
                        <div className="w-8 h-8 rounded-full bg-telegram flex items-center justify-center text-white text-xs font-bold">WE1</div>
                        <div>
                            <div className="text-white text-sm font-bold">WE1 SERP Bot</div>
                            <div className="text-telegram text-xs">bot</div>
                        </div>
                    </div>
                    {/* Messages */}
                    <div className="flex-1 p-4 space-y-4 overflow-hidden bg-[#0e1621]">
                        <div className="bg-[#182533] p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl max-w-[85%] text-xs text-white shadow-sm animate-pulse-slow border border-white/5">
                            <div className="font-bold text-telegram mb-1">Günlük Rapor 🚀</div>
                            <p>Siteniz "serp takip" kelimesinde <strong>3. sıraya</strong> yükseldi! (+2)</p>
                            <div className="text-[10px] text-gray-400 text-right mt-1">09:30</div>
                        </div>
                         <div className="bg-[#182533] p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl max-w-[85%] text-xs text-white shadow-sm border border-white/5" style={{animationDelay: '1s'}}>
                            <div className="font-bold text-secondary mb-1">Tebrikler! 🏆</div>
                            <p>"WE1 town" anahtar kelimesinde <strong>1. sıraya</strong> yerleştiniz.</p>
                            <div className="text-[10px] text-gray-400 text-right mt-1">09:42</div>
                        </div>
                         <div className="bg-[#182533] p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl max-w-[85%] text-xs text-white shadow-sm border border-white/5" style={{animationDelay: '2s'}}>
                            <div className="font-bold text-red-400 mb-1">Dikkat! ⚠️</div>
                            <p>"SEO Analiz" kelimesinde 5. sıraya gerilediniz. (-1)</p>
                            <div className="text-[10px] text-gray-400 text-right mt-1">10:15</div>
                        </div>
                    </div>
                    {/* Input Area */}
                    <div className="p-3 bg-[#17212b] flex items-center gap-2">
                       <div className="w-6 h-6 rounded-full bg-gray-600/30"></div>
                       <div className="flex-1 h-8 bg-black/20 rounded-full"></div>
                       <div className="w-8 h-8 rounded-full bg-telegram flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></svg>
                       </div>
                    </div>
                </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute top-20 -right-4 md:right-10 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 animate-float shadow-xl z-30" style={{animationDelay: '2s'}}>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                    </div>
                    <div>
                        <div className="text-xs text-gray-400">Sıralama Artışı</div>
                        <div className="text-lg font-bold text-white">+12 Saniye</div>
                    </div>
                </div>
            </div>

             <div className="absolute bottom-32 -left-4 md:left-10 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 animate-float shadow-xl z-10" style={{animationDelay: '1.5s', animationDuration: '7s'}}>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-telegram/20 flex items-center justify-center text-telegram">
                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                    </div>
                    <div>
                        <div className="text-xs text-gray-400">Yeni Bildirim</div>
                        <div className="text-sm font-bold text-white">Sıra Değişikliği Tespit Edildi</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;