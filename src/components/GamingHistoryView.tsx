import React from 'react';
import { Gamepad2, Clock, Headphones, Sparkles } from 'lucide-react';

interface GameLogItem {
  id: string;
  title: string;
  hoursPlayed: number;
  genre: string;
  audioFocus: string;
  tag: string;
}

export const GAMING_LOGS: GameLogItem[] = [
  {
    id: "lol",
    title: "리그 오브 레전드 (League of Legends)",
    hoursPlayed: 520,
    genre: "MOBA / Strategy",
    audioFocus: "챔피언 스킬마다 타격음이 달라 시각 효과 없이도 상황이 들리는 점을 가장 오래 들어왔다",
    tag: "SKILL IMPACT"
  },
  {
    id: "overwatch",
    title: "오버워치 2 (Overwatch 2)",
    hoursPlayed: 450,
    genre: "Hero Team Shooter",
    audioFocus: "한타 중에도 궁극기 음성만은 또렷하게 들리는 우선순위 믹싱을 참고한다",
    tag: "PRIORITY MIXING"
  },
  {
    id: "valorant",
    title: "발로란트 (VALORANT)",
    hoursPlayed: 320,
    genre: "Competitive Tactical Shooter",
    audioFocus: "벽 뒤 풋스텝 소리만으로 적 위치가 그려지는 공간 표현을 참고한다",
    tag: "SPATIAL AUDIO"
  },
  {
    id: "mhw",
    title: "몬스터 헌터: 월드 (MH: World)",
    hoursPlayed: 260,
    genre: "Co-op Monster Action",
    audioFocus: "대형 몬스터의 묵직한 포효와 타격감, 지형 재질에 따른 발소리 연출을 참고한다",
    tag: "CREATURE SFX"
  },
  {
    id: "cyberpunk",
    title: "사이버펑크 2077 (Cyberpunk 2077)",
    hoursPlayed: 210,
    genre: "Open World Sci-Fi RPG",
    audioFocus: "나이트 시티의 미래지향적 총기·차량 사운드와 신디사이저 음악의 결합을 참고한다",
    tag: "SCI-FI & SYNTH"
  },
  {
    id: "diablo",
    title: "디아블로 4 (Diablo IV)",
    hoursPlayed: 190,
    genre: "Dark Fantasy Hack & Slash",
    audioFocus: "몰이사냥의 서브 베이스 타격감과 던전의 어둡고 묵직한 앰비언스를 참고한다",
    tag: "DARK AMBIENCE"
  },
  {
    id: "eldenring",
    title: "엘든 링 (Elden Ring)",
    hoursPlayed: 180,
    genre: "Dark Fantasy Action RPG",
    audioFocus: "보스 페이즈 전환 시의 음악 연출과 대형 무기의 묵직한 피격감을 참고한다",
    tag: "BOSS MUSIC & HIT"
  },
  {
    id: "pubg",
    title: "배틀그라운드 (PUBG: BATTLEGROUNDS)",
    hoursPlayed: 130,
    genre: "Tactical FPS / Battle Royale",
    audioFocus: "원거리 총성 반향과 실내외 오클루전 등 현실적인 방향 감각을 참고한다",
    tag: "OCCLUSION & DISTANCE"
  }
];

// High quality custom game logo rendering
export const GameLogoBadge: React.FC<{ gameId: string; size?: 'normal' | 'compact' }> = ({ gameId, size = 'normal' }) => {
  const sizeClasses = size === 'compact' ? 'w-11 h-11' : 'w-13 h-13';

  switch (gameId) {
    case 'pubg':
      return (
        <div className={`${sizeClasses} rounded-xl bg-[#f2a900] text-black font-black font-mono flex flex-col items-center justify-center shadow-md border border-amber-300 flex-shrink-0`}>
          <span className="leading-none text-[12px] font-black">PUBG</span>
          <span className="text-[6.5px] tracking-tighter opacity-95 font-bold">BATTLEGROUNDS</span>
        </div>
      );
    case 'valorant':
      return (
        <div className={`${sizeClasses} rounded-xl bg-[#ff4655] text-white flex items-center justify-center shadow-md border border-rose-400 flex-shrink-0`}>
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M2.5 12l8.5-9.5H16L7.5 12 16 21.5h-5L2.5 12zm10 0l8.5-9.5H22.5L14 12l8.5 9.5H17.5L12.5 12z" />
          </svg>
        </div>
      );
    case 'cyberpunk':
      return (
        <div className={`${sizeClasses} rounded-xl bg-[#fcee0a] text-black font-black font-mono flex flex-col items-center justify-center shadow-md border border-yellow-300 flex-shrink-0`}>
          <span className="text-[8.5px] leading-tight font-extrabold tracking-widest">CYBERPUNK</span>
          <span className="text-xs font-black leading-none">2077</span>
        </div>
      );
    case 'eldenring':
      return (
        <div className={`${sizeClasses} rounded-xl bg-[#12101d] border border-[#d4af37] text-[#e5c158] flex items-center justify-center shadow-md flex-shrink-0`}>
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="8" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="8" cy="14" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="16" cy="14" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      );
    case 'overwatch':
      return (
        <div className={`${sizeClasses} rounded-xl bg-[#f99e1a] text-white flex items-center justify-center shadow-md border border-amber-300 flex-shrink-0`}>
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.6 0 3.08.48 4.31 1.3L12 10.15 7.69 6.3C8.92 5.48 10.4 5 12 5zm-7 7c0-2.31.98-4.39 2.56-5.87l3.69 3.3-3.6 4.3C6.6 13.52 5 12 5 12zm7 7c-2.31 0-4.39-.98-5.87-2.56l4.31-5.14 4.31 5.14C16.39 18.02 14.31 19 12 19zm4.44-4.83l-3.6-4.3 3.69-3.3C18.02 8.05 19 10.13 19 12.44c0 0-1.6 1.52-2.56 1.73z" />
          </svg>
        </div>
      );
    case 'mhw':
      return (
        <div className={`${sizeClasses} rounded-xl bg-[#1b4332] border border-[#52b788] text-[#95d5b2] font-mono flex flex-col items-center justify-center shadow-md flex-shrink-0`}>
          <span className="text-[9px] font-black leading-none">MONSTER</span>
          <span className="text-[8px] font-bold leading-none">HUNTER</span>
        </div>
      );
    case 'lol':
      return (
        <div className={`${sizeClasses} rounded-xl bg-[#091428] border border-[#c8aa6e] text-[#c8aa6e] font-black font-serif text-sm sm:text-base flex items-center justify-center shadow-md flex-shrink-0`}>
          LoL
        </div>
      );
    case 'diablo':
      return (
        <div className={`${sizeClasses} rounded-xl bg-[#2a0808] border border-[#800000] text-[#ff4d4d] font-serif font-black text-xs sm:text-sm flex items-center justify-center shadow-md flex-shrink-0`}>
          D IV
        </div>
      );
    default:
      return (
        <div className={`${sizeClasses} rounded-xl bg-slate-800 text-cyan-300 font-bold flex items-center justify-center text-xs flex-shrink-0`}>
          GAME
        </div>
      );
  }
};

