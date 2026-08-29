import React from 'react';
import { Gamepad2, Clock } from 'lucide-react';

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
    title: "리그 오브 레전드",
    hoursPlayed: 520,
    genre: "MOBA / 전략",
    audioFocus: "챔피언 스킬마다 타격음이 달라 시각 효과 없이도 상황이 들리는 점을 가장 오래 들어왔다",
    tag: "SKILL IMPACT"
  },
  {
    id: "overwatch",
    title: "오버워치 2",
    hoursPlayed: 450,
    genre: "팀 기반 히어로 슈터",
    audioFocus: "한타 중에도 궁극기 음성만은 또렷하게 들리는 우선순위 믹싱을 참고한다",
    tag: "PRIORITY MIXING"
  },
  {
    id: "valorant",
    title: "발로란트",
    hoursPlayed: 320,
    genre: "택티컬 FPS",
    audioFocus: "벽 뒤 풋스텝 소리만으로 적 위치가 그려지는 공간 표현을 참고한다",
    tag: "SPATIAL AUDIO"
  },
  {
    id: "mhw",
    title: "몬스터 헌터: 월드",
    hoursPlayed: 260,
    genre: "액션 RPG",
    audioFocus: "대형 몬스터의 묵직한 포효와 타격감, 지형 재질에 따른 발소리 연출을 참고한다",
    tag: "CREATURE SFX"
  },
  {
    id: "cyberpunk",
    title: "사이버펑크 2077",
    hoursPlayed: 210,
    genre: "오픈월드 SF RPG",
    audioFocus: "나이트 시티의 미래지향적 총기·차량 사운드와 신디사이저 음악의 결합을 참고한다",
    tag: "SCI-FI & SYNTH"
  },
  {
    id: "diablo",
    title: "디아블로 4",
    hoursPlayed: 190,
    genre: "다크 판타지 핵앤슬래시",
    audioFocus: "몰이사냥의 서브 베이스 타격감과 던전의 어둡고 묵직한 앰비언스를 참고한다",
    tag: "DARK AMBIENCE"
  },
  {
    id: "eldenring",
    title: "엘든 링",
    hoursPlayed: 180,
    genre: "다크 판타지 액션 RPG",
    audioFocus: "보스 페이즈 전환 시의 음악 연출과 대형 무기의 묵직한 피격감을 참고한다",
    tag: "BOSS MUSIC & HIT"
  },
  {
    id: "pubg",
    title: "배틀그라운드",
    hoursPlayed: 130,
    genre: "배틀로얄 FPS",
    audioFocus: "원거리 총성 반향과 실내외 오클루전 등 현실적인 방향 감각을 참고한다",
    tag: "OCCLUSION & DISTANCE"
  }
];

