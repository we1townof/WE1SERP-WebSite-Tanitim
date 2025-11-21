import React from 'react';

const CorporateInfo: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-slate-900 to-dark border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="bg-white/5 rounded-2xl p-8 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0">
               <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Kurumsal & Faturalı Hizmet</h3>
              <p className="text-gray-400 text-sm">
                Tüm harcamalarınız için şirketiniz adına resmi fatura kesilir. KDV dahil fiyatlarımızla sürpriz maliyetlerle karşılaşmazsınız.
              </p>
            </div>
          </div>
           <div className="flex-shrink-0">
               <span className="px-4 py-2 bg-green-500/10 text-green-400 border border-green-500/20 rounded-lg text-sm font-bold">
                   %100 Yasal Uygunluk
               </span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateInfo;