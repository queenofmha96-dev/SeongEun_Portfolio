import React, { useState, useEffect } from 'react';
import { ArrowUp, Volume2, VolumeX } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

export const FloatingControls: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [isMuted, setIsMuted] = useState(() => soundEngine.getIsMuted());

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 240) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    const unsubscribe = soundEngine.subscribe((muted) => setIsMuted(muted));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      unsubscribe();
    };
  }, []);

  const handleToggleSound = () => {
    const nextState = soundEngine.toggleMute();
    setIsMuted(nextState);
  };

  const handleScrollTop = () => {
    soundEngine.playClick();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <aside
      aria-label="Floating Controls"
      className={`fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2.5 no-print transition-all duration-300 transform ${
        showTopBtn
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      {/* SFX Audio Toggle Button */}
      <div className="relative group">
        <button
          id="floating-sfx-toggle-btn"
          type="button"
          onClick={handleToggleSound}
          onMouseEnter={() => soundEngine.playHover()}
          className="p-3 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/70 hover:border-slate-500 shadow-xl backdrop-blur-md transition-all duration-300 flex items-center justify-center"
          aria-label={!isMuted ? 'UI 사운드 음소거' : 'UI 사운드 켜기'}
          title={!isMuted ? 'SFX ON (클릭하여 끄기)' : 'SFX OFF (클릭하여 켜기)'}
        >
          {!isMuted ? (
            <Volume2 className="w-5 h-5 transition-transform group-hover:scale-110 text-slate-200" />
          ) : (
            <VolumeX className="w-5 h-5 transition-transform group-hover:scale-110 text-slate-500" />
          )}
        </button>

        {/* Hover Label Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden md:group-hover:flex items-center px-2.5 py-1 rounded-md bg-slate-950/95 border border-slate-800 text-xs font-mono whitespace-nowrap text-slate-300 shadow-lg pointer-events-none transition-opacity">
          {!isMuted ? 'SFX ON' : 'SFX OFF'}
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="relative group">
        <button
          id="floating-scroll-top-btn"
          type="button"
          onClick={handleScrollTop}
          onMouseEnter={() => soundEngine.playHover()}
          className="p-3 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/70 hover:border-slate-500 shadow-xl backdrop-blur-md transition-all duration-300 flex items-center justify-center"
          aria-label="페이지 최상단으로 이동"
          title="맨 위로 이동"
        >
          <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
        </button>

        {/* Hover Label Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden md:group-hover:flex items-center px-2.5 py-1 rounded-md bg-slate-950/95 border border-slate-800 text-xs font-mono whitespace-nowrap text-slate-300 shadow-lg pointer-events-none transition-opacity">
          TOP
        </div>
      </div>
    </aside>
  );
};
