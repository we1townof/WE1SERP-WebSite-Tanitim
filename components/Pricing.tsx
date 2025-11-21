import React from 'react';
import { PricingPlan } from '../types';

const plans: PricingPlan[] = [
  {
    name: "Başlangıç Paketi",
    price: "$5",
    credits: "5.000 Kredi",
    features: [
      "5.000 Kontrol Kredisi",
      "Sınırsız Domain/Kelime",
      "Telegram Bildirimleri",
      "Temel Scheduler",
      "7/24 Destek"
    ],
    color: "border-white/10"
  },
  {
    name: "Standart Paket",
    price: "$10",
    credits: "10.000 Kredi",
    isPopular: true,
    features: [
      "10.000 Kontrol Kredisi",
      "Sınırsız Domain/Kelime",
      "Telegram Bildirimleri",
      "Temel Scheduler",
      "7/24 Destek"
    ],
    color: "border-telegram"
  },
  {
    name: "Lüks Paket",
    price: "$50",
    credits: "50.000 Kredi",
    features: [
      "50.000 Kontrol Kredisi",
      "Sınırsız Domain/Kelime",
      "Telegram Bildirimleri",
      "Temel Scheduler",
      "7/24 Destek"
    ],
    color: "border-purple-500/50"
  },
  {
    name: "Premium Paket",
    price: "$100",
    credits: "100.000 Kredi",
    features: [
      "100.000 Kontrol Kredisi",
      "Sınırsız Domain/Kelime",
      "Telegram Bildirimleri",
      "Temel Scheduler",
      "7/24 Destek"
    ],
    color: "border-yellow-500/50"
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-dark relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-telegram/5 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Chart Line Background */}
      <div className="absolute bottom-0 left-0 right-0 h-64 opacity-5 pointer-events-none">
         <svg className="w-full h-full" viewBox="0 0 1200 300" preserveAspectRatio="none">
            <path d="M0,300 L0,200 C150,250 300,150 450,200 C600,250 750,100 900,150 C1050,200 1200,50 1200,0 V300 Z" fill="currentColor" className="text-telegram" />
         </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Uygun ve Rekabetçi Fiyatlar</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Kredi sistemi ile sadece kullandığınız kadar ödeyin. İhtiyacınıza uygun paketi seçin, kullanılmayan kredileriniz yanmasın.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-start">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-6 rounded-2xl border bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 ${plan.color} ${
                plan.isPopular ? 'shadow-2xl shadow-telegram/20 z-10 transform scale-105 bg-white/10' : 'hover:bg-white/10'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-telegram text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg whitespace-nowrap">
                  En Çok Tercih Edilen
                </div>
              )}
              
              <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
              <div className="text-telegram font-medium text-sm mb-4">{plan.credits}</div>
              
              <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-white/10">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400 text-sm">/ay</span>
              </div>

              <ul className="space-y-3 mb-8 min-h-[180px]">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-300 text-xs leading-relaxed">
                    <svg className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="https://we1.town/kategori/serp" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-xl font-bold text-sm transition-all block text-center ${
                plan.isPopular 
                  ? 'bg-telegram hover:bg-blue-500 text-white shadow-lg' 
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}>
                Paketi Seç
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;