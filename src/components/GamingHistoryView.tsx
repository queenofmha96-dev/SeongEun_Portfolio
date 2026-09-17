import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Gamepad2, Clock, ExternalLink, ShieldCheck, Flame, Zap, RefreshCw, Radio, Smartphone, Monitor, Disc, CreditCard, Layers, ChevronLeft, ChevronRight, Search, X, ArrowRight } from 'lucide-react';
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
  const [activeTab, setActiveTab] = useState<'steam' | 'all'>('steam');
  const [platformFilter, setPlatformFilter] = useState<'all' | GamePlatform>('all');
  const [steamData, setSteamData] = useState<SteamProfileData>(OFFICIAL_STEAM_PROFILE_DATA);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [lastSyncTime, setLastSyncTime] = useState<string | null>(null);
  const [syncStatus, setSyncStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Platform Cash Purchase Totals (Steam, Google Play, App Store) - Official Verified Figures
  const purchaseAmounts = useMemo(() => ({
    steam: 6688000,
    googlePlay: 2372200,
    appStore: 2729500
  }), []);

  const totalSpent = purchaseAmounts.steam + purchaseAmounts.googlePlay + purchaseAmounts.appStore;

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

  // 1열 4칸(4열) 기준, 밑으로 2행까지 = 한 페이지당 8개
  const ITEMS_PER_PAGE = 8;
  const [steamPage, setSteamPage] = useState<number>(1);
  const [playedGamesPage, setPlayedGamesPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [steamJumpInput, setSteamJumpInput] = useState<string>('');
  const [playedJumpInput, setPlayedJumpInput] = useState<string>('');
  const gamesListTopRef = useRef<HTMLDivElement>(null);

  // Filtered steam games with search query (최근 플레이 게임 상위 4개 유지)
  const recentSteamGames = useMemo(() => {
    return steamData.games.slice(0, 4);
  }, [steamData.games]);

  const searchedSteamGames = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return recentSteamGames;
    return recentSteamGames.filter(g =>
      g.name.toLowerCase().includes(q) ||
      g.appId.includes(q)
    );
  }, [recentSteamGames, searchQuery]);

  // Filtered played games with search query (on top of platform filter)
  const searchedPlayedGames = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return filteredPlayedGames;
    return filteredPlayedGames.filter(g =>
      g.name.toLowerCase().includes(q) ||
      (g.genre && g.genre.toLowerCase().includes(q)) ||
      (g.audioFocus && g.audioFocus.toLowerCase().includes(q)) ||
      (g.tag && g.tag.toLowerCase().includes(q)) ||
      g.appId.includes(q)
    );
  }, [filteredPlayedGames, searchQuery]);

  const steamTotalPages = Math.max(1, Math.ceil(searchedSteamGames.length / ITEMS_PER_PAGE));
  const paginatedSteamGames = useMemo(() => {
    const start = (steamPage - 1) * ITEMS_PER_PAGE;
    return searchedSteamGames.slice(start, start + ITEMS_PER_PAGE);
  }, [searchedSteamGames, steamPage]);

  // Top 6 Most Played Games for PDF Document Print Layout (Filtered & Sorted Descending by Playtime)
  const top6PlayedGames = useMemo(() => {
    const gameMap = new Map<string, {
      appId: string;
      name: string;
      hoursPlayed: number;
      genre: string;
      audioFocus: string;
      url: string;
      platform: string;
    }>();

    // 1. Add all from PLAYED_GAMES_LIST
    PLAYED_GAMES_LIST.forEach((g) => {
      gameMap.set(g.appId, {
        appId: g.appId,
        name: g.name,
        hoursPlayed: g.hoursPlayed || 0,
        genre: g.genre,
        audioFocus: g.audioFocus,
        url: g.steamUrl || `https://store.steampowered.com/app/${g.appId}/`,
        platform: g.platform || 'steam',
      });
    });

    // 2. Sync live steam hours if greater or add steam games
    steamData.games.forEach((sg) => {
      const existing = gameMap.get(sg.appId);
      if (existing) {
        existing.hoursPlayed = Math.max(existing.hoursPlayed, sg.hoursTotal);
        if (sg.link) existing.url = sg.link;
      } else {
        gameMap.set(sg.appId, {
          appId: sg.appId,
          name: sg.name,
          hoursPlayed: sg.hoursTotal,
          genre: 'PC 게임',
          audioFocus: '실시간 플레이 세션 및 사운드 시스템 분석',
          url: sg.link || `https://store.steampowered.com/app/${sg.appId}/`,
          platform: 'steam',
        });
      }
    });

    return Array.from(gameMap.values())
      .sort((a, b) => b.hoursPlayed - a.hoursPlayed)
      .slice(0, 6);
  }, [steamData]);

  const playedTotalPages = Math.max(1, Math.ceil(searchedPlayedGames.length / ITEMS_PER_PAGE));
  const paginatedPlayedGames = useMemo(() => {
    const start = (playedGamesPage - 1) * ITEMS_PER_PAGE;
    return searchedPlayedGames.slice(start, start + ITEMS_PER_PAGE);
  }, [searchedPlayedGames, playedGamesPage]);

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setSteamPage(1);
    setPlayedGamesPage(1);
  };

  const handleSteamJumpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const p = parseInt(steamJumpInput.trim(), 10);
    if (!isNaN(p)) {
      const targetPage = Math.max(1, Math.min(p, steamTotalPages));
      handleSteamPageChange(targetPage);
      setSteamJumpInput('');
    }
  };

  const handlePlayedJumpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const p = parseInt(playedJumpInput.trim(), 10);
    if (!isNaN(p)) {
      const targetPage = Math.max(1, Math.min(p, playedTotalPages));
      handlePlayedPageChange(targetPage);
      setPlayedJumpInput('');
    }
  };

  const handleTabChange = (tab: 'steam' | 'all') => {
    soundEngine.playClick();
    setActiveTab(tab);
    setSteamPage(1);
    setPlayedGamesPage(1);
  };

  const handlePlatformChange = (platform: 'all' | GamePlatform) => {
    soundEngine.playClick();
    setPlatformFilter(platform);
    setPlayedGamesPage(1);
  };

  const handleSteamPageChange = (newPage: number) => {
    if (newPage < 1 || newPage > steamTotalPages || newPage === steamPage) return;
    soundEngine.playClick();
    setSteamPage(newPage);
  };

  const handlePlayedPageChange = (newPage: number) => {
    if (newPage < 1 || newPage > playedTotalPages || newPage === playedGamesPage) return;
    soundEngine.playClick();
    setPlayedGamesPage(newPage);
  };

  const getPageNumbers = (current: number, total: number) => {
    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }
    const pages: (number | string)[] = [1];
    if (current > 3) pages.push('ellipsis-start');
    const start = Math.max(2, current - 1);
    const end = Math.min(total - 1, current + 1);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    if (current < total - 2) pages.push('ellipsis-end');
    pages.push(total);
    return pages;
  };

  return (
    <div className="w-full space-y-6 animate-fadeIn font-sans text-slate-100 py-1">
      {/* Print-Only: Steam Verified Header & Document Summary */}
      <div className="hidden print:flex items-center justify-between border-b-2 border-slate-700 pb-2 mb-2 text-xs font-sans text-slate-800">
        <div className="flex items-center gap-2.5 font-mono">
          <span className="font-bold text-slate-950">STEAM PROFILE: {steamData.steamID}</span>
          <span className="text-slate-400">|</span>
          <span>SteamID64: {steamData.steamID64}</span>
          <span className="text-slate-400">|</span>
          <span>가입: {steamData.memberSince}</span>
        </div>
        <div className="font-mono text-slate-700">
          총 누적 플레이타임: <strong className="font-bold text-slate-950">{totalHours.toLocaleString()}시간+</strong> ({PLAYED_GAMES_LIST.length}개 게임)
        </div>
      </div>

      {/* Official Steam Verified Profile Showcase Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0d1424] via-[#09101f] to-[#0d1527] border border-cyan-500/40 p-4 sm:p-6 shadow-xl no-print print:hidden">
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
              <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-[#09101f] shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
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
            <div className="bg-[#050912]/90 border border-slate-700/80 px-4 py-2.5 rounded-xl text-center shadow-sm">
              <div className="text-xs text-slate-200 font-sans font-semibold flex items-center justify-center gap-1.5">
                <span className="tracking-normal">스팀 실시간 누적</span>
                <button
                  onClick={fetchLiveSteamData}
                  disabled={isLoading}
                  title="스팀 실시간 동기화 새로고침"
                  className="p-1 hover:text-cyan-300 transition-colors disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-cyan-400' : 'text-slate-400'}`} />
                </button>
              </div>
              <div className="text-lg sm:text-xl font-mono font-bold text-amber-300 tracking-tight">
                {steamTotalHours.toLocaleString()}시간+
              </div>
            </div>

            <a
              href={`https://steamcommunity.com/profiles/${steamData.steamID64}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium text-xs sm:text-sm shadow-lg shadow-cyan-950/50 transition-all hover:scale-[1.02] shrink-0 transform-gpu will-change-transform"
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

      {/* Tabs / Filter Controls - High-Visibility Game Library Mode Selector Dock */}
      <div ref={gamesListTopRef} className="space-y-4 scroll-mt-20 print:hidden">
        <div className="rounded-2xl bg-[#090d1c] border-2 border-slate-700/90 p-3.5 sm:p-5 shadow-[0_12px_32px_rgba(0,0,0,0.6)] space-y-3.5">
          {/* Top Label & Status Summary */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/90 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shrink-0" />
              <span className="text-xs sm:text-sm font-sans font-bold text-slate-200 tracking-tight flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-cyan-400" />
                게임 라이브러리 모드 선택
              </span>
              <span className="text-xs text-cyan-300 bg-cyan-950/80 border border-cyan-500/40 px-2 py-0.5 rounded-md font-medium hidden xs:inline-block font-sans">
                탭을 눌러 모드를 전환하세요
              </span>
            </div>

            <div className="flex items-center gap-3 ml-auto">
              {lastSyncTime && (
                <span className="text-xs font-sans text-slate-400 hidden md:inline">
                  최근 동기화: <span className="font-mono text-slate-300">{lastSyncTime}</span>
                </span>
              )}
              <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-amber-300 bg-black/60 border border-amber-500/30 px-3 py-1.5 rounded-xl shrink-0">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-bold">
                  {activeTab === 'steam'
                    ? `스팀 총 ${steamTotalHours.toLocaleString()}시간+`
                    : platformFilter === 'mobile'
                    ? `모바일 총 ${platformCounts.mobile}개`
                    : platformFilter === 'all'
                    ? `총 ${totalHours.toLocaleString()}시간+ (${PLAYED_GAMES_LIST.length}개)`
                    : `${filteredHours.toLocaleString()}시간`}
                </span>
              </div>
            </div>
          </div>

          {/* Big 2-Column High-Contrast Tab Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Tab 1: 최근 플레이한 게임 (Steam Live) */}
            <button
              onClick={() => handleTabChange('steam')}
              onMouseEnter={() => soundEngine.playHover()}
              className={`relative flex items-center justify-between gap-3 p-3.5 sm:p-4 rounded-xl text-left transition-all cursor-pointer ${
                activeTab === 'steam'
                  ? 'bg-gradient-to-r from-cyan-950 via-[#0a273c] to-cyan-900/90 border-2 border-cyan-400 shadow-[0_0_24px_rgba(6,182,212,0.4)] ring-1 ring-cyan-400/60 text-white'
                  : 'bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-500 text-slate-300 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    activeTab === 'steam'
                      ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.6)]'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-black tracking-tight text-white truncate">
                      최근 플레이한 게임
                    </span>
                    {activeTab === 'steam' && (
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-400 text-slate-950 shrink-0">
                        ACTIVE
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-xs font-sans truncate ${
                      activeTab === 'steam' ? 'text-cyan-200/90' : 'text-slate-400'
                    }`}
                  >
                    스팀 실시간 연동 • 최근 활동
                  </p>
                </div>
              </div>

              <span
                className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-mono font-black shrink-0 transition-colors ${
                  activeTab === 'steam'
                    ? 'bg-cyan-400 text-slate-950 shadow-[0_0_12px_rgba(6,182,212,0.5)]'
                    : 'bg-slate-800 text-slate-300 border border-slate-700'
                }`}
              >
                {recentSteamGames.length}개
              </span>
            </button>

            {/* Tab 2: 플레이한 게임 목록 (All Games Catalog) */}
            <button
              onClick={() => handleTabChange('all')}
              onMouseEnter={() => soundEngine.playHover()}
              className={`relative flex items-center justify-between gap-3 p-3.5 sm:p-4 rounded-xl text-left transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-amber-950 via-[#331f08] to-amber-900/90 border-2 border-amber-400 shadow-[0_0_24px_rgba(245,158,11,0.4)] ring-1 ring-amber-400/60 text-white'
                  : 'bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-500 text-slate-300 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    activeTab === 'all'
                      ? 'bg-amber-400 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.6)]'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  <Gamepad2 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-black tracking-tight text-white truncate">
                      플레이한 게임 목록
                    </span>
                    {activeTab === 'all' && (
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-400 text-slate-950 shrink-0">
                        ACTIVE
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-xs font-sans truncate ${
                      activeTab === 'all' ? 'text-amber-200/90' : 'text-slate-400'
                    }`}
                  >
                    콘솔 • PC • 모바일 전체 라이브러리
                  </p>
                </div>
              </div>

              <span
                className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-mono font-black shrink-0 transition-colors ${
                  activeTab === 'all'
                    ? 'bg-amber-400 text-slate-950 shadow-[0_0_12px_rgba(245,158,11,0.5)]'
                    : 'bg-slate-800 text-slate-300 border border-slate-700'
                }`}
              >
                {PLAYED_GAMES_LIST.length}개
              </span>
            </button>
          </div>

          {/* Platform Filter Buttons (Active in 'all' tab) */}
          {activeTab === 'all' && (
            <div className="pt-2 border-t border-slate-800/80">
              <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none">
                <span className="text-xs text-amber-400 font-mono font-bold shrink-0 mr-1 flex items-center gap-1">
                  플랫폼 필터:
                </span>
                
                <button
                  onClick={() => handlePlatformChange('all')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 flex items-center gap-1.5 ${
                    platformFilter === 'all'
                      ? 'bg-amber-500/25 text-amber-300 border-2 border-amber-400 shadow-xs'
                      : 'text-slate-400 hover:text-slate-200 bg-slate-900/60 border border-slate-800'
                  }`}
                >
                  <span>전체 (ALL)</span>
                  <span className="text-[11px] font-mono opacity-80 font-bold">({platformCounts.all})</span>
                </button>

                <button
                  onClick={() => handlePlatformChange('steam')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 flex items-center gap-1.5 ${
                    platformFilter === 'steam'
                      ? 'bg-cyan-500/25 text-cyan-300 border-2 border-cyan-400 shadow-xs'
                      : 'text-slate-400 hover:text-slate-200 bg-slate-900/60 border border-slate-800'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5 text-cyan-400" />
                  <span>PC / Steam</span>
                  <span className="text-[11px] font-mono opacity-80 font-bold">({platformCounts.steam})</span>
                </button>

                <button
                  onClick={() => handlePlatformChange('ps5')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 flex items-center gap-1.5 ${
                    platformFilter === 'ps5'
                      ? 'bg-blue-500/30 text-blue-300 border-2 border-blue-400 shadow-xs'
                      : 'text-slate-400 hover:text-slate-200 bg-slate-900/60 border border-slate-800'
                  }`}
                >
                  <Disc className="w-3.5 h-3.5 text-blue-400" />
                  <span>PlayStation 5</span>
                  <span className="text-[11px] font-mono opacity-80 font-bold">({platformCounts.ps5})</span>
                </button>

                <button
                  onClick={() => handlePlatformChange('switch')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 flex items-center gap-1.5 ${
                    platformFilter === 'switch'
                      ? 'bg-red-500/30 text-red-300 border-2 border-red-400 shadow-xs'
                      : 'text-slate-400 hover:text-slate-200 bg-slate-900/60 border border-slate-800'
                  }`}
                >
                  <Gamepad2 className="w-3.5 h-3.5 text-red-400" />
                  <span>Nintendo Switch</span>
                  <span className="text-[11px] font-mono opacity-80 font-bold">({platformCounts.switch})</span>
                </button>

                <button
                  onClick={() => handlePlatformChange('mobile')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 flex items-center gap-1.5 ${
                    platformFilter === 'mobile'
                      ? 'bg-emerald-500/30 text-emerald-300 border-2 border-emerald-400 shadow-xs'
                      : 'text-slate-400 hover:text-slate-200 bg-slate-900/60 border border-slate-800'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Mobile</span>
                  <span className="text-[11px] font-mono opacity-80 font-bold">({platformCounts.mobile})</span>
                </button>

                <button
                  onClick={() => handlePlatformChange('other')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 flex items-center gap-1.5 ${
                    platformFilter === 'other'
                      ? 'bg-purple-500/30 text-purple-300 border-2 border-purple-400 shadow-xs'
                      : 'text-slate-400 hover:text-slate-200 bg-slate-900/60 border border-slate-800'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5 text-purple-400" />
                  <span>그외 게임</span>
                  <span className="text-[11px] font-mono opacity-80 font-bold">({platformCounts.other})</span>
                </button>
              </div>
            </div>
          )}

          {/* Realtime Game Search Input Bar */}
          <div className="pt-3 border-t border-slate-800/80">
            <div className="relative flex items-center">
              <div className="absolute left-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4 text-cyan-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder={
                  activeTab === 'steam'
                    ? "스팀 게임명 또는 AppID 검색 (예: 명조, Apex, 578080...)"
                    : "게임명, 장르, 오디오 사운드 특징 검색 (예: 몬헌, 오클루전, 타격감, FPS...)"
                }
                className="w-full pl-10 pr-24 py-2.5 rounded-xl bg-black/70 border border-slate-700/80 hover:border-slate-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 text-slate-100 placeholder:text-slate-500 text-xs sm:text-sm font-sans transition-all outline-none"
              />
              <div className="absolute right-2.5 flex items-center gap-1.5">
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => handleSearchChange('')}
                    className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                    title="검색어 지우기"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-800/90 text-cyan-300 border border-slate-700 font-bold shrink-0">
                  {activeTab === 'steam' ? searchedSteamGames.length : searchedPlayedGames.length}개
                </span>
              </div>
            </div>
            {searchQuery && (
              <div className="flex items-center justify-between text-[11px] text-slate-400 mt-1.5 px-1 font-sans">
                <span>
                  '<strong className="text-cyan-300 font-semibold">{searchQuery}</strong>' 검색 결과: 총 {activeTab === 'steam' ? searchedSteamGames.length : searchedPlayedGames.length}개 일치
                </span>
                <button
                  type="button"
                  onClick={() => handleSearchChange('')}
                  className="text-cyan-400 hover:underline cursor-pointer font-medium"
                >
                  검색 초기화
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tab 1: Steam Connected Games */}
      {activeTab === 'steam' && (
        <div className="space-y-4 print:hidden">
          {searchedSteamGames.length === 0 ? (
            <div className="py-12 px-4 rounded-2xl bg-[#0a0c14] border border-slate-800 text-center space-y-3">
              <Search className="w-8 h-8 text-slate-600 mx-auto" />
              <p className="text-sm text-slate-300 font-sans">
                '<span className="text-cyan-400 font-bold">{searchQuery}</span>' 검색어와 일치하는 스팀 게임이 없습니다.
              </p>
              <button
                type="button"
                onClick={() => handleSearchChange('')}
                className="px-4 py-2 rounded-xl bg-cyan-950 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-semibold hover:bg-cyan-900 transition-colors cursor-pointer"
              >
                검색 초기화
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 animate-fadeIn">
            {paginatedSteamGames.map((game) => {
              const percentage = Math.min(100, Math.round((game.hoursTotal / steamMaxHours) * 100));

              return (
                <a
                  key={game.appId}
                  href={game.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 sm:p-4.5 rounded-2xl bg-[#0a0c14] border border-slate-800/80 hover:border-cyan-500/60 hover:bg-[#0d101a] transition-all duration-300 flex flex-col justify-between gap-3.5 shadow-md relative overflow-hidden"
                >
                  {/* Game Capsule Thumbnail Header - Enlarged & Prominent Aspect Ratio */}
                  <div className="relative rounded-xl overflow-hidden border border-slate-800/90 bg-[#060810] aspect-[16/10] w-full shadow-inner">
                    <img
                      src={game.logo}
                      alt={game.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 contrast-[1.04] brightness-[1.02]"
                      loading="eager"
                      decoding="async"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c14]/90 via-transparent to-transparent pointer-events-none" />
                    
                    {game.hours2wk > 0 && (
                      <span className="absolute top-2.5 right-2.5 inline-flex items-center gap-1 text-[10.5px] font-mono font-bold bg-emerald-950/90 text-emerald-400 border border-emerald-500/50 px-2.5 py-0.5 rounded-md shadow-md backdrop-blur-sm">
                        <Flame className="w-3.5 h-3.5 text-emerald-400" />
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

          {/* Steam Games Pagination */}
          {searchedSteamGames.length > 0 && (
            <div className="pt-4 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-400 font-mono">
                최근 플레이 게임: 총 <span className="text-cyan-400 font-bold">{searchedSteamGames.length}</span>개 표시{steamTotalPages > 1 ? ` (페이지 ${steamPage} / ${steamTotalPages})` : ''}
              </div>

              <div className="flex items-center gap-2.5 flex-wrap justify-center">
                {steamTotalPages > 1 && (
                  <div className="flex items-center gap-1.5 flex-wrap justify-center">
                    <button
                      type="button"
                      onClick={() => handleSteamPageChange(steamPage - 1)}
                      disabled={steamPage === 1}
                      aria-label="이전 페이지"
                      className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs sm:text-sm font-mono flex items-center gap-1 border transition-colors whitespace-nowrap ${
                        steamPage === 1
                          ? 'border-slate-800/60 text-slate-600 bg-[#080a12] cursor-not-allowed'
                          : 'border-slate-800 text-slate-300 bg-[#0a0c16] hover:text-white hover:bg-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>이전</span>
                    </button>

                    {getPageNumbers(steamPage, steamTotalPages).map((p, idx) => {
                      if (typeof p === 'string') {
                        return <span key={`steam-dot-${idx}`} className="px-2 text-slate-600 font-mono">•••</span>;
                      }
                      const isActive = p === steamPage;
                      return (
                        <button
                          key={`steam-page-${p}`}
                          type="button"
                          onClick={() => handleSteamPageChange(p)}
                          aria-current={isActive ? 'page' : undefined}
                          className={`min-h-[44px] min-w-[44px] px-3.5 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold flex items-center justify-center border transition-all ${
                            isActive
                              ? 'border-cyan-500/70 bg-cyan-950 text-cyan-300 shadow-sm shadow-cyan-500/30'
                              : 'border-slate-800 text-slate-400 bg-[#0a0c16] hover:text-white hover:bg-slate-800 hover:border-slate-700'
                          }`}
                        >
                          {p}
                        </button>
                      );
                    })}

                    <button
                      type="button"
                      onClick={() => handleSteamPageChange(steamPage + 1)}
                      disabled={steamPage === steamTotalPages}
                      aria-label="다음 페이지"
                      className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs sm:text-sm font-mono flex items-center gap-1 border transition-colors whitespace-nowrap ${
                        steamPage === steamTotalPages
                          ? 'border-slate-800/60 text-slate-600 bg-[#080a12] cursor-not-allowed'
                          : 'border-slate-800 text-slate-300 bg-[#0a0c16] hover:text-white hover:bg-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <span>다음</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* Direct Jump to Page Form */}
                {steamTotalPages > 1 && (
                  <form
                    onSubmit={handleSteamJumpSubmit}
                    className="flex items-center gap-1.5 bg-[#080a12] border border-slate-800 hover:border-slate-700 rounded-xl px-2.5 py-1.5 shrink-0 transition-colors"
                  >
                    <span className="text-xs text-slate-400 font-mono">이동:</span>
                    <input
                      type="number"
                      min={1}
                      max={steamTotalPages}
                      value={steamJumpInput}
                      onChange={(e) => setSteamJumpInput(e.target.value)}
                      placeholder={String(steamPage)}
                      className="w-12 h-8 px-1 rounded-lg bg-black/80 border border-slate-700 text-center font-mono font-bold text-xs text-cyan-300 focus:outline-none focus:border-cyan-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <span className="text-xs text-slate-500 font-mono">/ {steamTotalPages}</span>
                    <button
                      type="submit"
                      aria-label="스팀 페이지 바로 이동"
                      className="h-8 px-2.5 rounded-lg bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1"
                    >
                      <span>이동</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Full Played Games List with Platform Filtering */}
      {activeTab === 'all' && (
        <div className="space-y-4 print:hidden">
          {searchedPlayedGames.length === 0 ? (
            <div className="py-12 px-4 rounded-2xl bg-[#0a0c14] border border-slate-800 text-center space-y-3">
              <Search className="w-8 h-8 text-slate-600 mx-auto" />
              <p className="text-sm text-slate-300 font-sans">
                {searchQuery ? (
                  <>
                    '<span className="text-amber-400 font-bold">{searchQuery}</span>' 검색어와 일치하는 게임이 없습니다.
                  </>
                ) : (
                  <>선택한 플랫폼에 등록된 게임이 없습니다.</>
                )}
              </p>
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => handleSearchChange('')}
                  className="px-4 py-2 rounded-xl bg-amber-950 text-amber-300 border border-amber-500/40 text-xs font-mono font-semibold hover:bg-amber-900 transition-colors cursor-pointer"
                >
                  검색 초기화
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-fadeIn">
            {paginatedPlayedGames.map((game, index) => {
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
                        <span>#{(playedGamesPage - 1) * ITEMS_PER_PAGE + index + 1}</span>
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

                  {/* Playtime Progress Bar & Hours */}
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
                      <span className={`text-xs font-sans font-medium flex items-center gap-1.5 ${
                        p === 'other' ? 'text-purple-300' : 'text-emerald-300'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full animate-pulse inline-block ${
                          p === 'other' ? 'bg-purple-400' : 'bg-emerald-400'
                        }`} />
                        플레이 이력 보관
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {p === 'other' ? 'Official Site' : 'Google Play'}
                      </span>
                    </div>
                  )}
                </a>
              );
            })}
          </div>
          )}

          {/* Tab 2 Pagination */}
          {searchedPlayedGames.length > 0 && (
            <div className="pt-4 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-400 font-mono">
                {platformFilter === 'all' ? '전체 게임' : `${platformFilter.toUpperCase()} 게임`}: 총{' '}
                <span className="text-amber-400 font-bold">{searchedPlayedGames.length}</span>개 중{' '}
                <span className="text-slate-200 font-bold">
                  {(playedGamesPage - 1) * ITEMS_PER_PAGE + 1} ~ {Math.min(playedGamesPage * ITEMS_PER_PAGE, searchedPlayedGames.length)}
                </span>개 표시 (페이지 {playedGamesPage} / {playedTotalPages})
              </div>

              <div className="flex items-center gap-2.5 flex-wrap justify-center">
                {playedTotalPages > 1 && (
                  <div className="flex items-center gap-1.5 flex-wrap justify-center">
                    <button
                      type="button"
                      onClick={() => handlePlayedPageChange(playedGamesPage - 1)}
                      disabled={playedGamesPage === 1}
                      aria-label="이전 페이지"
                      className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs sm:text-sm font-mono flex items-center gap-1 border transition-colors whitespace-nowrap ${
                        playedGamesPage === 1
                          ? 'border-slate-800/60 text-slate-600 bg-[#080a12] cursor-not-allowed'
                          : 'border-slate-800 text-slate-300 bg-[#0a0c16] hover:text-white hover:bg-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>이전</span>
                    </button>

                    {getPageNumbers(playedGamesPage, playedTotalPages).map((p, idx) => {
                      if (typeof p === 'string') {
                        return <span key={`played-dot-${idx}`} className="px-2 text-slate-600 font-mono">•••</span>;
                      }
                      const isActive = p === playedGamesPage;
                      return (
                        <button
                          key={`played-page-${p}`}
                          type="button"
                          onClick={() => handlePlayedPageChange(p)}
                          aria-current={isActive ? 'page' : undefined}
                          className={`min-h-[44px] min-w-[44px] px-3.5 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold flex items-center justify-center border transition-all ${
                            isActive
                              ? 'border-amber-500/70 bg-amber-950 text-amber-300 shadow-sm shadow-amber-500/30'
                              : 'border-slate-800 text-slate-400 bg-[#0a0c16] hover:text-white hover:bg-slate-800 hover:border-slate-700'
                          }`}
                        >
                          {p}
                        </button>
                      );
                    })}

                    <button
                      type="button"
                      onClick={() => handlePlayedPageChange(playedGamesPage + 1)}
                      disabled={playedGamesPage === playedTotalPages}
                      aria-label="다음 페이지"
                      className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs sm:text-sm font-mono flex items-center gap-1 border transition-colors whitespace-nowrap ${
                        playedGamesPage === playedTotalPages
                          ? 'border-slate-800/60 text-slate-600 bg-[#080a12] cursor-not-allowed'
                          : 'border-slate-800 text-slate-300 bg-[#0a0c16] hover:text-white hover:bg-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <span>다음</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* Direct Jump to Page Form */}
                {playedTotalPages > 1 && (
                  <form
                    onSubmit={handlePlayedJumpSubmit}
                    className="flex items-center gap-1.5 bg-[#080a12] border border-slate-800 hover:border-slate-700 rounded-xl px-2.5 py-1.5 shrink-0 transition-colors"
                  >
                    <span className="text-xs text-slate-400 font-mono">이동:</span>
                    <input
                      type="number"
                      min={1}
                      max={playedTotalPages}
                      value={playedJumpInput}
                      onChange={(e) => setPlayedJumpInput(e.target.value)}
                      placeholder={String(playedGamesPage)}
                      className="w-12 h-8 px-1 rounded-lg bg-black/80 border border-slate-700 text-center font-mono font-bold text-xs text-amber-300 focus:outline-none focus:border-amber-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <span className="text-xs text-slate-500 font-mono">/ {playedTotalPages}</span>
                    <button
                      type="submit"
                      aria-label="게임 페이지 바로 이동"
                      className="h-8 px-2.5 rounded-lg bg-amber-950 hover:bg-amber-900 text-amber-300 border border-amber-500/40 text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1"
                    >
                      <span>이동</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Print-Only: Top 6 Most Played Games for PDF Document Layout (No image boxes, clean links and sound analysis) */}
      <div className="hidden print:block space-y-2.5 pt-1">
        <div className="border-b-2 border-slate-700 pb-1.5 flex items-baseline justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-950 font-sans tracking-tight">
              핵심 게임 플레이 이력 (누적 플레이타임 TOP 6)
            </h3>
            <p className="text-[11px] text-slate-600 font-sans mt-0.5">
              사운드 디자인 분석, 공간 음향 믹싱 및 상호작용 오디오 시스템 연구를 위해 심층 플레이한 대표작 6선
            </p>
          </div>
          <span className="text-[10px] font-mono font-semibold text-slate-600 shrink-0">
            [스토어 및 공식 링크 포함]
          </span>
        </div>

        <div className="overflow-hidden border-t border-b border-slate-300">
          <table className="w-full text-left text-[11px] border-collapse table-fixed">
            <thead>
              <tr className="border-b border-slate-300 text-slate-900 font-bold">
                <th className="py-1.5 px-2 text-center w-[6%] font-mono">순위</th>
                <th className="py-1.5 px-2.5 w-[22%]">게임 타이틀</th>
                <th className="py-1.5 px-1.5 text-center w-[14%]">장르 / 플랫폼</th>
                <th className="py-1.5 px-2 text-right w-[12%] font-mono">플레이타임</th>
                <th className="py-1.5 px-2.5 w-[28%]">사운드 디자인 분석 관점 & 오디오 시스템</th>
                <th className="py-1.5 px-2.5 w-[18%]">공식 바로가기</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {top6PlayedGames.map((game, idx) => (
                <tr key={game.appId} className="align-top hover:bg-slate-50 break-inside-avoid">
                  <td className="py-2 px-2 text-center font-mono font-bold text-slate-700">
                    0{idx + 1}
                  </td>
                  <td className="py-2 px-2.5">
                    <div className="font-bold text-slate-900 leading-snug break-keep">{game.name}</div>
                    <div className="text-[9.5px] font-mono text-slate-500 mt-0.5">AppID: {game.appId}</div>
                  </td>
                  <td className="py-2 px-1.5 text-center text-slate-700">
                    <span className="text-[10px] text-slate-800 font-medium whitespace-nowrap">
                      {game.genre}
                    </span>
                  </td>
                  <td className="py-2 px-2 text-right font-mono font-black text-slate-900 whitespace-nowrap">
                    {game.hoursPlayed.toLocaleString()}시간
                  </td>
                  <td className="py-2 px-2.5 text-slate-700 leading-snug text-[10.5px] break-keep">
                    {game.audioFocus}
                  </td>
                  <td className="py-2 px-2.5 text-[10.5px]">
                    <a
                      href={game.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 underline font-mono break-all hover:text-blue-900 leading-tight block truncate"
                      title={game.url}
                    >
                      {game.url.replace(/^https?:\/\/(www\.)?/, '')}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Print-Only: Cash Purchase Totals 1-Line Summary Bar */}
        <div className="flex items-center justify-between border-t border-slate-300 pt-2 text-[10.5px] text-slate-700 font-sans">
          <div>
            <span className="font-bold text-slate-950">[26년도 기준 집계]</span> 게임 플랫폼 현금 결제 누적 총액: <strong className="font-mono text-slate-950 font-bold">{totalSpent.toLocaleString()}원</strong>
          </div>
          <div className="font-mono text-slate-600 text-[10px]">
            Steam: {purchaseAmounts.steam.toLocaleString()}원 / Google Play: {purchaseAmounts.googlePlay.toLocaleString()}원 / App Store: {purchaseAmounts.appStore.toLocaleString()}원
          </div>
        </div>
      </div>

      {/* Cash Purchase Totals - Refined Balanced Detail (답답한 외곽 박스는 배제하고 유용한 정보와 디테일을 보존) */}
      <div className="pt-6 pb-2 border-t border-slate-800/80 no-print print:hidden space-y-3.5">
        {/* Header: Title, Total Badge, Description */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2 flex-wrap">
              <CreditCard className="w-4 h-4 text-amber-400 shrink-0" />
              <h4 className="text-sm font-bold text-slate-200 tracking-wide font-sans">
                게임 플랫폼 현금 결제 누적 총액
              </h4>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold">
                총 {totalSpent.toLocaleString()}원
              </span>
            </div>
            <p className="text-xs text-slate-400 break-keep">
              PC 및 모바일 플랫폼 실제 라이브러리 구매와 인게임 결제에 소모된 누적 투자 규모
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono self-start sm:self-auto shrink-0">
            <span className="w-2 h-2 rounded-full bg-amber-400/80 animate-pulse shrink-0" />
            <span>26년도 기준 집계</span>
          </div>
        </div>

        {/* 3 Platform Detailed Metrics (Flat & Clean Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* 1. Steam */}
          <div className="p-3 rounded-xl bg-[#0a0d17]/80 border border-slate-800/70 hover:border-cyan-500/40 transition-colors space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center p-1 shrink-0">
                  <svg className="w-full h-full fill-cyan-400" viewBox="0 0 24 24">
                    <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.029 4.524 4.524s-2.03 4.524-4.524 4.524h-.105l-4.076 2.911c0 .052.005.105.005.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 12-5.373 12-12S18.605 0 11.979 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-200 block leading-tight">스팀 (Steam)</span>
                  <span className="text-[11px] text-slate-400 font-sans">PC 패키지 & DLC</span>
                </div>
              </div>
              <span className="text-[10px] font-mono text-cyan-300 font-bold px-1.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30">
                {totalSpent > 0 ? Math.round((purchaseAmounts.steam / totalSpent) * 100) : 0}%
              </span>
            </div>

            <div className="space-y-1 pt-0.5">
              <div className="flex items-baseline justify-between text-xs">
                <span className="text-slate-400 text-[11px]">누적 결제</span>
                <span className="font-mono font-bold text-cyan-300 text-sm">
                  {purchaseAmounts.steam.toLocaleString()}<span className="text-[11px] text-slate-400 ml-0.5 font-sans">원</span>
                </span>
              </div>
              <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden">
                <div
                  className="bg-cyan-400 h-full rounded-full transition-all duration-500"
                  style={{ width: `${totalSpent > 0 ? (purchaseAmounts.steam / totalSpent) * 100 : 0}%` }}
                />
              </div>
            </div>
          </div>

          {/* 2. Google Play */}
          <div className="p-3 rounded-xl bg-[#0a0d17]/80 border border-slate-800/70 hover:border-emerald-500/40 transition-colors space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center p-1 shrink-0">
                  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                    <path d="M3.609 1.814L13.793 12 3.61 22.186A2.298 2.298 0 013 20.575V3.425c0-.62.228-1.2.609-1.611z" fill="#00E676" />
                    <path d="M17.186 8.607L13.793 12l3.393 3.393 3.829-2.209c1.096-.632 1.096-1.736 0-2.368l-3.829-2.209z" fill="#FFD600" />
                    <path d="M13.793 12L3.61 1.814c.381-.412.93-.652 1.542-.299l12.034 6.942L13.793 12z" fill="#00B0FF" />
                    <path d="M13.793 12l3.393 3.443-12.034 6.942c-.612.353-1.161.113-1.542-.299L13.793 12z" fill="#FF3D00" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-200 block leading-tight">구글 플레이 (Google Play)</span>
                  <span className="text-[11px] text-slate-400 font-sans">AOS 인게임 과금 & 패스</span>
                </div>
              </div>
              <span className="text-[10px] font-mono text-emerald-300 font-bold px-1.5 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30">
                {totalSpent > 0 ? Math.round((purchaseAmounts.googlePlay / totalSpent) * 100) : 0}%
              </span>
            </div>

            <div className="space-y-1 pt-0.5">
              <div className="flex items-baseline justify-between text-xs">
                <span className="text-slate-400 text-[11px]">누적 결제</span>
                <span className="font-mono font-bold text-emerald-300 text-sm">
                  {purchaseAmounts.googlePlay.toLocaleString()}<span className="text-[11px] text-slate-400 ml-0.5 font-sans">원</span>
                </span>
              </div>
              <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-400 h-full rounded-full transition-all duration-500"
                  style={{ width: `${totalSpent > 0 ? (purchaseAmounts.googlePlay / totalSpent) * 100 : 0}%` }}
                />
              </div>
            </div>
          </div>

          {/* 3. App Store */}
          <div className="p-3 rounded-xl bg-[#0a0d17]/80 border border-slate-800/70 hover:border-sky-500/40 transition-colors space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-sky-950/80 border border-sky-500/40 flex items-center justify-center p-1 shrink-0">
                  <svg className="w-full h-full fill-sky-300" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.64 1.35-.56.65-1.06 1.71-.92 2.74 1.01.08 2.03-.49 2.64-1.24z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-200 block leading-tight">앱스토어 (App Store)</span>
                  <span className="text-[11px] text-slate-400 font-sans">iOS 인게임 아이템 & 유료 앱</span>
                </div>
              </div>
              <span className="text-[10px] font-mono text-sky-300 font-bold px-1.5 py-0.5 rounded bg-sky-950/80 border border-sky-500/30">
                {totalSpent > 0 ? Math.round((purchaseAmounts.appStore / totalSpent) * 100) : 0}%
              </span>
            </div>

            <div className="space-y-1 pt-0.5">
              <div className="flex items-baseline justify-between text-xs">
                <span className="text-slate-400 text-[11px]">누적 결제</span>
                <span className="font-mono font-bold text-sky-300 text-sm">
                  {purchaseAmounts.appStore.toLocaleString()}<span className="text-[11px] text-slate-400 ml-0.5 font-sans">원</span>
                </span>
              </div>
              <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden">
                <div
                  className="bg-sky-400 h-full rounded-full transition-all duration-500"
                  style={{ width: `${totalSpent > 0 ? (purchaseAmounts.appStore / totalSpent) * 100 : 0}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

