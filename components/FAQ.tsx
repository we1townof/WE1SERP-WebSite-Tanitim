import React, { useState } from 'react';

const faqs = [
  {
    question: "Kredilerim bir sonraki aya devreder mi?",
    answer: "Hayır, satın aldığınız krediler paket süresi boyunca geçerlidir. Ancak üst paketlere geçişlerde mevcut kredilerinizi korumak için destek ekibimizle iletişime geçebilirsiniz."
  },
  {
    question: "Telegram bildirimleri nasıl çalışır?",
    answer: "Panelimizden size özel üretilen Telegram kodunu botumuza gönderdikten sonra hesabınız eşleşir. Seçtiğiniz kritik değişimler anında cebinize gelir."
  },
  {
    question: "Fatura kesiyor musunuz?",
    answer: "Evet, WE1 SERP kurumsal bir hizmettir. Yaptığınız tüm ödemeler için %20 KDV dahil yasal faturanız düzenlenir ve e-posta adresinize gönderilir."
  },
  {
    question: "Kaç adet web sitesi takip edebilirim?",
    answer: "Sınırsız! WE1 SERP'te domain veya anahtar kelime sınırı yoktur. Sadece yaptığınız sorgu sayısı kadar kredinizden düşülür."
  },
  {
    question: "Ödeme yöntemleri nelerdir?",
    answer: "Kredi kartı ile 3D Secure güvencesiyle anında ödeme yapabilir ve paketinizi hemen kullanmaya başlayabilirsiniz."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sıkça Sorulan Sorular</h2>
          <p className="text-gray-400">Aklınıza takılan tüm soruların cevapları burada.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-white/10 rounded-xl bg-white/5 overflow-hidden">
              <button 
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-gray-200">{faq.question}</span>
                <svg 
                  className={`w-5 h-5 text-telegram transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`px-6 text-gray-400 text-sm leading-relaxed transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;