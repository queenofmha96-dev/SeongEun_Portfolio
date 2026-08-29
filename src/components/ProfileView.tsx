import React, { useState } from 'react';
import { 
  Award, Cpu, Disc, Mail, MapPin, Briefcase, Shield, Sliders, Radio, Sparkles, CheckCircle,
  Printer, Share2, Check, FileText
} from 'lucide-react';
import { SoundDirectorProfile } from '../types';
import { soundEngine } from '../utils/soundEngine';

interface ProfileViewProps {
  profile: SoundDirectorProfile;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ profile }) => {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    soundEngine.playClick();
    window.print();
  };

  const handleShare = async () => {
    soundEngine.playClick();
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  return (
    <div className="w-full space-y-14 animate-fadeIn text-slate-100 font-sans py-2">
      
      {/* 1. Header & Bio Intro */}
      <div className="space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div className="flex items-center gap-6">
            {/* Avatar Badge */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-cyan-400 via-teal-500 to-amber-400 p-[2px] shadow-xl flex-shrink-0">
              <div className="w-full h-full bg-[#0b0d18] rounded-[14px] flex items-center justify-center">
                <Radio className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400" />
              </div>
            </div>

            <div className="space-y-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight whitespace-nowrap break-keep">
                  {profile.name}
                </h1>
                <span className="px-3 py-1 rounded-lg bg-cyan-950/90 border border-cyan-500/40 text-cyan-300 text-xs sm:text-sm font-mono font-bold whitespace-nowrap">
                  {profile.title}
                </span>
              </div>
            </div>
          </div>

          {/* Contact Badges & Quick Action Buttons */}
          <div className="flex flex-col sm:items-end gap-3.5">
            <div className="flex flex-wrap items-center gap-4 text-sm font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4.5 h-4.5 text-cyan-400" />
                <span className="font-bold text-white text-sm sm:text-base">{profile.email}</span>
              </div>
              <span className="text-slate-600 hidden sm:inline text-base">•</span>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4.5 h-4.5 text-amber-400" />
                <span className="text-sm sm:text-base">{profile.location}</span>
              </div>
            </div>

            {/* Quick Share & Print Actions */}
            <div className="flex items-center gap-2.5 pt-1">
              <button
                onClick={handleShare}
                onMouseEnter={() => soundEngine.playHover()}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                  copied
                    ? 'bg-emerald-950/80 border-emerald-500/60 text-emerald-300 shadow-md'
                    : 'bg-slate-900/90 hover:bg-slate-800 border-slate-700/80 text-slate-200 hover:text-cyan-300 hover:border-cyan-500/50'
                }`}
                title="포트폴리오 주소 복사하기"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>링크 복사완료!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4 text-cyan-400" />
                    <span>포트폴리오 공유</span>
                  </>
                )}
              </button>

              <button
                onClick={handlePrint}
                onMouseEnter={() => soundEngine.playHover()}
                className="px-3.5 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-500/50 text-slate-200 hover:text-amber-300 text-xs sm:text-sm font-mono font-bold transition-all cursor-pointer flex items-center gap-2 shadow-sm"
                title="이력서 요약 인쇄 및 PDF 다운로드"
              >
                <Printer className="w-4 h-4 text-amber-400" />
                <span>이력서 인쇄 / PDF</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="space-y-3">
          <h3 className="text-sm font-mono font-black text-cyan-400 uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" /> ABOUT SOUND DESIGNER
          </h3>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans max-w-5xl break-keep">
            {profile.bio}
          </p>
        </div>

      </div>

      {/* 2. Skills & Tools (Flat Clean Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-6 border-t border-slate-800/80">
        
        {/* Audio Middleware Skills */}
        <div className="space-y-5">
          <div className="flex items-center gap-2.5 border-b border-slate-800/80 pb-3">
            <Shield className="w-5 h-5 text-cyan-400" />
            <h3 className="text-base sm:text-lg font-extrabold text-white">오디오 미들웨어 & 작업 스킬</h3>
          </div>

          <div className="space-y-3">
            {profile.skills.map((skill, idx) => (
              <div
                key={idx}
                className="p-3.5 sm:p-4 rounded-xl bg-[#090b13] border border-slate-800/80 hover:border-cyan-500/40 hover:bg-[#0c0e17] transition-all space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  <span className="text-sm sm:text-base text-slate-100 font-bold font-sans">
                    {skill.name}
                  </span>
                </div>
                <p className="text-[13px] sm:text-sm text-slate-400 font-sans leading-relaxed pl-3.5">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* DAW & Hardware */}
        <div className="space-y-5">
          <div className="flex items-center gap-2.5 border-b border-slate-800/80 pb-3">
            <Sliders className="w-5 h-5 text-amber-400" />
            <h3 className="text-base sm:text-lg font-extrabold text-white">소프트웨어 DAW & 스튜디오 장비</h3>
          </div>

          <div className="space-y-5">
            <div>
              <span className="text-xs sm:text-sm font-mono text-slate-400 block mb-2.5 font-bold uppercase">
                주요 사용 오디오 엔진 / DAW
              </span>
              <div className="flex flex-wrap gap-2.5">
                {profile.tools.map((t, idx) => (
                  <span 
                    key={idx} 
                    className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 font-mono text-xs sm:text-sm font-semibold flex items-center gap-2 hover:border-cyan-500/50 transition-colors"
                  >
                    <Disc className="w-4 h-4 text-cyan-400" />
                    <span>{t.name}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <span className="text-xs sm:text-sm font-mono text-slate-400 block mb-2.5 font-bold uppercase flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-emerald-400" /> 스튜디오 하드웨어
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-slate-200 font-mono text-xs sm:text-sm">
                {profile.hardware.map((hw, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-snug break-words">{hw}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* 3. Clean Career Timeline */}
      <div className="space-y-7 pt-6 border-t border-slate-800/80">
        
        <div className="flex items-center gap-3">
          <Award className="w-6 h-6 text-cyan-400" />
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            프로젝트 & 사운드 디자인 이력 (PROJECT & EXPERIENCE)
          </h2>
        </div>

        {/* Open Timeline without nested boxes */}
        <div className="relative border-l-2 border-slate-800 ml-4 pl-7 space-y-10">
          {profile.experience.map((exp, idx) => (
            <div key={idx} className="relative space-y-3 group">
              {/* Dot on line */}
              <div className="absolute -left-[37px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:scale-125 transition-transform" />

              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg sm:text-xl font-extrabold text-white">{exp.company}</h3>
                  <span className="text-slate-500 text-lg">•</span>
                  <span className="text-sm sm:text-base font-bold text-amber-300">{exp.role}</span>
                </div>

                <span className="text-xs sm:text-sm font-mono text-cyan-400 font-bold px-3 py-1 rounded-lg bg-slate-900 border border-slate-800">
                  {exp.period}
                </span>
              </div>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
                {exp.description}
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs sm:text-sm font-mono text-slate-400 font-bold">프로젝트:</span>
                {exp.projects.map((p, i) => (
                  <span 
                    key={i} 
                    className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-xs sm:text-sm font-mono"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};
