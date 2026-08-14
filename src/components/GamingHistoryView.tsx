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
    id: "pubg",
    title: "배틀그라운드 (PUBG: BATTLEGROUNDS)",
    hoursPlayed: 130,
    genre: "Tactical FPS / Battle Royale",
    audioFocus: "3D 공간 사운드 오클루전, 총기 실사 발사음 레이어링 및 방향성 거리감 감쇄 분석",
    tag: "TACTICAL SFX"
  },
  {
    id: "valorant",
    title: "발로란트 (VALORANT)",
    hoursPlayed: 320,
    genre: "Competitive Tactical Shooter",
    audioFocus: "캐릭터 스킬 사운드 시그니처, 벽 투과 리버브 감쇄 & 풋스텝 위상 신호 오버라이드 연구",
    tag: "COMPETITIVE AUDIO"
  },
  {
    id: "cyberpunk",
    title: "사이버펑크 2077 (Cyberpunk 2077)",
    hoursPlayed: 210,
    genre: "Open World Sci-Fi RPG",
    audioFocus: "나이트 시티 무기/차량 폴리(Foley) 레코딩 & 하이브리드 아날로그 신디사이저 BGM 분석",
    tag: "SF & BGM STUDY"
  },
  {
    id: "eldenring",
    title: "엘든 링 (Elden Ring)",
    hoursPlayed: 180,
    genre: "Dark Fantasy Action RPG",
    audioFocus: "보스 페이즈 트랜지션 BGM, 대형 무기 피격감 타격음 및 동적 리버브 자일런스 분석",
    tag: "ACTION IMPACT"
  },
  {
    id: "overwatch",
    title: "오버워치 2 (Overwatch 2)",
    hoursPlayed: 450,
    genre: "Hero Team Shooter",
    audioFocus: "궁극기 시그니처 사운드 우선순위 믹싱, 캐릭터 실루엣 음성 및 팀 커뮤니케이션 오디오 오버레이",
    tag: "DYNAMIC VOICE"
  },
  {
    id: "mhw",
    title: "몬스터 헌터: 월드 (MH: World)",
    hoursPlayed: 260,
    genre: "Co-op Monster Action",
    audioFocus: "대형 크리처 포효음 멀티 피치 레이어링 & 지형 재질 반응형 풋스텝 사운드스케이프 분석",
    tag: "CREATURE SFX"
  },
  {
    id: "lol",
    title: "리그 오브 레전드 (League of Legends)",
    hoursPlayed: 520,
    genre: "MOBA / Strategy",
    audioFocus: "챔피언 스킬 타격음의 시각-청각 동기화 & 한타 교전 시 가두리 믹싱 음향 우선순위 분석",
    tag: "SKILL IMPACT"
  },
  {
    id: "diablo",
    title: "디아블로 4 (Diablo IV)",
    hoursPlayed: 190,
    genre: "Dark Fantasy Hack & Slash",
    audioFocus: "몰이사냥 스킬 범주별 서브 베이스 타격감, 악마 보컬 처리 및 던전 오클루전 체계 연구",
    tag: "HACK & SLASH"
  }
];