// High quality official game vector icon / insignia rendering
export const GameLogoBadge: React.FC<{ gameId: string; size?: 'normal' | 'compact' }> = ({ gameId, size = 'normal' }) => {
  const sizeClasses = size === 'compact' ? 'w-11 h-11' : 'w-13 h-13';

  switch (gameId) {
    case 'lol':
      return (
        <div className={`${sizeClasses} rounded-xl bg-gradient-to-b from-[#0a1428] to-[#010a13] border border-[#c89b3c]/60 flex items-center justify-center shadow-lg flex-shrink-0 group-hover:border-[#f0e6d2] transition-colors overflow-hidden p-1.5`}>
          {/* Official League of Legends 'L' Gold Crest Icon */}
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
            <defs>
              <linearGradient id="lolGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f0e6d2" />
                <stop offset="50%" stopColor="#c89b3c" />
                <stop offset="100%" stopColor="#785a28" />
              </linearGradient>
            </defs>
            <path
              d="M22 14h18v48h38v18H22V14z"
              fill="url(#lolGold)"
            />
            <path
              d="M32 24h6v36h28v6H32V24z"
              fill="#060e1a"
            />
            <polygon points="66,74 78,62 78,74" fill="url(#lolGold)" />
          </svg>
        </div>
      );
    case 'overwatch':
      return (
        <div className={`${sizeClasses} rounded-xl bg-gradient-to-b from-[#ff9c00] to-[#e67e00] text-white flex items-center justify-center shadow-lg border border-amber-300/80 flex-shrink-0 group-hover:brightness-110 transition-all p-2`}>
          {/* Official Overwatch 2 Ring & Winged Crest SVG */}
          <svg className="w-full h-full fill-white drop-shadow-sm" viewBox="0 0 32 32">
            <path d="M16 2.5C8.544 2.5 2.5 8.544 2.5 16S8.544 29.5 16 29.5 29.5 23.456 29.5 16 23.456 2.5 16 2.5zm0 3.375c2.08 0 4.02.583 5.67 1.594l-3.328 3.328c-.73-.207-1.516-.328-2.342-.328s-1.612.12-2.344.328L10.33 7.47c1.65-1.012 3.59-1.595 5.67-1.595zm-8.234 3.75l3.203 3.203c-1.12 1.258-1.844 2.875-1.953 4.672H4.47c.45-3.086 2.05-5.758 4.297-7.875zm16.468 0c2.246 2.117 3.847 4.79 4.297 7.875h-4.547c-.11-1.797-.832-3.414-1.953-4.672l3.203-3.203zM5.875 16h4.125c.14 2.454 1.488 4.54 3.453 5.625l-2.844 4.032C7.94 23.75 6.273 20.09 5.875 16zm20.25 0c-.398 4.09-2.066 7.75-4.734 9.656l-2.844-4.03c1.965-1.087 3.313-3.173 3.453-5.626h4.125zM16 13.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z" />
          </svg>
        </div>
      );
    case 'valorant':
      return (
        <div className={`${sizeClasses} rounded-xl bg-[#0f1923] text-[#ff4655] flex items-center justify-center shadow-lg border border-[#ff4655]/60 flex-shrink-0 group-hover:border-[#ff4655] transition-all p-2`}>
          {/* Official Valorant V Angular Slash Logo */}
          <svg className="w-full h-full fill-[#ff4655] drop-shadow-[0_0_8px_rgba(255,70,85,0.5)]" viewBox="0 0 100 100">
            <path d="M60.6 18.2H87L49.5 81.8H23.1L60.6 18.2Z" />
            <path d="M13 18.2H39.4L20.8 49.8H7.4L13 18.2Z" />
          </svg>
        </div>
      );
    case 'pubg':
      return (
        <div className={`${sizeClasses} rounded-xl bg-gradient-to-b from-[#f2a900] to-[#d99000] text-black font-mono flex flex-col items-center justify-center shadow-lg border border-amber-200/80 flex-shrink-0 group-hover:brightness-110 transition-all p-1`}>
          <div className="bg-black text-[#f2a900] px-1.5 py-0.5 rounded text-[11px] font-black tracking-wider leading-none shadow-sm">
            PUBG
          </div>
          <span className="text-[6.5px] font-black tracking-tighter text-black uppercase mt-0.5 leading-none">
            BATTLEGROUNDS
          </span>
        </div>
      );
    case 'cyberpunk':
      return (
        <div className={`${sizeClasses} rounded-xl bg-[#fee700] text-black flex flex-col items-center justify-center shadow-lg border border-yellow-200 flex-shrink-0 group-hover:brightness-110 transition-all p-1`}>
          <span className="text-[8px] font-black tracking-tighter uppercase text-[#00f0ff] [text-shadow:1px_1px_0px_#000] leading-tight">
            CYBERPUNK
          </span>
          <span className="text-[11px] font-black tracking-widest text-black leading-none mt-[-1px]">
            2077
          </span>
        </div>
      );
    case 'eldenring':
      return (
        <div className={`${sizeClasses} rounded-xl bg-[#0d0d12] border border-[#c5a059]/70 text-[#c5a059] flex items-center justify-center shadow-lg flex-shrink-0 group-hover:border-[#e5c158] transition-all p-2`}>
          {/* Elden Ring Golden Order Intersecting Great Runes Icon */}
          <svg className="w-full h-full fill-none stroke-[#c5a059] stroke-[1.75]" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="14" />
            <circle cx="18" cy="11" r="7" />
            <circle cx="12" cy="22" r="7" />
            <circle cx="24" cy="22" r="7" />
            <line x1="18" y1="2" x2="18" y2="34" strokeWidth="2" strokeLinecap="round" />
            <line x1="6" y1="18" x2="30" y2="18" strokeWidth="1.2" strokeDasharray="1 2" />
          </svg>
        </div>
      );
    case 'mhw':
      return (
        <div className={`${sizeClasses} rounded-xl bg-gradient-to-b from-[#14281d] to-[#0a160f] border border-[#52b788]/60 text-[#74c69d] flex flex-col items-center justify-center shadow-lg flex-shrink-0 group-hover:border-[#52b788] transition-all p-1`}>
          {/* Monster Hunter Dragon Claw / Guild Insignia */}
          <svg className="w-5 h-5 fill-current mb-0.5 text-[#52b788]" viewBox="0 0 24 24">
            <path d="M12 2L9 8h6l-3-6zm-6 8l-4 7 7-2-3-5zm12 0l-3 5 7 2-4-7zm-9 9l3 3 3-3-3-1-3 1z" />
          </svg>
          <span className="text-[6.5px] font-mono font-black tracking-tighter text-emerald-300 leading-none">
            MH : WORLD
          </span>
        </div>
      );
    case 'diablo':
      return (
        <div className={`${sizeClasses} rounded-xl bg-gradient-to-b from-[#2a0404] to-[#120000] border border-[#ff3333]/60 text-[#ff4d4d] flex flex-col items-center justify-center shadow-lg flex-shrink-0 group-hover:border-[#ff3333] transition-all p-1`}>
          {/* Diablo IV Stylized Blood Pentagram / Roman IV */}
          <span className="font-serif font-black text-sm tracking-wider text-[#ff3333] drop-shadow-[0_0_6px_rgba(255,0,0,0.8)] leading-none">
            IV
          </span>
          <span className="text-[6px] font-mono font-bold tracking-widest text-red-300/80 uppercase mt-0.5 leading-none">
            DIABLO
          </span>
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

  return (
    <div className="w-full space-y-6 animate-fadeIn font-sans text-slate-100 py-1">
      {/* Section Header Info Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
        <div className="flex items-center gap-3">
          <Gamepad2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
          <p className="text-sm sm:text-base text-slate-300 break-keep">
            플레이어로서 깊이 있게 플레이해 온 게임 목록 및 누적 플레이 시간
          </p>
        </div>

        <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-amber-300 bg-slate-900/90 border border-slate-800 px-4 py-2 rounded-xl w-fit flex-shrink-0">
          <Clock className="w-4 h-4 text-amber-400" />
          <span className="font-bold">총 {totalHours.toLocaleString()}시간+ 플레이</span>
        </div>
      </div>

      {/* Unified 8 Games Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {GAMING_LOGS.map((game, index) => {
          const percentage = Math.round((game.hoursPlayed / maxHours) * 100);

          return (
            <div
              key={game.id}
              className="p-4 rounded-2xl bg-[#0a0c14] border border-slate-800/80 hover:border-cyan-500/50 hover:bg-[#0d101a] transition-all duration-300 flex flex-col justify-between gap-3 shadow-md group"
            >
              {/* Game Info Top Row */}
              <div className="flex items-center gap-3 min-w-0">
                <div className="no-print shrink-0">
                  <GameLogoBadge gameId={game.id} size="compact" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-[11px] font-mono font-bold text-cyan-400 bg-cyan-950/70 border border-cyan-500/30 px-1.5 py-0.2 rounded shrink-0">
                      #{index + 1}
                    </span>
                    <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors break-keep">
                      {game.title}
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-slate-400 block break-keep">
                    {game.genre}
                  </span>
                </div>
              </div>

              {/* Playtime Progress Bar & Hours */}
              <div className="space-y-1.5 pt-1 border-t border-slate-800/60">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 text-[11px] font-sans">누적 플레이</span>
                  <span className="text-amber-300 font-mono font-bold text-xs">{game.hoursPlayed}시간</span>
                </div>
                <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800 no-print">
                  <div
                    className="h-full bg-gradient-to-r from-teal-500 via-cyan-400 to-cyan-300 rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

