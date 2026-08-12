import React, { useState } from 'react';
import { Zap, Flame, Wand2, Sparkles, Award, Radio, Sliders, Volume2, Play, Download, RefreshCw, Cpu, Activity } from 'lucide-react';
import { SfxPreset } from '../types';
import { soundEngine } from '../utils/soundEngine';

interface SfxLabViewProps {
  presets: SfxPreset[];
}

export const SfxLabView: React.FC<SfxLabViewProps> = ({ presets }) => {
  const [pitch, setPitch] = useState<number>(1.0);
  const [decay, setDecay] = useState<number>(0.3);
  const [activePreset, setActivePreset] = useState<string | null>(null);

  const triggerSfx = (preset: SfxPreset) => {
    setActivePreset(preset.id);
    soundEngine.playClick();

    switch (preset.type) {
      case 'laser':
        soundEngine.playLaser(pitch * preset.pitch, decay);
        break;
      case 'sword':
        soundEngine.playSwordSlash(pitch * preset.pitch, decay);
        break;
      case 'spell':
        soundEngine.playMagicSpell(pitch * preset.pitch, decay * 1.5);
        break;
      case 'explosion':
        soundEngine.playExplosion(pitch * preset.pitch, decay * 2.5);
        break;
      case 'levelup':
        soundEngine.playLevelUp();
        break;
      default:
        soundEngine.playClick();
        break;
    }

    setTimeout(() => setActivePreset(null), 300);
  };

  const getPresetIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-6 h-6 text-cyan-400" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-pink-500" />;
      case 'Wand2':
        return <Wand2 className="w-6 h-6 text-purple-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-yellow-400" />;
      case 'Award':
        return <Award className="w-6 h-6 text-emerald-400" />;
      default:
        return <Radio className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fadeIn text-white font-sans">
      {/* Banner */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-emerald-950/60 via-slate-900 to-cyan-950/60 border border-emerald-500/30 p-6 md:p-8 shadow-[0_0_30px_rgba(57,255,20,0.15)]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono">
          <div>
            <span className="px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-xs">
              REAL-TIME WEB AUDIO SYNTHESIZER
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-2">
              INTERACTIVE GAME SFX LAB
            </h2>
            <p className="text-slate-300 text-sm font-sans mt-1">
              버튼을 눌러 실시간 파라미터 조절이 적용된 게임 이펙트 사운드를 즉시 청음해보세요.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-emerald-400 font-bold bg-black/60 p-3 rounded-xl border border-emerald-500/30">
            <Cpu className="w-5 h-5 animate-spin" />
            <span>SYNTH ENGINE READY</span>
          </div>
        </div>
      </div>

      {/* Real-time Parameter Sliders */}
      <div className="bg-[#0d0e18] p-6 rounded-2xl border border-cyan-500/20 grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
        {/* Pitch Control */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-slate-300">
            <span className="flex items-center gap-1.5 font-bold text-cyan-300">
              <Sliders className="w-4 h-4" />
              GLOBAL PITCH SHIFT ({pitch.toFixed(2)}x)
            </span>
            <button
              onClick={() => {
                soundEngine.playClick();
                setPitch(1.0);
              }}
              className="text-[10px] text-slate-500 hover:text-cyan-400 flex items-center gap-1 cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" /> RESET
            </button>
          </div>
          <input
            type="range"
            min="0.5"
            max="2.0"
            step="0.05"
            value={pitch}
            onChange={(e) => setPitch(parseFloat(e.target.value))}
            className="w-full accent-cyan-400 bg-slate-800 rounded h-2 cursor-pointer"
          />
        </div>

        {/* Decay Control */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-slate-300">
            <span className="flex items-center gap-1.5 font-bold text-pink-400">
              <Activity className="w-4 h-4" />
              ENVELOPE DECAY TIME ({decay.toFixed(2)}s)
            </span>
            <button
              onClick={() => {
                soundEngine.playClick();
                setDecay(0.3);
              }}
              className="text-[10px] text-slate-500 hover:text-pink-400 flex items-center gap-1 cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" /> RESET
            </button>
          </div>
          <input
            type="range"
            min="0.05"
            max="1.2"
            step="0.05"
            value={decay}
            onChange={(e) => setDecay(parseFloat(e.target.value))}
            className="w-full accent-pink-500 bg-slate-800 rounded h-2 cursor-pointer"
          />
        </div>
      </div>

      {/* Soundboard Preset Trigger Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {presets.map((preset) => {
          const isActive = activePreset === preset.id;
          return (
            <button
              key={preset.id}
              onClick={() => triggerSfx(preset)}
              onMouseEnter={() => soundEngine.playHover()}
              className={`group relative p-6 rounded-2xl bg-[#0c0d18] border transition-all duration-200 text-left cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'border-emerald-400 shadow-[0_0_30px_rgba(57,255,20,0.5)] scale-98'
                  : 'border-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,243,255,0.2)]'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-cyan-500/50 flex items-center justify-center transition-colors">
                  {getPresetIcon(preset.iconName)}
                </div>
                <span className="px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/30 text-cyan-300 font-mono text-[10px] uppercase">
                  {preset.category}
                </span>
              </div>

              <div className="my-4">
                <h3 className="text-base font-bold font-mono text-white group-hover:text-cyan-300 transition-colors">
                  {preset.name}
                </h3>
                <p className="text-xs text-slate-400 font-sans mt-1">
                  {preset.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <Play className="w-3.5 h-3.5 fill-current" /> CLICK TO TRIGGER
                </span>
                <span>PITCH {preset.pitch}x</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