// High quality custom game logo rendering
export const GameLogoBadge: React.FC<{ gameId: string }> = ({ gameId }) => {
  switch (gameId) {
    case 'pubg':
      return (
        <div className="w-13 h-13 rounded-xl bg-[#f2a900] text-black font-black font-mono text-xs flex flex-col items-center justify-center shadow-md border border-amber-300 flex-shrink-0">
          <span className="leading-none text-[13px] font-black">PUBG</span>
          <span className="text-[7px] tracking-tighter opacity-95 font-bold">BATTLEGROUNDS</span>
        </div>
      );
    case 'valorant':
      return (
        <div className="w-13 h-13 rounded-xl bg-[#ff4655] text-white flex items-center justify-center shadow-md border border-rose-400 flex-shrink-0">
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M2.5 12l8.5-9.5H16L7.5 12 16 21.5h-5L2.5 12zm10 0l8.5-9.5H22.5L14 12l8.5 9.5H17.5L12.5 12z" />
          </svg>
        </div>
      );
    case 'cyberpunk':
      return (
        <div className="w-13 h-13 rounded-xl bg-[#fcee0a] text-black font-black font-mono flex flex-col items-center justify-center shadow-md border border-yellow-300 flex-shrink-0">
          <span className="text-[9px] leading-tight font-extrabold tracking-widest">CYBERPUNK</span>
          <span className="text-sm font-black leading-none">2077</span>
        </div>
      );
    case 'eldenring':
      return (
        <div className="w-13 h-13 rounded-xl bg-[#12101d] border border-[#d4af37] text-[#e5c158] flex items-center justify-center shadow-md flex-shrink-0">
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="8" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="8" cy="14" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="16" cy="14" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      );
    case 'overwatch':
      return (
        <div className="w-13 h-13 rounded-xl bg-[#f99e1a] text-white flex items-center justify-center shadow-md border border-amber-300 flex-shrink-0">
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.6 0 3.08.48 4.31 1.3L12 10.15 7.69 6.3C8.92 5.48 10.4 5 12 5zm-7 7c0-2.31.98-4.39 2.56-5.87l3.69 3.3-3.6 4.3C6.6 13.52 5 12 5 12zm7 7c-2.31 0-4.39-.98-5.87-2.56l4.31-5.14 4.31 5.14C16.39 18.02 14.31 19 12 19zm4.44-4.83l-3.6-4.3 3.69-3.3C18.02 8.05 19 10.13 19 12.44c0 0-1.6 1.52-2.56 1.73z" />
          </svg>
        </div>
      );
    case 'mhw':
      return (
        <div className="w-13 h-13 rounded-xl bg-[#1b4332] border border-[#52b788] text-[#95d5b2] font-mono flex flex-col items-center justify-center shadow-md flex-shrink-0">
          <span className="text-[10px] font-black leading-none">MONSTER</span>
          <span className="text-[9px] font-bold leading-none">HUNTER</span>
        </div>
      );
    case 'lol':
      return (
        <div className="w-13 h-13 rounded-xl bg-[#091428] border border-[#c8aa6e] text-[#c8aa6e] font-black font-serif text-base flex items-center justify-center shadow-md flex-shrink-0">
          LoL
        </div>
      );
    case 'diablo':
      return (
        <div className="w-13 h-13 rounded-xl bg-[#2a0808] border border-[#800000] text-[#ff4d4d] font-serif font-black text-sm flex items-center justify-center shadow-md flex-shrink-0">
          D IV
        </div>
      );
    default:
      return (
        <div className="w-13 h-13 rounded-xl bg-slate-800 text-cyan-300 font-bold flex items-center justify-center text-sm flex-shrink-0">
          GAME
        </div>
      );
  }
};

export const GamingHistoryView: React.FC = () => {
  const totalHours = GAMING_LOGS.reduce((acc, curr) => acc + curr.hoursPlayed, 0);

  return (
    <div className="w-full space-y-8 animate-fadeIn font-sans text-slate-100 py-2">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
        <div className="flex items-center gap-3.5">
          <Gamepad2 className="w-6 h-6 text-cyan-400" />
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              게이밍 경력 & 사운드 연구 분석
            </h2>
            <p className="text-sm text-slate-300 mt-1">
              플레이어 관점에서의 사운드 메카닉, 공간 오디오, 타격감 및 BGM 탐구
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 text-sm font-mono text-amber-300 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl w-fit">
          <Clock className="w-4 h-4 text-amber-400" />
          <span className="font-bold">{totalHours.toLocaleString()}시간+ 오디오 연구</span>
        </div>
      </div>

      {/* Game Items List / Flat Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
        {GAMING_LOGS.map((game) => (
          <div
            key={game.id}
            className="pb-6 border-b border-slate-800/70 space-y-3.5"
          >
            {/* Top Row: Logo, Title, Playtime */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5 min-w-0">
                <GameLogoBadge gameId={game.id} />
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-white truncate">
                    {game.title}
                  </h3>
                  <span className="text-xs sm:text-sm font-mono text-cyan-300 font-semibold">
                    {game.genre}
                  </span>
                </div>
              </div>

              {/* Playtime Badge */}
              <span className="text-xs sm:text-sm font-mono font-bold text-amber-300 bg-amber-950/90 border border-amber-500/50 px-3 py-1.5 rounded-lg flex-shrink-0 flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                {game.hoursPlayed}h
              </span>
            </div>

            {/* Audio Analysis Comment Text (Clean, no inner card box) */}
            <div className="pl-1 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono font-black text-slate-300">
                <Headphones className="w-4 h-4 text-cyan-400" />
                <span>RESEARCH POINT</span>
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
                {game.audioFocus}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
