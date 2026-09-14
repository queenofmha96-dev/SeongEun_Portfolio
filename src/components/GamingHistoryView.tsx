import React, { useState, useEffect, useMemo } from 'react';
import { Gamepad2, Clock, ExternalLink, ShieldCheck, Flame, Zap, RefreshCw, Radio, Smartphone, Monitor, Disc, CreditCard, Edit3, Check, RotateCcw, DollarSign, Layers } from 'lucide-react';
import { OFFICIAL_STEAM_PROFILE_DATA } from '../data/steamData';
import { PLAYED_GAMES_LIST, PlayedGameItem, GamePlatform } from '../data/playedGamesData';
import { SteamProfileData } from '../types';
import { soundEngine } from '../utils/soundEngine';

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
  const [activeTab, setActiveTab] = useState<'steam' | 'all'>('all');
  const [platformFilter, setPlatformFilter] = useState<'all' | GamePlatform>('all');
  const [steamData, setSteamData] = useState<SteamProfileData>(OFFICIAL_STEAM_PROFILE_DATA);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [lastSyncTime, setLastSyncTime] = useState<string | null>(null);
  const [syncStatus, setSyncStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Platform Cash Purchase Totals (Steam, Google Play, App Store) with localStorage persistence
  const [purchaseAmounts, setPurchaseAmounts] = useState<{ steam: number; googlePlay: number; appStore: number }>(() => {
    const defaults = {
      steam: 6688000,
      googlePlay: 2372200,
      appStore: 2729500
    };
    try {
      const saved = localStorage.getItem('seongeun_game_purchases');
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...defaults,
          ...parsed,
          steam: parsed.steam === 3450000 ? 6688000 : (parsed.steam ?? 6688000),
          googlePlay: parsed.googlePlay === 1850000 ? 2372200 : (parsed.googlePlay ?? 2372200),
          appStore: parsed.appStore === 920000 ? 2729500 : (parsed.appStore ?? 2729500)
        };
      }
    } catch {
      // ignore
    }
    return defaults;
  });

  const [isEditingPurchases, setIsEditingPurchases] = useState(false);
  const [tempAmounts, setTempAmounts] = useState(purchaseAmounts);

  const totalSpent = purchaseAmounts.steam + purchaseAmounts.googlePlay + purchaseAmounts.appStore;

  const handleSavePurchases = () => {
    soundEngine.playClick();
    setPurchaseAmounts(tempAmounts);
    try {
      localStorage.setItem('seongeun_game_purchases', JSON.stringify(tempAmounts));
    } catch {
      // ignore
    }
    setIsEditingPurchases(false);
  };

  const handleResetPurchases = () => {
    soundEngine.playClick();
    const defaults = { steam: 6688000, googlePlay: 2372200, appStore: 2729500 };
    setPurchaseAmounts(defaults);
    setTempAmounts(defaults);
    try {
      localStorage.setItem('seongeun_game_purchases', JSON.stringify(defaults));
    } catch {
      // ignore
    }
    setIsEditingPurchases(false);
  };

  // Real-time live sync with Steam on mount or on demand
  const fetchLiveSteamData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/steam-sync');
      if (response.ok) {
        const data = await response.json();
        if (data.success && data.profile) {
          setSteamData(data.profile);
          setLastSyncTime(new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
          setSyncStatus('success');
        }
      } else {
        setSyncStatus('error');
      }
    } catch {
      setSyncStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLiveSteamData();
  }, []);

  const filteredPlayedGames = useMemo(() => {
    if (platformFilter === 'all') return PLAYED_GAMES_LIST;
    return PLAYED_GAMES_LIST.filter(game => {
      const p = game.platform || 'steam';
      return p === platformFilter;
    });
  }, [platformFilter]);

  const platformCounts = useMemo(() => {
    return {
      all: PLAYED_GAMES_LIST.length,
      steam: PLAYED_GAMES_LIST.filter(g => (g.platform || 'steam') === 'steam').length,
      ps5: PLAYED_GAMES_LIST.filter(g => g.platform === 'ps5').length,
      switch: PLAYED_GAMES_LIST.filter(g => g.platform === 'switch').length,
      mobile: PLAYED_GAMES_LIST.filter(g => g.platform === 'mobile').length,
      other: PLAYED_GAMES_LIST.filter(g => g.platform === 'other').length,
    };
  }, []);

  const totalHours = PLAYED_GAMES_LIST.reduce((acc, curr) => acc + (curr.hoursPlayed || 0), 0);
  const filteredHours = filteredPlayedGames.reduce((acc, curr) => acc + (curr.hoursPlayed || 0), 0);
  const maxHours = Math.max(...PLAYED_GAMES_LIST.map(g => g.hoursPlayed || 0), 100);

  const steamTotalHours = steamData.games.reduce((acc, g) => acc + g.hoursTotal, 0);
  const steamMaxHours = Math.max(...steamData.games.map(g => g.hoursTotal), 100);

  return (
    <div className="w-full space-y-6 animate-fadeIn font-sans text-slate-100 py-1">
      {/* Official Steam Verified Profile Showcase Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0d1424] via-[#09101f] to-[#0d1527] border border-cyan-500/40 p-4 sm:p-6 shadow-xl">
        <div className="absolute top-0 right-0 w-80 h-full bg-radial-gradient pointer-events-none opacity-20" />
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 relative z-10">
          {/* Steam User Profile Info */}
          <div className="flex items-center gap-4">
            <div className="relative shrink-0">
              <img
                src={steamData.avatarFull || OFFICIAL_STEAM_PROFILE_DATA.avatarFull}
                alt={steamData.steamID}
                className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl border-2 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.35)] object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-[#09101f]"></span>
              </span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2.5 flex-wrap">
                <h3 className="text-xl sm:text-2xl font-black text-white font-sans tracking-wide">
                  {steamData.steamID}
                </h3>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold bg-cyan-950/90 text-cyan-300 border border-cyan-500/50 px-2.5 py-0.5 rounded-full">
                  <ShieldCheck className="w-3 h-3 text-cyan-400" />
                  STEAM VERIFIED
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full">
                  <Radio className="w-2.5 h-2.5 text-emerald-400 animate-pulse" />
                  LIVE SYNC
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 font-sans flex items-center gap-3 flex-wrap">
                <span>Steam ID: <strong className="font-mono text-slate-300">{steamData.steamID64}</strong></span>
                <span className="hidden sm:inline text-slate-600">•</span>
                <span>가입일: <strong className="font-mono text-slate-300">{steamData.memberSince}</strong></span>
                <span className="hidden sm:inline text-slate-600">•</span>
                <span>국가: <strong className="text-slate-300">대한민국 (KR)</strong></span>
              </p>
            </div>
          </div>

          {/* Steam Stat & Profile Link Button */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end flex-wrap">
            <div className="bg-[#050912]/80 border border-slate-800 px-4 py-2 rounded-xl text-center">
              <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider flex items-center justify-center gap-1">
                <span>스팀 실시간 누적</span>
                <button
                  onClick={fetchLiveSteamData}
                  disabled={isLoading}
                  title="스팀 실시간 동기화 새로고침"
                  className="p-1 hover:text-cyan-300 transition-colors disabled:opacity-50"
                >
                  <RefreshCw className={`w-3 h-3 ${isLoading ? 'animate-spin text-cyan-400' : ''}`} />
                </button>
              </div>
              <div className="text-lg font-mono font-bold text-amber-300">
                {steamTotalHours.toLocaleString()}시간+
              </div>
            </div>

            <a
              href={`https://steamcommunity.com/profiles/${steamData.steamID64}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium text-xs sm:text-sm shadow-lg shadow-cyan-950/50 transition-all hover:scale-[1.02] shrink-0"
            >
              {/* Official Steam Logo */}
              <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.029 4.524 4.524s-2.03 4.524-4.524 4.524h-.105l-4.076 2.911c0 .052.005.105.005.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 12-5.373 12-12S18.605 0 11.979 0z" />
              </svg>
              <span>스팀 프로필 바로가기</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Tabs / Filter Controls */}
      <div className="space-y-3 pb-1">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('steam')}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
                activeTab === 'steam'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm'
                  : 'text-slate-400 hover:text-white bg-slate-900/60 border border-slate-800'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>최근 플레이한 게임 ({steamData.games.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
                activeTab === 'all'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 shadow-sm'
                  : 'text-slate-400 hover:text-white bg-slate-900/60 border border-slate-800'
              }`}
            >
              <Gamepad2 className="w-3.5 h-3.5" />
              <span>플레이한 게임 목록 ({PLAYED_GAMES_LIST.length})</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            {lastSyncTime && (
              <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
                최근 동기화: {lastSyncTime}
              </span>
            )}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-amber-300 bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-xl w-fit shrink-0">
              <Clock className="w-4 h-4 text-amber-400" />
              <span className="font-bold">
                {activeTab === 'steam'
                  ? `스팀 총 ${steamTotalHours.toLocaleString()}시간+ 플레이`
                  : platformFilter === 'mobile'
                  ? `모바일 총 ${platformCounts.mobile}개 타이틀 플레이`
                  : platformFilter === 'all'
                  ? `총 ${totalHours.toLocaleString()}시간+ 플레이 (${PLAYED_GAMES_LIST.length}개 타이틀)`
                  : `${filteredHours.toLocaleString()}시간 플레이`}
              </span>
            </div>
          </div>
        </div>

        {/* Platform Filter Buttons (Active in 'all' tab) */}
        {activeTab === 'all' && (
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 scrollbar-none">
            <span className="text-[11px] text-slate-500 font-mono shrink-0 mr-1">플랫폼 필터:</span>
            
            <button
              onClick={() => setPlatformFilter('all')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all shrink-0 flex items-center gap-1.5 ${
                platformFilter === 'all'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50'
                  : 'text-slate-400 hover:text-slate-200 bg-slate-900/50 border border-slate-800/80'
              }`}
            >
              <span>전체 (ALL)</span>
              <span className="text-[10px] font-mono opacity-70">({platformCounts.all})</span>
            </button>

            <button
              onClick={() => setPlatformFilter('steam')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all shrink-0 flex items-center gap-1.5 ${
                platformFilter === 'steam'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                  : 'text-slate-400 hover:text-slate-200 bg-slate-900/50 border border-slate-800/80'
              }`}
            >
              <Monitor className="w-3 h-3 text-cyan-400" />
              <span>PC / Steam</span>
              <span className="text-[10px] font-mono opacity-70">({platformCounts.steam})</span>
            </button>

            <button
              onClick={() => setPlatformFilter('ps5')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all shrink-0 flex items-center gap-1.5 ${
                platformFilter === 'ps5'
                  ? 'bg-blue-500/25 text-blue-300 border border-blue-500/50'
                  : 'text-slate-400 hover:text-slate-200 bg-slate-900/50 border border-slate-800/80'
              }`}
            >
              <Disc className="w-3 h-3 text-blue-400" />
              <span>PlayStation 5</span>
              <span className="text-[10px] font-mono opacity-70">({platformCounts.ps5})</span>
            </button>

            <button
              onClick={() => setPlatformFilter('switch')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all shrink-0 flex items-center gap-1.5 ${
                platformFilter === 'switch'
                  ? 'bg-red-500/25 text-red-300 border border-red-500/50'
                  : 'text-slate-400 hover:text-slate-200 bg-slate-900/50 border border-slate-800/80'
              }`}
            >
              <Gamepad2 className="w-3 h-3 text-red-400" />
              <span>Nintendo Switch</span>
              <span className="text-[10px] font-mono opacity-70">({platformCounts.switch})</span>
            </button>

            <button
              onClick={() => setPlatformFilter('mobile')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all shrink-0 flex items-center gap-1.5 ${
                platformFilter === 'mobile'
                  ? 'bg-emerald-500/25 text-emerald-300 border border-emerald-500/50'
                  : 'text-slate-400 hover:text-slate-200 bg-slate-900/50 border border-slate-800/80'
              }`}
            >
              <Smartphone className="w-3 h-3 text-emerald-400" />
              <span>Mobile</span>
              <span className="text-[10px] font-mono opacity-70">({platformCounts.mobile})</span>
            </button>

            <button
              onClick={() => setPlatformFilter('other')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all shrink-0 flex items-center gap-1.5 ${
                platformFilter === 'other'
                  ? 'bg-purple-500/25 text-purple-300 border border-purple-500/50'
                  : 'text-slate-400 hover:text-slate-200 bg-slate-900/50 border border-slate-800/80'
              }`}
            >
              <Layers className="w-3 h-3 text-purple-400" />
              <span>그외 게임</span>
              <span className="text-[10px] font-mono opacity-70">({platformCounts.other})</span>
            </button>
          </div>
        )}
      </div>

      {/* Tab 1: Steam Connected Games */}
      {activeTab === 'steam' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-fadeIn">
          {steamData.games.map((game) => {
            const percentage = Math.min(100, Math.round((game.hoursTotal / steamMaxHours) * 100));

            return (
              <a
                key={game.appId}
                href={game.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl bg-[#0a0c14] border border-slate-800/80 hover:border-cyan-500/60 hover:bg-[#0d101a] transition-all duration-300 flex flex-col justify-between gap-3 shadow-md relative overflow-hidden"
              >
                {/* Game Capsule Thumbnail Header */}
                <div className="relative rounded-xl overflow-hidden border border-slate-800/90 bg-slate-950 aspect-[184/69] w-full">
                  <img
                    src={game.logo}
                    alt={game.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  
                  {game.hours2wk > 0 && (
                    <span className="absolute top-2 right-2 inline-flex items-center gap-1 text-[10px] font-mono font-bold bg-emerald-950/90 text-emerald-400 border border-emerald-500/50 px-2 py-0.5 rounded-md shadow-sm">
                      <Flame className="w-3 h-3 text-emerald-400" />
                      최근 2주: {game.hours2wk}시간
                    </span>
                  )}
                </div>

                {/* Title and App ID */}
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors break-keep truncate font-sans">
                      {game.name}
                    </h4>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 shrink-0 transition-colors" />
                  </div>
                  <div className="text-[11px] font-mono text-slate-500">
                    AppID: {game.appId}
                  </div>
                </div>

                {/* Playtime Bar */}
                <div className="space-y-1.5 pt-1.5 border-t border-slate-800/60 font-sans">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-sans font-medium text-xs tracking-tight">스팀 기록 플레이타임</span>
                    <span className="text-slate-200 text-xs font-medium">
                      <span className="font-mono font-bold text-amber-300 text-sm">{game.hoursTotal}</span>시간
                    </span>
                  </div>

                  <div className="w-full flex items-center gap-1 py-0.5" aria-hidden="true">
                    {Array.from({ length: 14 }).map((_, i) => {
                      const activeCount = Math.max(1, Math.round((percentage / 100) * 14));
                      const isActive = i < activeCount;
                      
                      const getActiveColor = (index: number) => {
                        if (index < 4) return 'bg-cyan-600/90';
                        if (index < 7) return 'bg-cyan-400/95';
                        if (index < 10) return 'bg-teal-300';
                        if (index < 12) return 'bg-amber-300';
                        return 'bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.35)]';
                      };

                      return (
                        <div
                          key={i}
                          className={`h-1.5 flex-1 -skew-x-12 rounded-[0.5px] transition-all duration-300 ${
                            isActive ? getActiveColor(i) : 'bg-slate-800/40'
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      )}

      {/* Tab 2: Full Played Games List with Platform Filtering */}
      {activeTab === 'all' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 animate-fadeIn">
          {filteredPlayedGames.map((game, index) => {
            const percentage = Math.round((game.hoursPlayed / maxHours) * 100);
            const p = game.platform || 'steam';

            const getPlatformBadge = () => {
              switch (p) {
                case 'ps5':
                  return { label: 'PS5', color: 'bg-blue-950/90 text-blue-300 border-blue-500/50' };
                case 'switch':
                  return { label: 'SWITCH', color: 'bg-red-950/90 text-red-300 border-red-500/50' };
                case 'mobile':
                  return { label: 'MOBILE', color: 'bg-emerald-950/90 text-emerald-300 border-emerald-500/50' };
                case 'other':
                  return { label: 'OTHER', color: 'bg-purple-950/90 text-purple-300 border-purple-500/50' };
                default:
                  return { label: 'STEAM', color: 'bg-cyan-950/90 text-cyan-300 border-cyan-500/50' };
              }
            };

            const badge = getPlatformBadge();

            return (
              <a
                key={game.appId}
                href={game.steamUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 sm:p-4 rounded-2xl bg-[#0a0c14] border border-slate-800/80 hover:border-amber-500/60 hover:bg-[#0d101a] transition-all duration-300 flex flex-col justify-between gap-3 shadow-md group relative overflow-hidden"
              >
                {/* Header Image & Rank Badge */}
                <div className="relative rounded-xl overflow-hidden border border-slate-800/90 bg-[#080b14] aspect-[460/215] w-full flex items-center justify-center">
                  {game.headerImg ? (
                    <>
                      <img
                        src={game.headerImg}
                        alt={game.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (!p || p === 'steam') {
                            target.src = `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${game.appId}/capsule_231x87.jpg`;
                          } else {
                            target.style.display = 'none';
                            const fallback = target.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                          }
                        }}
                      />
                      <div className="w-full h-full hidden flex-col items-center justify-center p-3 text-center bg-gradient-to-br from-[#0c1222] to-[#080d18] relative">
                        <div className={`w-9 h-9 rounded-xl border flex items-center justify-center mb-1.5 shadow-inner ${
                          p === 'other' ? 'bg-purple-950/80 border-purple-500/40 text-purple-400' : 'bg-emerald-950/80 border-emerald-500/40 text-emerald-400'
                        }`}>
                          {p === 'other' ? <Layers className="w-5 h-5" /> : <Smartphone className="w-5 h-5" />}
                        </div>
                        <span className="text-[11px] font-bold text-slate-200 line-clamp-1 break-keep px-2">
                          {game.name}
                        </span>
                        <span className={`text-[9px] font-mono mt-0.5 ${p === 'other' ? 'text-purple-400/80' : 'text-emerald-400/80'}`}>
                          {p === 'other' ? 'GAME AUDIO LOG' : 'MOBILE AUDIO LOG'}
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center bg-gradient-to-br from-[#0c1222] to-[#080d18] relative group-hover:from-[#0f172a] group-hover:to-[#0b1324] transition-all">
                      <div className={`w-9 h-9 rounded-xl border flex items-center justify-center mb-1.5 shadow-inner ${
                        p === 'other' ? 'bg-purple-950/80 border-purple-500/40 text-purple-400' : 'bg-emerald-950/80 border-emerald-500/40 text-emerald-400'
                      }`}>
                        {p === 'other' ? <Layers className="w-5 h-5" /> : <Smartphone className="w-5 h-5" />}
                      </div>
                      <span className="text-[11px] font-bold text-slate-200 line-clamp-1 break-keep px-2">
                        {game.name}
                      </span>
                      <span className={`text-[9px] font-mono mt-0.5 ${p === 'other' ? 'text-purple-400/80' : 'text-emerald-400/80'}`}>
                        {p === 'other' ? 'GAME AUDIO LOG' : 'MOBILE AUDIO LOG'}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c14] via-transparent to-black/30 pointer-events-none" />

                  {/* Rank Badge & Platform Badge */}
                  <div className="absolute top-2 left-2 flex items-center gap-1.5">
                    <div className="px-2 py-0.5 rounded-lg bg-black/80 backdrop-blur-md border border-amber-500/40 text-[10px] font-mono font-bold text-amber-300 flex items-center gap-1">
                      <span>#{index + 1}</span>
                    </div>
                    <div className={`px-2 py-0.5 rounded-lg border text-[9px] font-mono font-bold backdrop-blur-md ${badge.color}`}>
                      <span>{badge.label}</span>
                    </div>
                  </div>

                  {/* Audio Tag */}
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between pointer-events-none">
                    <span className="text-[9px] font-mono font-bold text-cyan-300 bg-black/80 px-2 py-0.5 rounded-md border border-cyan-500/30 truncate max-w-[85%]">
                      {game.tag}
                    </span>
                  </div>
                </div>

                {/* Game Title & Genre */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors break-keep truncate font-sans">
                      {game.name}
                    </h4>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 shrink-0 transition-colors" />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-sans">
                    <span className="truncate">{game.genre}</span>
                    {p === 'steam' ? (
                      <span className="font-mono text-slate-500 text-[10px] shrink-0">AppID: {game.appId}</span>
                    ) : (
                      <span className="font-mono text-slate-500 text-[10px] shrink-0">
                        {p === 'mobile' ? 'Mobile App' : p === 'other' ? 'Standalone / PC' : p.toUpperCase()}
                      </span>
                    )}
                  </div>
                </div>

                {/* Audio Focus Note */}
                <p className="text-xs text-slate-400 break-keep leading-relaxed border-l-2 border-amber-500/50 pl-2 bg-slate-900/30 py-1 rounded-r-lg">
                  {game.audioFocus}
                </p>

                {/* Playtime Progress Bar & Hours (Hidden if hoursPlayed is 0 or undefined, as requested) */}
                {game.hoursPlayed && game.hoursPlayed > 0 ? (
                  <div className="space-y-1.5 pt-1.5 border-t border-slate-800/60 font-sans">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400 font-sans font-medium text-xs tracking-tight">누적 플레이</span>
                      <span className="text-slate-200 text-xs font-medium">
                        <span className="font-mono font-bold text-amber-300 text-sm">{game.hoursPlayed}</span>시간
                      </span>
                    </div>
                    <div className="w-full flex items-center gap-1 py-0.5 no-print" aria-hidden="true">
                      {Array.from({ length: 14 }).map((_, i) => {
                        const activeCount = Math.max(1, Math.round((percentage / 100) * 14));
                        const isActive = i < activeCount;

                        const getActiveColor = (idx: number) => {
                          if (idx < 4) return 'bg-cyan-600/90';
                          if (idx < 7) return 'bg-cyan-400/95';
                          if (idx < 10) return 'bg-teal-300';
                          if (idx < 12) return 'bg-amber-300';
                          return 'bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.35)]';
                        };

                        return (
                          <div
                            key={i}
                            className={`h-1.5 flex-1 -skew-x-12 rounded-[0.5px] transition-all duration-300 ${
                              isActive ? getActiveColor(i) : 'bg-slate-800/40'
                            }`}
                          />
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="pt-1.5 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500 font-sans">
                    <span className={`text-[11px] font-mono flex items-center gap-1 ${
                      p === 'other' ? 'text-purple-400/80' : 'text-emerald-400/80'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full animate-pulse inline-block ${
                        p === 'other' ? 'bg-purple-400' : 'bg-emerald-400'
                      }`} />
                      플레이 이력 보관
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      {p === 'other' ? 'Official Site' : 'Google Play'}
                    </span>
                  </div>
                )}
              </a>
            );
          })}
        </div>
      )}

      {/* Cash Purchase Totals (Steam / Google Play / App Store) */}
      <div className="pt-4 border-t border-slate-800/80">
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#0b0f1a] to-[#070910] border border-slate-800/90 shadow-lg relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-72 h-36 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Header & Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3.5 border-b border-slate-800/70">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-950/70 border border-amber-500/40 flex items-center justify-center shrink-0 shadow-inner">
                <CreditCard className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm sm:text-base font-bold text-slate-200 tracking-wide font-sans">
                    게임 플랫폼 현금 결제 누적 총액
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300 font-semibold">
                    총 {totalSpent.toLocaleString()}원
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5 break-keep">
                  PC 및 모바일 플랫폼에서 실제 라이브러리 구매와 인게임 결제에 소모된 누적 투자 규모
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {isEditingPurchases ? (
                <>
                  <button
                    onClick={handleSavePurchases}
                    type="button"
                    className="px-2.5 py-1 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 border border-emerald-500/50 text-xs font-medium flex items-center gap-1.5 transition-all shadow-sm"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>저장</span>
                  </button>
                  <button
                    onClick={() => {
                      soundEngine.playClick();
                      setTempAmounts(purchaseAmounts);
                      setIsEditingPurchases(false);
                    }}
                    type="button"
                    className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs font-medium transition-all"
                  >
                    취소
                  </button>
                  <button
                    onClick={handleResetPurchases}
                    type="button"
                    title="초기 기본값으로 복원"
                    className="p-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-slate-200 border border-slate-700 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    soundEngine.playClick();
                    setTempAmounts(purchaseAmounts);
                    setIsEditingPurchases(true);
                  }}
                  type="button"
                  className="px-2.5 py-1 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 text-xs font-mono flex items-center gap-1.5 transition-all"
                >
                  <Edit3 className="w-3 h-3 text-cyan-400" />
                  <span>금액 직접 수정</span>
                </button>
              )}
            </div>
          </div>

          {/* 3 Platform Cards: Steam / Google Play / App Store */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-3.5">
            {/* 1. Steam */}
            <div className="p-3.5 rounded-xl bg-[#0d1220] border border-cyan-500/30 hover:border-cyan-500/60 transition-all flex flex-col justify-between gap-3 relative overflow-hidden group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-cyan-950/80 border border-cyan-500/50 flex items-center justify-center p-1.5 shrink-0">
                    <svg className="w-full h-full fill-cyan-400" viewBox="0 0 24 24">
                      <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.029 4.524 4.524s-2.03 4.524-4.524 4.524h-.105l-4.076 2.911c0 .052.005.105.005.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 12-5.373 12-12S18.605 0 11.979 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-200 block leading-tight">스팀 (Steam)</span>
                    <span className="text-[10px] text-cyan-400 font-mono">PC 라이브러리 & 게임 패키지</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-slate-500 uppercase px-1.5 py-0.5 rounded bg-black/40 border border-slate-800">
                  PC
                </span>
              </div>

              {isEditingPurchases ? (
                <div className="pt-1">
                  <label className="text-[10px] text-slate-400 font-mono block mb-1">결제 총액 (원):</label>
                  <input
                    type="number"
                    step="10000"
                    value={tempAmounts.steam}
                    onChange={(e) => setTempAmounts(prev => ({ ...prev, steam: Number(e.target.value) || 0 }))}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-cyan-500/50 text-white font-mono text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>
              ) : (
                <div className="space-y-1">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-slate-400">누적 결제액</span>
                    <div className="text-right">
                      <span className="text-lg sm:text-xl font-mono font-black text-cyan-300">
                        {purchaseAmounts.steam.toLocaleString()}
                      </span>
                      <span className="text-xs text-slate-400 ml-1 font-sans">원</span>
                    </div>
                  </div>
                  <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-cyan-400 h-full rounded-full transition-all duration-500"
                      style={{ width: `${totalSpent > 0 ? (purchaseAmounts.steam / totalSpent) * 100 : 0}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-slate-500 pt-0.5">
                    <span>전체 결제의 {totalSpent > 0 ? Math.round((purchaseAmounts.steam / totalSpent) * 100) : 0}%</span>
                    <span>패키지 및 DLC</span>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Google Play */}
            <div className="p-3.5 rounded-xl bg-[#0d1220] border border-emerald-500/30 hover:border-emerald-500/60 transition-all flex flex-col justify-between gap-3 relative overflow-hidden group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center p-1.5 shrink-0">
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                      <path d="M3.609 1.814L13.793 12 3.61 22.186A2.298 2.298 0 013 20.575V3.425c0-.62.228-1.2.609-1.611z" fill="#00E676" />
                      <path d="M17.186 8.607L13.793 12l3.393 3.393 3.829-2.209c1.096-.632 1.096-1.736 0-2.368l-3.829-2.209z" fill="#FFD600" />
                      <path d="M13.793 12L3.61 1.814c.381-.412.93-.652 1.542-.299l12.034 6.942L13.793 12z" fill="#00B0FF" />
                      <path d="M13.793 12l3.393 3.443-12.034 6.942c-.612.353-1.161.113-1.542-.299L13.793 12z" fill="#FF3D00" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-200 block leading-tight">구글 플레이 (Google Play)</span>
                    <span className="text-[10px] text-emerald-400 font-mono">안드로이드 인게임 과금 & 패스</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-slate-500 uppercase px-1.5 py-0.5 rounded bg-black/40 border border-slate-800">
                  AOS
                </span>
              </div>

              {isEditingPurchases ? (
                <div className="pt-1">
                  <label className="text-[10px] text-slate-400 font-mono block mb-1">결제 총액 (원):</label>
                  <input
                    type="number"
                    step="10000"
                    value={tempAmounts.googlePlay}
                    onChange={(e) => setTempAmounts(prev => ({ ...prev, googlePlay: Number(e.target.value) || 0 }))}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-emerald-500/50 text-white font-mono text-sm focus:outline-none focus:border-emerald-400"
                  />
                </div>
              ) : (
                <div className="space-y-1">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-slate-400">누적 결제액</span>
                    <div className="text-right">
                      <span className="text-lg sm:text-xl font-mono font-black text-emerald-300">
                        {purchaseAmounts.googlePlay.toLocaleString()}
                      </span>
                      <span className="text-xs text-slate-400 ml-1 font-sans">원</span>
                    </div>
                  </div>
                  <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-emerald-400 h-full rounded-full transition-all duration-500"
                      style={{ width: `${totalSpent > 0 ? (purchaseAmounts.googlePlay / totalSpent) * 100 : 0}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-slate-500 pt-0.5">
                    <span>전체 결제의 {totalSpent > 0 ? Math.round((purchaseAmounts.googlePlay / totalSpent) * 100) : 0}%</span>
                    <span>월정액 및 패스권</span>
                  </div>
                </div>
              )}
            </div>

            {/* 3. App Store */}
            <div className="p-3.5 rounded-xl bg-[#0d1220] border border-sky-500/30 hover:border-sky-500/60 transition-all flex flex-col justify-between gap-3 relative overflow-hidden group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-sky-950/80 border border-sky-500/50 flex items-center justify-center p-1.5 shrink-0">
                    <svg className="w-full h-full fill-sky-300" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.64 1.35-.56.65-1.06 1.71-.92 2.74 1.01.08 2.03-.49 2.64-1.24z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-200 block leading-tight">앱스토어 (App Store)</span>
                    <span className="text-[10px] text-sky-400 font-mono">iOS 인게임 아이템 & 유료 앱</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-slate-500 uppercase px-1.5 py-0.5 rounded bg-black/40 border border-slate-800">
                  iOS
                </span>
              </div>

              {isEditingPurchases ? (
                <div className="pt-1">
                  <label className="text-[10px] text-slate-400 font-mono block mb-1">결제 총액 (원):</label>
                  <input
                    type="number"
                    step="10000"
                    value={tempAmounts.appStore}
                    onChange={(e) => setTempAmounts(prev => ({ ...prev, appStore: Number(e.target.value) || 0 }))}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-sky-500/50 text-white font-mono text-sm focus:outline-none focus:border-sky-400"
                  />
                </div>
              ) : (
                <div className="space-y-1">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-slate-400">누적 결제액</span>
                    <div className="text-right">
                      <span className="text-lg sm:text-xl font-mono font-black text-sky-300">
                        {purchaseAmounts.appStore.toLocaleString()}
                      </span>
                      <span className="text-xs text-slate-400 ml-1 font-sans">원</span>
                    </div>
                  </div>
                  <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-sky-400 h-full rounded-full transition-all duration-500"
                      style={{ width: `${totalSpent > 0 ? (purchaseAmounts.appStore / totalSpent) * 100 : 0}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-slate-500 pt-0.5">
                    <span>전체 결제의 {totalSpent > 0 ? Math.round((purchaseAmounts.appStore / totalSpent) * 100) : 0}%</span>
                    <span>유료 앱 및 인게임 구매</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

