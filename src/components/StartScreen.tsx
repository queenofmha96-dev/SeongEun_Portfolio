import React from 'react';
import { motion } from 'motion/react';
import { Play, Disc, Radio, Gamepad2, Volume2, Sparkles, Terminal, Shield, Zap } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

interface StartScreenProps {
  onStart: () => void;
  onSelectTab: (tab: string) => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart, onSelectTab }) => {
  const handleStartGame = () => {
    soundEngine.playStartGame();
    onStart();
  };

  const handleShortcut = (tab: string) => {
    soundEngine.playClick();
    onStart();
    onSelectTab(tab);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between p-6 overflow-hidden select-none z-10 text-white font-sans">
      {/* Hero Background Image overlay */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none overflow-hidden">
        <img
          src="/src/assets/images/cyber_sound_hero_1786532826043.jpg"
          alt="Cyber Sound Studio Hero"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter brightness-90 contrast-125 scale-105 animate-pulse"
          style={{ animationDuration: '8s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090f] via-transparent to-[#08090f]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090f] via-transparent to-[#08090f]" />
      </div>

      {/* Top Game HUD bar */}
      <div className="w-full max-w-6xl flex items-center justify-between z-10 text-xs font-mono tracking-widest text-cyan-400 border-b border-cyan-500/20 pb-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            AUDIO ENGINE : ONLINE
          </span>
          <span className="hidden sm:inline text-slate-400">| SYSTEM: FMOD 2.02 / WWISE 2023</span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span className="flex items-center gap-1 text-emerald-400">
            <Radio className="w-3.5 h-3.5" /> 24bit / 96kHz
          </span>
          <span className="hidden md:inline">60 FPS</span>
          <span className="text-pink-400 font-bold">JIHO PORTFOLIO v2.5</span>
        </div>
      </div>

      {/* Main Title Center Block */}
      <div className="my-auto flex flex-col items-center text-center z-10 max-w-3xl px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-400/40 text-cyan-300 text-xs font-mono tracking-wider mb-6 shadow-[0_0_15px_rgba(0,243,255,0.2)]"
        >
          <Sparkles className="w-4 h-4 text-pink-400" />
          GAME SOUND DIRECTOR & AUDIO LEAD
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group"
        >
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight font-mono uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-white to-pink-500 drop-shadow-[0_0_25px_rgba(0,243,255,0.4)]">
            JIHO SOUND LAB
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
            게임의 타격감과 세계관을 완성하는 <span className="text-cyan-300 font-semibold underline decoration-cyan-400/50 underline-offset-4">시그니처 오디오 포트폴리오</span>
          </p>
        </motion.div>

        {/* Press Start Main Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <button
            id="btn-game-start"
            onClick={handleStartGame}
            onMouseEnter={() => soundEngine.playHover()}
            className="relative group px-10 py-5 rounded-xl bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-600 p-[2px] shadow-[0_0_35px_rgba(0,243,255,0.4)] hover:shadow-[0_0_50px_rgba(255,0,127,0.6)] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
          >
            <div className="w-full h-full bg-[#0d0e17] group-hover:bg-[#121422] rounded-[10px] px-8 py-4 flex items-center gap-4 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-300 group-hover:scale-110 group-hover:bg-pink-500/20 group-hover:text-pink-400 transition-all">
                <Play className="w-6 h-6 fill-current translate-x-0.5" />
              </div>
              <div className="text-left">
                <span className="block text-2xl font-mono font-bold tracking-wider text-white group-hover:text-cyan-300 transition-colors">
                  PRESS START
                </span>
                <span className="block text-xs font-mono text-slate-400 tracking-widest uppercase">
                  Touch to Enter Audio Showcase
                </span>
              </div>
            </div>
          </button>

          {/* Quick Category Select Shortcuts */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6 text-xs font-mono">
            <button
              id="shortcut-projects"
              onClick={() => handleShortcut('projects')}
              onMouseEnter={() => soundEngine.playHover()}
              className="px-3.5 py-2 rounded-lg bg-slate-900/80 border border-slate-700/60 hover:border-cyan-400 hover:text-cyan-300 text-slate-300 flex items-center gap-2 transition-all cursor-pointer"
            >
              <Disc className="w-3.5 h-3.5 text-cyan-400" />
              01. SHOWCASE REEL
            </button>
            <button
              id="shortcut-profile"
              onClick={() => handleShortcut('profile')}
              onMouseEnter={() => soundEngine.playHover()}
              className="px-3.5 py-2 rounded-lg bg-slate-900/80 border border-slate-700/60 hover:border-pink-400 hover:text-pink-300 text-slate-300 flex items-center gap-2 transition-all cursor-pointer"
            >
              <Shield className="w-3.5 h-3.5 text-pink-400" />
              02. DIRECTOR STATS
            </button>
            <button
              id="shortcut-sfxlab"
              onClick={() => handleShortcut('sfxlab')}
              onMouseEnter={() => soundEngine.playHover()}
              className="px-3.5 py-2 rounded-lg bg-slate-900/80 border border-slate-700/60 hover:border-emerald-400 hover:text-emerald-300 text-slate-300 flex items-center gap-2 transition-all cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              03. SFX SYNTH LAB
            </button>
            <button
              id="shortcut-contact"
              onClick={() => handleShortcut('contact')}
              onMouseEnter={() => soundEngine.playHover()}
              className="px-3.5 py-2 rounded-lg bg-slate-900/80 border border-slate-700/60 hover:border-purple-400 hover:text-purple-300 text-slate-300 flex items-center gap-2 transition-all cursor-pointer"
            >
              <Terminal className="w-3.5 h-3.5 text-purple-400" />
              04. CREDITS & CONTACT
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer Info */}
      <div className="w-full max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-2 z-10 text-xs font-mono text-slate-400 border-t border-slate-800/80 pt-4">
        <p>© 2026 JIHO (지호) Sound Director. All Rights Reserved.</p>
        <p className="flex items-center gap-2 text-cyan-400">
          <Gamepad2 className="w-4 h-4" />
          USE HEADPHONES FOR BEST SPATIAL AUDIO EXPERIENCE
        </p>
      </div>
    </div >
  );
};
