import React from 'react';

const CostExplanation: React.FC = () => {
  return (
    <section id="cost-calc" className="py-24 bg-slate-900/50 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Explanation */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Maliyet Hesaplama: <br/><span className="text-gradient">Kredileriniz Nasıl Harcanır?</span></h2>
              <p className="text-gray-400 leading-relaxed">
                SERP Tracker, tamamen kullanım bazlı ve şeffaf bir fiyatlandırma modeline sahiptir. 
                Sistemimiz, harcamalarınızı anlamanızı kolaylaştırmak için basit bir kredi/çekim mekanizmasıyla çalışır.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-telegram" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 36v-3m-6 6h6m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Temel Hesaplama Prensibi
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Harcamanız, sadece gerçekleştirilen pozisyon kontrolü (check) başına belirlenen sabit bir maliyet üzerinden hesaplanır.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-dark/50 p-4 rounded-xl border border-white/5">
                  <span className="text-gray-300">1 Keyword Kontrolü (Check)</span>
                  <span className="text-secondary font-bold font-mono">$0.0032</span>
                </div>
                <div className="bg-telegram/10 p-4 rounded-xl border border-telegram/20">
                  <div className="text-xs text-telegram uppercase font-bold mb-1">Formül</div>
                  <div className="font-mono text-sm text-white">
                    Toplam Harcama = (Keyword Sayısı) x (Kontrol Sıklığı) x (Gün Sayısı) x ($0.0032)
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 italic">
              * Bakiyeniz sıfıra yaklaştığında veya bittiğinde size anlık bildirim gönderilir.
            </p>
          </div>

          {/* Right: Scenarios */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-6">Örnek Kullanım Senaryoları</h3>
            
            {/* Scenario 1 */}
            <div className="group bg-white/5 hover:bg-white/10 transition-colors rounded-xl p-5 border border-white/10">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-bold text-white">Senaryo 1: Küçük İşletme</h4>
                  <div className="text-xs text-gray-400">Ana Site Takibi</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">$0.96<span className="text-sm text-gray-500 font-normal">/ay</span></div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs text-gray-400 mt-2 pt-3 border-t border-white/5">
                <div className="text-center p-2 bg-dark/30 rounded">
                  <div className="font-bold text-white">10</div>
                  Keyword
                </div>
                <div className="text-center p-2 bg-dark/30 rounded">
                  <div className="font-bold text-white">Günde 1</div>
                  Kontrol
                </div>
                <div className="text-center p-2 bg-dark/30 rounded">
                  <div className="font-bold text-secondary">300</div>
                  Kredi
                </div>
              </div>
            </div>

             {/* Scenario 2 */}
             <div className="group bg-white/5 hover:bg-white/10 transition-colors rounded-xl p-5 border border-white/10">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-bold text-white">Senaryo 2: SEO Ajansı</h4>
                  <div className="text-xs text-gray-400">5 Müşteri Sitesi</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">$9.60<span className="text-sm text-gray-500 font-normal">/ay</span></div>
                </div>
              </div>
               <div className="grid grid-cols-3 gap-2 text-xs text-gray-400 mt-2 pt-3 border-t border-white/5">
                <div className="text-center p-2 bg-dark/30 rounded">
                  <div className="font-bold text-white">100</div>
                  Keyword
                </div>
                <div className="text-center p-2 bg-dark/30 rounded">
                  <div className="font-bold text-white">Günde 1</div>
                  Kontrol
                </div>
                 <div className="text-center p-2 bg-dark/30 rounded">
                  <div className="font-bold text-secondary">3.000</div>
                  Kredi
                </div>
              </div>
            </div>

             {/* Scenario 3 */}
             <div className="group bg-white/5 hover:bg-white/10 transition-colors rounded-xl p-5 border border-white/10">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-bold text-white">Senaryo 3: E-Ticaret Devi</h4>
                  <div className="text-xs text-gray-400">Kritik Ürün Takibi</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">$96.00<span className="text-sm text-gray-500 font-normal">/ay</span></div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs text-gray-400 mt-2 pt-3 border-t border-white/5">
                <div className="text-center p-2 bg-dark/30 rounded">
                  <div className="font-bold text-white">500</div>
                  Keyword
                </div>
                <div className="text-center p-2 bg-dark/30 rounded">
                  <div className="font-bold text-telegram">Günde 2</div>
                  Kontrol
                </div>
                 <div className="text-center p-2 bg-dark/30 rounded">
                  <div className="font-bold text-secondary">30.000</div>
                  Kredi
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Smart Scheduler Tip */}
        <div className="mt-16 bg-gradient-to-r from-blue-900/20 to-telegram/20 rounded-2xl p-8 border border-telegram/10">
          <h3 className="text-xl font-bold text-white mb-4 text-center">Akıllı Scheduler İle Tasarruf Edin</h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="text-center">
              <div className="font-bold text-secondary mb-1">Önemli Kelimeler</div>
              <div className="text-gray-400 mb-2">Günde 2 Kez</div>
              <p className="text-xs text-gray-500">Kritik gelir getiren veya oynak kelimeler için sık takip.</p>
            </div>
            <div className="text-center border-l border-white/10 border-r">
              <div className="font-bold text-white mb-1">Normal Kelimeler</div>
              <div className="text-gray-400 mb-2">Günde 1 Kez</div>
              <p className="text-xs text-gray-500">Standart performans takibi için ideal sıklık.</p>
            </div>
            <div className="text-center">
               <div className="font-bold text-gray-400 mb-1">Test Kelimeleri</div>
              <div className="text-gray-400 mb-2">Haftada 1 Kez</div>
              <p className="text-xs text-gray-500">Stabil veya yeni kelimelerde maliyeti minimize edin.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostExplanation;