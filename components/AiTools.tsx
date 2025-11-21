import React, { useState } from 'react';
import { generateSeoKeywords } from '../services/geminiService';
import { KeywordIdea } from '../types';

const trendingTopics = [
    'Kripto Para', 
    'Yapay Zeka Araçları', 
    'Diyet Listeleri', 
    'İkinci El Araba', 
    'Yaz Tatili',
    'Freelance İşler'
];

const AiTools: React.FC = () => {
  const [niche, setNiche] = useState('');
  const [results, setResults] = useState<KeywordIdea[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleGenerate = async () => {
    if (!niche.trim()) return;
    setLoading(true);
    setResults([]);
    try {
      const ideas = await generateSeoKeywords(niche);
      setResults(ideas);
      setHasSearched(true);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleTrendClick = (topic: string) => {
      setNiche(topic);
  };

  return (
    <section id="ai-tool" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-slate-900"></div>
      
      {/* Neural Network Background Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
            <g fill="none" stroke="currentColor" strokeWidth="0.5" className="text-telegram">
                <circle cx="100" cy="100" r="2" />
                <circle cx="200" cy="300" r="2" />
                <circle cx="500" cy="100" r="2" />
                <circle cx="600" cy="400" r="2" />
                <circle cx="300" cy="500" r="2" />
                <path d="M100 100 L200 300 L600 400 L300 500 L100 100" />
                <path d="M500 100 L200 300" />
                <path d="M500 100 L600 400" />
                {/* Animated pulses */}
                <circle cx="100" cy="100" r="4" className="animate-ping opacity-50" />
                <circle cx="600" cy="400" r="4" className="animate-ping opacity-50" style={{animationDelay: '1s'}} />
            </g>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center p-3 mb-4 bg-blue-500/10 rounded-full border border-blue-500/20">
                <svg className="w-6 h-6 text-telegram" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Yapay Zeka Destekli <span className="text-gradient">SEO Fikir Üretici</span></h2>
            <p className="text-gray-400">Sektörünüzü yazın, Gemini AI teknolojisi sizin için en karlı anahtar kelimeleri bulsun.</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-2 rounded-2xl flex flex-col sm:flex-row gap-2 shadow-2xl shadow-telegram/10 relative overflow-hidden group mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none"></div>
            <input 
              type="text" 
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              placeholder="Örn: Vegan yemek tarifleri, Kripto para haberleri..." 
              className="flex-1 bg-transparent text-white px-6 py-4 focus:outline-none placeholder-gray-500"
            />
            <button 
              onClick={handleGenerate}
              disabled={loading}
              className="px-8 py-4 bg-gradient-to-r from-telegram to-blue-600 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 relative overflow-hidden"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analiz Ediliyor...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  Fikir Üret
                </>
              )}
            </button>
          </div>

          {/* Trending Topics */}
          <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
             <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mr-2">Trend Aramalar:</span>
             {trendingTopics.map((topic) => (
                <button 
                    key={topic} 
                    onClick={() => handleTrendClick(topic)}
                    className="text-xs px-3 py-1 bg-white/5 hover:bg-telegram/20 text-gray-400 hover:text-white rounded-full transition-all border border-white/5 hover:border-telegram/30"
                >
                    {topic}
                </button>
             ))}
          </div>

          {hasSearched && (
            <div className="mt-4 animate-fade-in">
              {results.length > 0 ? (
                <div className="glass-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead className="bg-white/5 text-gray-300 text-sm uppercase">
                        <tr>
                          <th className="p-4 font-semibold">Anahtar Kelime</th>
                          <th className="p-4 font-semibold">Zorluk</th>
                          <th className="p-4 font-semibold">Hacim</th>
                          <th className="p-4 font-semibold">Niyet</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-gray-300">
                        {results.map((item, idx) => (
                          <tr key={idx} className="hover:bg-white/5 transition-colors">
                            <td className="p-4 font-medium text-white">{item.keyword}</td>
                            <td className="p-4">
                              <span className={`px-2 py-1 rounded text-xs font-bold ${
                                item.difficulty === 'Kolay' ? 'bg-green-500/20 text-green-400' : 
                                item.difficulty === 'Orta' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'
                              }`}>
                                {item.difficulty}
                              </span>
                            </td>
                            <td className="p-4">{item.volume}</td>
                            <td className="p-4 text-sm">{item.intent}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="p-4 bg-telegram/10 border-t border-white/5 text-center flex justify-between items-center">
                    <p className="text-sm text-gray-300">Bu kelimeleri izlemeye alalım mı?</p>
                    <a href="#pricing" className="px-4 py-2 bg-telegram text-white rounded-lg text-sm font-bold hover:bg-blue-500 transition-colors">
                        Hemen Başla
                    </a>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-400 py-10 border border-dashed border-white/10 rounded-xl">
                   Sonuç bulunamadı veya bir hata oluştu. Lütfen tekrar deneyin.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AiTools;