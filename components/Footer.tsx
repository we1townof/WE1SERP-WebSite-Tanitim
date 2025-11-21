import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-white/10 pt-16 pb-8 text-gray-400 text-sm relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-telegram rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              WE1 SERP
            </a>
            <p className="leading-relaxed">
              Google sıralamalarınızı takip etmenin en modern ve hızlı yolu. Telegram bildirimleriyle gücü elinize alın.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Ürün</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-telegram transition-colors">Özellikler</a></li>
              <li><a href="#pricing" className="hover:text-telegram transition-colors">Fiyatlandırma</a></li>
              <li><a href="#cost-calc" className="hover:text-telegram transition-colors">Maliyet Hesaplama</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Kurumsal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-telegram transition-colors">Kullanıcı Sözleşmesi</a></li>
              <li><a href="#" className="hover:text-telegram transition-colors">Gizlilik Politikası</a></li>
              <li><a href="#" className="hover:text-telegram transition-colors">İptal ve İade</a></li>
              <li><a href="#" className="hover:text-telegram transition-colors">Site Haritası</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Bize Ulaşın</h4>
            <p className="mb-2">support@we1.town</p>
            <p className="mb-4">İstanbul, Türkiye</p>
            <div className="flex gap-4">
                <a href="https://t.me/we1town" target="_blank" rel="noreferrer" className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-telegram transition-colors cursor-pointer">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                </a>
                <a href="https://wa.me/908503072791" target="_blank" rel="noreferrer" className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-green-500 transition-colors cursor-pointer">
                     <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} WE1 Town. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;