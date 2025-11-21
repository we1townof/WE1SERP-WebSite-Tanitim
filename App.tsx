import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import CostExplanation from './components/CostExplanation';
import Comparison from './components/Comparison';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CorporateInfo from './components/CorporateInfo';
import FloatingContact from './components/FloatingContact';
import Footer from './components/Footer';
import DashboardPreview from './components/DashboardPreview';
import SeoContent from './components/SeoContent';
import LiveTicker from './components/LiveTicker';

function App() {
  return (
    <div className="min-h-screen bg-dark text-white selection:bg-telegram selection:text-white overflow-x-hidden">
      <Header />
      <FloatingContact />
      
      <main>
        <Hero />
        <LiveTicker />
        
        {/* Trusted By / Stats Section */}
        <div className="py-12 border-y border-white/5 bg-white/[0.02] relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
           <div className="container mx-auto px-4 relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                 {[
                    { val: '10K+', label: 'İzlenen Kelime', icon: (
                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    )},
                    { val: '500+', label: 'Mutlu Müşteri', icon: (
                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    )},
                    { val: '%99.9', label: 'Uptime', icon: (
                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    )},
                    { val: '7/24', label: 'Destek', icon: (
                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                    )}
                 ].map((stat, idx) => (
                    <div key={idx} className="flex flex-col items-center justify-center group p-4 rounded-2xl hover:bg-white/5 transition-all">
                       <div className="w-12 h-12 rounded-full bg-telegram/10 flex items-center justify-center text-telegram mb-3 group-hover:scale-110 transition-transform">
                          {stat.icon}
                       </div>
                       <div className="text-3xl font-bold text-white mb-1">{stat.val}</div>
                       <div className="text-xs font-medium uppercase tracking-wider text-gray-400">{stat.label}</div>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        <Features />
        <DashboardPreview />
        
        {/* How it Works / Workflow Section */}
        <section id="how-it-works" className="py-24 bg-dark relative">
           {/* Background Pattern */}
           <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
           
           <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Nasıl Çalışır?</h2>
                <p className="text-gray-400">3 basit adımda Google sıralamanızı takip etmeye başlayın.</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-12 relative">
                 {/* Connector Line (Desktop) */}
                 <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent border-t border-dashed border-white/30 -z-10"></div>

                 {/* Step 1 */}
                 <div className="text-center relative group">
                    <div className="w-32 h-32 mx-auto bg-[#0f172a] border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl mb-8 z-10 group-hover:-translate-y-2 transition-transform duration-300 relative">
                       <div className="absolute -top-3 -right-3 w-8 h-8 bg-telegram rounded-full flex items-center justify-center font-bold text-white border-4 border-dark">1</div>
                       {/* Icon */}
                       <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Paketini Seç</h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">İhtiyacınıza uygun kredi paketini satın alın. Anında aktivasyon ile beklemek yok.</p>
                 </div>
                 
                 {/* Step 2 */}
                 <div className="text-center relative group">
                     <div className="w-32 h-32 mx-auto bg-[#0f172a] border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl mb-8 z-10 group-hover:-translate-y-2 transition-transform duration-300 relative">
                        <div className="absolute -top-3 -right-3 w-8 h-8 bg-telegram rounded-full flex items-center justify-center font-bold text-white border-4 border-dark">2</div>
                        {/* Icon */}
                        <svg className="w-16 h-16 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Kelime Ekle</h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">Panelden web sitenizi ve takip edilecek anahtar kelimeleri saniyeler içinde tanımlayın.</p>
                 </div>

                 {/* Step 3 */}
                 <div className="text-center relative group">
                     <div className="w-32 h-32 mx-auto bg-[#0f172a] border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl mb-8 z-10 group-hover:-translate-y-2 transition-transform duration-300 relative">
                        <div className="absolute -top-3 -right-3 w-8 h-8 bg-telegram rounded-full flex items-center justify-center font-bold text-white border-4 border-dark">3</div>
                        {/* Icon */}
                        <svg className="w-16 h-16 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Bildirim Al</h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">Telegram botunu başlatın. Sıralama değişimleri anında ve detaylı olarak cebinize gelsin.</p>
                 </div>
              </div>
           </div>
        </section>

        <Pricing />
        <CostExplanation />
        <Comparison />
        <CorporateInfo />
        <Testimonials />
        <FAQ />
        <SeoContent />

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
           <div className="absolute inset-0 bg-telegram/5"></div>
           <div className="container mx-auto px-4 relative">
              <div className="bg-gradient-to-r from-telegram to-blue-700 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
                 {/* Decorative circles */}
                 <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                 <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                 
                 <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">Sıralamanızı Zirveye Taşıyın</h2>
                 <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto relative z-10">
                   Binlerce site sahibi gibi siz de WE1 SERP ile gücünüze güç katın. Hemen başlayın, farkı görün.
                 </p>
                 <a href="https://we1.town/kategori/serp" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-blue-600 px-12 py-5 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 relative z-10">
                   Hemen Satın Al
                 </a>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;