export const GamingHistoryView: React.FC = () => {
  const totalHours = GAMING_LOGS.reduce((acc, curr) => acc + curr.hoursPlayed, 0);
  const maxHours = 520; // LoL hours

  const top3Games = GAMING_LOGS.slice(0, 3);
  const other5Games = GAMING_LOGS.slice(3);

  return (
    <div className="w-full space-y-8 animate-fadeIn font-sans text-slate-100 py-2">
      
      {/* Section Header Info Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
        <div className="flex items-center gap-3">
          <Gamepad2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
          <p className="text-sm sm:text-base text-slate-300 break-keep">
            플레이어로서 오래 들어온 게임들 — 사운드 디자인에 참고하는 레퍼런스 라이브러리
          </p>
        </div>

        <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-amber-300 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl w-fit flex-shrink-0">
          <Clock className="w-4 h-4 text-amber-400" />
          <span className="font-bold">총 {totalHours.toLocaleString()}시간+ 플레이</span>
        </div>
      </div>

      {/* Tier 1: Top 3 Featured References (Cards) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            CORE REFERENCE GAMES (TOP PLAYTIME)
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {top3Games.map((game, index) => {
            const percentage = Math.round((game.hoursPlayed / maxHours) * 100);
            return (
              <div
                key={game.id}
                className="p-5 rounded-2xl bg-[#0e1018] border border-slate-800/90 hover:border-cyan-500/60 transition-all duration-300 flex flex-col shadow-lg group"
              >
                <div className="space-y-3.5">
                  {/* Header: Logo, Title, Rank */}
                  <div className="flex items-start justify-between gap-3 min-h-[52px]">
                    <div className="flex items-center gap-3 min-w-0">
                      <GameLogoBadge gameId={game.id} />
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-black text-cyan-400 bg-cyan-950/80 px-1.5 py-0.5 rounded border border-cyan-500/30">
                            #{index + 1}
                          </span>
                          <h3 className="text-base font-bold text-white break-keep line-clamp-1 group-hover:text-cyan-300 transition-colors">
                            {game.title}
                          </h3>
                        </div>
                        <span className="text-xs font-mono text-slate-400 font-semibold block mt-1">
                          {game.genre}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Relative Playtime Bar (6px+ height) */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400 font-sans">누적 플레이</span>
                      <span className="text-amber-300 font-mono font-bold">{game.hoursPlayed}시간</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-900/90 rounded-full overflow-hidden border border-slate-800">
                      <div
                        className="h-full bg-gradient-to-r from-teal-500 via-cyan-400 to-cyan-300 rounded-full transition-all duration-700"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Sound Reference Content */}
                <div className="mt-4 pt-3.5 border-t border-slate-800/70 space-y-1.5 flex-1 flex flex-col justify-start">
                  <div className="flex items-center gap-1.5 text-xs font-sans font-bold text-cyan-300">
                    <Headphones className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    <span>주목해서 듣는 사운드</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans break-keep">
                    {game.audioFocus}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tier 2: Remaining 5 Compact Reference Tiles */}
      <div className="space-y-3 pt-2">
        <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
          ADDITIONAL REFERENCE TITLES
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {other5Games.map((game, index) => {
            const percentage = Math.round((game.hoursPlayed / maxHours) * 100);

            return (
              <div
                key={game.id}
                className="p-3 rounded-xl bg-[#090b13] border border-slate-800/80 hover:border-cyan-500/40 hover:bg-[#0c0e17] transition-all flex flex-col justify-between gap-2.5 group"
              >
                {/* Top: Logo & Game Name */}
                <div className="flex items-center gap-2.5 min-w-0">
                  <GameLogoBadge gameId={game.id} size="compact" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] font-mono text-slate-400 font-bold">
                        #{index + 4}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors break-keep truncate">
                        {game.title}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Bottom: Playtime Bar + Hours Number */}
                <div className="flex items-center gap-2.5 pt-0.5">
                  <div className="flex-1 h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                    <div
                      className="h-full bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-xs font-mono text-amber-300 font-bold whitespace-nowrap shrink-0">
                    {game.hoursPlayed}h
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

