import React from 'react';

const testimonials = [
  {
    name: "Ahmet Y.",
    role: "SEO Uzmanı",
    text: "Yıllardır farklı araçlar kullandım ama WE1 SERP'in Telegram bildirim hızı inanılmaz. Müşterimden önce sıralama değişimini ben öğreniyorum.",
    rating: 5
  },
  {
    name: "Zeynep K.",
    role: "E-Ticaret Müdürü",
    text: "Kredi sistemi çok adil. Diğer araçlara kullanmadığım özellikler için dünya kadar para ödüyordum. Şimdi sadece takip ettiğim kadar ödüyorum.",
    rating: 5
  },
  {
    name: "Murat S.",
    role: "Dijital Pazarlama Ajansı",
    text: "Kurumsal fatura kesebilmeleri ve Türkçe destek vermeleri bizim için tercih sebebi oldu. Fiyat/performans olarak rakipsiz.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kullanıcılarımız Ne Diyor?</h2>
          <p className="text-gray-400">Yüzlerce mutlu müşterimizin deneyimlerine göz atın.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="p-8 rounded-2xl bg-white/5 border border-white/10 relative hover:-translate-y-1 transition-transform">
               <div className="text-telegram text-4xl font-serif absolute top-4 right-6 opacity-20">"</div>
               <div className="flex gap-1 mb-4">
                 {[...Array(item.rating)].map((_, i) => (
                   <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                 ))}
               </div>
               <p className="text-gray-300 mb-6 italic leading-relaxed">"{item.text}"</p>
               <div>
                 <div className="font-bold text-white">{item.name}</div>
                 <div className="text-sm text-gray-500">{item.role}</div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;