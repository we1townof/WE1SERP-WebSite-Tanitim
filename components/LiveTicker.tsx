import React from 'react';

const tickerItems = [
  { symbol: 'TRENDYOL', change: '+4', type: 'up', label: 'sıra' },
  { symbol: 'HEPSIBURADA', change: '+2', type: 'up', label: 'sıra' },
  { symbol: 'AMAZON TR', change: '-1', type: 'down', label: 'düşüş' },
  { symbol: 'SAHIBINDEN', change: '0', type: 'neutral', label: 'sabit' },
  { symbol: 'N11', change: '+1', type: 'up', label: 'yükseliş' },
  { symbol: 'CICEKSEPETI', change: '-2', type: 'down', label: 'düşüş' },
  { symbol: 'GETIR', change: '+3', type: 'up', label: 'yükseliş' },
  { symbol: 'YEMEKSEPETI', change: '0', type: 'neutral', label: 'sabit' },
  { symbol: 'TEKNOSA', change: '+5', type: 'up', label: 'sıra' },
  { symbol: 'MEDIA MARKT', change: '-1', type: 'down', label: 'düşüş' },
  { symbol: 'LC WAIKIKI', change: '+2', type: 'up', label: 'yükseliş' },
  { symbol: 'DEFACTO', change: '+1', type: 'up', label: 'sıra' },
];

const LiveTicker: React.FC = () => {
  return (
    <div className="w-full bg-slate-900/80 border-y border-white/5 overflow-hidden py-2 backdrop-blur-md relative z-20">
      <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
        {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
          <div key={idx} className="inline-flex items-center mx-8 space-x-2 group cursor-default">
            <span className="text-gray-500 font-bold text-[10px] tracking-widest">{item.symbol}</span>
            <span className={`text-xs font-mono font-bold flex items-center gap-1 ${
                item.type === 'up' ? 'text-secondary' : 
                item.type === 'down' ? 'text-red-400' : 'text-gray-400'
            }`}>
                {item.type === 'up' ? '▲' : item.type === 'down' ? '▼' : '•'} {item.change}
            </span>
            <span className="text-[9px] text-gray-600 uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveTicker;