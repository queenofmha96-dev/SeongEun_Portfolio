import React, { useState, useEffect, useRef } from 'react';
import { Radio, User, Gamepad2, FolderKanban, FileText, ChevronRight, Sparkles, Volume2, VolumeX, Menu, X } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('director-stats');
  const [scrolled, setScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState<boolean>(() => soundEngine.getIsMuted());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current !== null) return;

      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const isScrolled = window.scrollY > 20;
        setScrolled(isScrolled);

        const sections = ['director-stats', 'gaming-history', 'showcase-reel', 'cover-letter'];
        for (const sectionId of sections) {
          const el = document.getElementById(sectionId);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 160 && rect.bottom >= 100) {
              setActiveSection((prev) => (prev !== sectionId ? sectionId : prev));
              break;
            }
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    const unsubscribe = soundEngine.subscribe((muted) => setIsMuted(muted));
    return () => {
      window.removeEventListener('scroll', handleScroll);
      unsubscribe();
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  // Close mobile menu when screen resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggleMute = () => {
    const nextMuted = soundEngine.toggleMute();
    setIsMuted(nextMuted);
  };

  const scrollToSection = (id: string) => {
    soundEngine.playClick();
    setActiveSection(id);
    setIsMobileMenuOpen(false);

    if (id === 'director-stats') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      const headerEl = document.querySelector('header');
      const headerHeight = headerEl ? headerEl.getBoundingClientRect().height : 60;
      
      const rect = el.getBoundingClientRect();
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      // Set offset to +40px as requested
      const targetTop = rect.top + currentScroll - headerHeight + 40;

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'director-stats', num: '01', label: '프로필 & 역량', subtitle: 'Profile & Skills', icon: User },
    { id: 'gaming-history', num: '02', label: '게이밍 경력', subtitle: 'Gaming History', icon: Gamepad2 },
    { id: 'showcase-reel', num: '03', label: '게임 사운드 포트폴리오', subtitle: 'Sound Showcase Reel', icon: FolderKanban },
    { id: 'cover-letter', num: '04', label: '자기소개서', subtitle: 'Cover Letter', icon: FileText },
  ];

  return (
    <>
      <header 
        className={`sticky top-0 z-50 transition-[background-color,border-color,box-shadow] duration-200 border-b ${
          scrolled || isMobileMenuOpen
            ? 'bg-[#06070c]/95 backdrop-blur-md border-slate-800/90 shadow-2xl' 
            : 'bg-[#08090f]/85 backdrop-blur-sm border-slate-800/50'
        } py-3 sm:py-3.5 px-4 sm:px-6 md:px-8 text-white w-full`}
      >
        <div className="max-w-[1240px] mx-auto flex items-center justify-between gap-3">
          {/* Brand Header */}
          <div 
            role="button"
            tabIndex={0}
            aria-label="상단 프로필 및 경력으로 이동"
            onClick={() => scrollToSection('director-stats')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                scrollToSection('director-stats');
              }
            }}
            className="flex items-center gap-2.5 sm:gap-3.5 text-left cursor-pointer group focus:outline-none min-w-0"
          >
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-cyan-400 via-teal-500 to-amber-400 p-[1.5px] shadow-md group-hover:brightness-110 transition-[filter] flex-shrink-0">
              <div className="w-full h-full bg-[#080910] rounded-[10px] flex items-center justify-center relative overflow-hidden">
                <Radio className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-cyan-400 group-hover:rotate-6 transition-transform" />
                <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-300 absolute top-0.5 right-0.5 sm:top-1 sm:right-1 opacity-80 animate-pulse" />
              </div>
            </div>

            <div className="flex flex-col min-w-0 justify-center">
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg font-black font-sans tracking-tight text-white group-hover:text-cyan-300 transition-colors whitespace-nowrap">
                  양성은
                </span>
                <span className="text-slate-400 text-[11px] sm:text-xs font-mono font-medium">
                  SEONGEUN
                </span>
              </div>
              <span className="text-[11px] sm:text-xs font-mono text-cyan-400/90 font-semibold tracking-wide whitespace-nowrap">
                Sound Designer
              </span>
            </div>
          </div>

          {/* Desktop Navigation (>= md / 768px) */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <nav className="flex items-center gap-1.5 lg:gap-2.5 font-sans text-sm">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    aria-label={item.label}
                    onClick={() => scrollToSection(item.id)}
                    onMouseEnter={() => soundEngine.playHover()}
                    className={`px-3.5 lg:px-4 py-2.5 rounded-xl transition-colors duration-150 cursor-pointer flex items-center gap-2 font-semibold text-sm ${
                      isActive
                        ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/50 font-bold shadow-md'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60 border border-transparent'
                    }`}
                    title={item.label}
                  >
                    <Icon className={`w-4.5 h-4.5 flex-shrink-0 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                    <span className="whitespace-nowrap">{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Sound FX ON/OFF Mute Toggle */}
            <div className="pl-2 border-l border-slate-800 flex items-center">
              <button
                onClick={handleToggleMute}
                title={isMuted ? 'UI 효과음 켜기 (SFX: OFF)' : 'UI 효과음 끄기 (SFX: ON)'}
                aria-label={isMuted ? 'UI 효과음 켜기' : 'UI 효과음 끄기'}
                className={`p-2.5 rounded-xl transition-all duration-200 cursor-pointer flex items-center gap-1.5 text-xs font-mono font-bold ${
                  isMuted
                    ? 'bg-slate-900/90 text-slate-500 border border-slate-800 hover:text-slate-300 hover:border-slate-700'
                    : 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-900/80 hover:border-cyan-400 shadow-sm'
                }`}
              >
                {isMuted ? (
                  <VolumeX className="w-4.5 h-4.5 text-slate-500" />
                ) : (
                  <Volume2 className="w-4.5 h-4.5 text-cyan-400" />
                )}
                <span className="hidden lg:inline uppercase text-[11px] tracking-wider">
                  {isMuted ? 'SFX OFF' : 'SFX ON'}
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Right Controls (< md / 768px): Sound Mute + Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2 shrink-0">
            {/* Sound Mute Toggle */}
            <button
              onClick={handleToggleMute}
              aria-label={isMuted ? 'UI 효과음 켜기' : 'UI 효과음 끄기'}
              className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                isMuted
                  ? 'bg-slate-900/90 text-slate-500 border-slate-800 hover:text-slate-300'
                  : 'bg-cyan-950/40 text-cyan-400 border-cyan-500/30 hover:bg-cyan-900/50'
              }`}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => {
                soundEngine.playClick();
                setIsMobileMenuOpen((prev) => !prev);
              }}
              aria-label={isMobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
              className="p-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors focus:outline-none cursor-pointer"
            >
              {isMobileMenuOpen ? (
                <X className="w-4.5 h-4.5 text-cyan-400" />
              ) : (
                <Menu className="w-4.5 h-4.5 text-slate-300" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 top-[65px] z-40 bg-black/80 backdrop-blur-md md:hidden p-4 animate-fadeIn"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div 
            className="space-y-3 bg-[#0a0d17] border border-slate-800/90 rounded-2xl p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest px-2 pb-1 border-b border-slate-800/80 flex items-center justify-between">
              <span>Navigation Menu</span>
              <span className="text-slate-500">SELECT SECTION</span>
            </div>

            <nav className="space-y-2 pt-1 font-sans">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full p-3.5 rounded-xl text-left flex items-center justify-between transition-all cursor-pointer border ${
                      isActive
                        ? 'bg-cyan-950/80 border-cyan-500/60 text-white shadow-lg'
                        : 'bg-slate-900/60 border-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`p-2 rounded-lg ${isActive ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'}`}>
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-mono font-bold ${isActive ? 'text-cyan-300' : 'text-slate-500'}`}>
                            {item.num}
                          </span>
                          <span className="font-bold text-sm text-white">{item.label}</span>
                        </div>
                        <span className="text-xs text-slate-400 font-mono block mt-0.5">{item.subtitle}</span>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-600'}`} />
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
