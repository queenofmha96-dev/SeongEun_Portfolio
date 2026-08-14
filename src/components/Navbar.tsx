import React, { useState, useEffect } from 'react';
import { Radio, User, Gamepad2, FolderKanban, Mail, ChevronRight, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('director-stats');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['director-stats', 'gaming-history', 'showcase-reel', 'direct-contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'director-stats', label: '프로필 & 경력', icon: User },
    { id: 'gaming-history', label: '게이밍 연구', icon: Gamepad2 },
    { id: 'showcase-reel', label: '포트폴리오', icon: FolderKanban },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-[#06070c]/90 backdrop-blur-md border-slate-800/80 shadow-2xl py-3' 
          : 'bg-[#08090f]/75 backdrop-blur-sm border-slate-800/50 py-4'
      } px-4 sm:px-8 text-white`}
    >
      <div className="max-w-[1640px] mx-auto flex items-center justify-between gap-4">
        {/* Brand Header */}
        <div 
          onClick={() => scrollToSection('director-stats')}
          className="flex items-center gap-3.5 text-left cursor-pointer group"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-teal-500 to-amber-400 p-[1.5px] shadow-lg group-hover:scale-105 transition-transform flex-shrink-0">
            <div className="w-full h-full bg-[#080910] rounded-[10.5px] flex items-center justify-center relative overflow-hidden">
              <Radio className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform" />
              <Sparkles className="w-2.5 h-2.5 text-amber-300 absolute top-1 right-1 opacity-80 animate-pulse" />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold font-sans tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                성은 <span className="text-slate-400 text-xs font-mono font-normal">(SEONGEUN)</span>
              </span>
              <span className="hidden md:inline-block px-2 py-0.5 rounded-md bg-cyan-950/80 border border-cyan-500/30 text-[10px] font-mono font-bold text-cyan-300">
                AUDIO DIRECTOR
              </span>
            </div>
            <span className="text-[11px] font-mono text-cyan-400/90 font-medium tracking-wide">
              Game Sound Director & Audio Lead
            </span>
          </div>
        </div>

        {/* Scroll Navigation Pills */}
        <nav className="flex items-center gap-1 sm:gap-2 font-sans text-xs">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-xl transition-all duration-200 cursor-pointer flex items-center gap-2 font-medium ${
                  isActive
                    ? 'bg-cyan-950/60 text-cyan-300 border border-cyan-500/40 font-bold shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50 border border-transparent'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            );
          })}

          <button
            onClick={() => scrollToSection('direct-contact')}
            className={`ml-1 sm:ml-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeSection === 'direct-contact'
                ? 'bg-amber-500 text-slate-950 border border-amber-300 font-extrabold shadow-md'
                : 'bg-amber-950/50 hover:bg-amber-900/60 border border-amber-500/40 text-amber-300 hover:text-white'
            }`}
          >
            <Mail className="w-4 h-4" />
            <span>문의하기</span>
            <ChevronRight className="w-3.5 h-3.5 opacity-70 hidden sm:inline" />
          </button>
        </nav>
      </div>
    </header>
  );
};
