import React, { useState } from 'react';
import { 
  Award, Cpu, Disc, Mail, MapPin, Phone, Shield, Sliders, Radio, Sparkles, CheckCircle,
  Printer, Share2, Check, FileText, Globe, Languages, User
} from 'lucide-react';
import { SoundDirectorProfile } from '../types';
import { soundEngine } from '../utils/soundEngine';
import profilePhoto from '../assets/profile.png';

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
      <div className="space-y-6">

        {/* Top: Profile Identity & Actions */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-6 bg-[#0c0e18]/60 p-4 sm:p-5 rounded-2xl border border-slate-800/80">
          
          {/* Main Info Block: Left (Photo + Name) + Vertical Line + Right (Contact Info) */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 min-w-0 flex-1">
            
            {/* Left: Resume Photo + Name */}
            <div className="flex items-center gap-4 sm:gap-5 min-w-0 shrink-0">
              {/* Resume Photo Frame (Permanent Original Photo - Pure Display) */}
              <div 
                className="relative w-20 h-[106px] sm:w-24 sm:h-[128px] md:w-28 md:h-[148px] rounded-xl sm:rounded-2xl border border-slate-700/80 bg-[#090b14] flex-shrink-0 overflow-hidden shadow-xl"
              >
                <img 
                  src={profilePhoto} 
                  alt={`${profile.name} 프로필 사진`} 
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Name */}
              <div className="space-y-1 sm:space-y-1.5 min-w-0">
                <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase">
                  GAME SOUND DESIGNER
                </span>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight break-keep">
                  {profile.name}
                </h1>
              </div>
            </div>

            {/* Vertical Divider (Desktop & Tablet) / Horizontal Divider (Mobile) */}
            <div className="hidden sm:block w-[1px] self-stretch bg-gradient-to-b from-transparent via-slate-700/80 to-transparent shrink-0" />
            <div className="block sm:hidden h-[1px] w-full bg-slate-800/80" />

            {/* Right: Contact & Language Info */}
            <div className="flex flex-col justify-center space-y-2 text-xs sm:text-sm font-medium">
              {/* Phone */}
              <div className="flex items-center gap-2.5">
                <span className="text-slate-400 text-xs font-mono w-14 shrink-0">연락처</span>
                <a
                  href="tel:010-4991-1314"
                  className="flex items-center gap-1.5 text-cyan-300 hover:text-cyan-200 transition-colors font-mono"
                  title="전화 걸기"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 shrink-0" />
                  <span className="whitespace-nowrap font-bold">010-4991-1314</span>
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5">
                <span className="text-slate-400 text-xs font-mono w-14 shrink-0">이메일</span>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 transition-colors font-mono"
                  title="이메일 보내기"
                >
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
                  <span className="whitespace-nowrap font-bold">{profile.email}</span>
                </a>
              </div>

              {/* Chinese Native */}
              <div className="flex items-center gap-2.5">
                <span className="text-slate-400 text-xs font-mono w-14 shrink-0">외국어</span>
                <div className="flex items-center gap-1.5 text-slate-200">
                  <Languages className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 shrink-0" />
                  <span className="whitespace-nowrap">중국어 Native (원어민)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Quick Action Buttons (Share & Print) */}
          <div className="flex sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-2 sm:gap-2.5 shrink-0 pt-2 lg:pt-0 border-t border-slate-800/70 lg:border-t-0">
            <button
              onClick={handleShare}
              onMouseEnter={() => soundEngine.playHover()}
              className={`flex-1 sm:flex-initial px-3.5 py-2.5 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold whitespace-nowrap transition-all cursor-pointer flex items-center justify-center gap-2 border ${
                copied
                  ? 'bg-emerald-950/80 border-emerald-500/60 text-emerald-300 shadow-md'
                  : 'bg-slate-900/90 hover:bg-slate-800/90 border-slate-700/80 text-slate-200 hover:text-cyan-300 hover:border-cyan-500/50 shadow-sm'
              }`}
              title="포트폴리오 주소 복사하기"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                  <span className="whitespace-nowrap">링크 복사완료!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 shrink-0" />
                  <span className="whitespace-nowrap">포트폴리오 공유</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              onMouseEnter={() => soundEngine.playHover()}
              className="flex-1 sm:flex-initial px-3.5 py-2.5 sm:px-4 sm:py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-amber-500/50 text-slate-200 hover:text-amber-300 text-xs sm:text-sm font-mono font-bold whitespace-nowrap transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm"
              title="이력서 요약 인쇄 및 PDF 다운로드"
            >
              <Printer className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
              <span className="whitespace-nowrap">이력서 인쇄 / PDF</span>
            </button>
          </div>

        </div>

        {/* Bio Section */}
        <div className="p-5 sm:p-7 rounded-2xl bg-[#0a0c16]/80 border border-slate-800/80 shadow-md space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800/60 pb-2.5">
            <h3 className="text-xs sm:text-sm font-mono font-black text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" /> ABOUT SOUND DESIGNER • 소개
            </h3>
            <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
              SOUND PHILOSOPHY & DIRECTION
            </span>
          </div>
          <p className="text-sm sm:text-base md:text-[17px] text-slate-200 leading-relaxed sm:leading-loose font-sans break-keep">
            {profile.bio}
          </p>
          <div className="pt-2 flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-sans italic border-t border-slate-800/50">
            <span className="text-cyan-400 font-bold font-mono">Philosophy:</span>
            <span>"{profile.philosophy}"</span>
          </div>
        </div>

      </div>

      {/* 2. Skills & Tools (Flat Clean Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 pt-8 sm:pt-10 border-t border-slate-800/80">
        
        {/* Audio Middleware Skills */}
        <div className="space-y-5">
          <div className="flex items-center gap-2.5 border-b border-slate-800/70 pb-3">
            <Shield className="w-5 h-5 text-cyan-400" />
            <h3 className="text-base sm:text-lg font-extrabold text-white">오디오 미들웨어 & 작업 스킬</h3>
          </div>

          <div className="space-y-3">
            {profile.skills.map((skill, idx) => (
              <div
                key={idx}
                className="p-3.5 sm:p-4 rounded-xl bg-[#090b13] border border-slate-800/80 hover:border-cyan-500/40 hover:bg-[#0c0e17] transition-all space-y-1.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <span className="text-sm sm:text-base text-slate-100 font-bold font-sans">
                      {skill.name}
                    </span>
                  </div>
                  {skill.tag && (
                    <span className="text-[10px] sm:text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-cyan-950/70 text-cyan-300 border border-cyan-500/40 shrink-0">
                      {skill.tag}
                    </span>
                  )}
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
          <div className="flex items-center gap-2.5 border-b border-slate-800/70 pb-3">
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
      <div className="space-y-7 pt-8 sm:pt-10 border-t border-slate-800/80">
        
        <div className="flex items-center gap-3">
          <Award className="w-6 h-6 text-cyan-400" />
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            프로젝트 & 사운드 디자인 이력 (PROJECT & EXPERIENCE)
          </h2>
        </div>

        {/* Open Timeline without nested boxes */}
        <div className="relative border-l-2 border-slate-800 ml-3 sm:ml-4 pl-5 sm:pl-7 space-y-10">
          {profile.experience.map((exp, idx) => (
            <div key={idx} className="relative space-y-3 group">
              {/* Dot on line */}
              <div className="absolute -left-[29px] sm:-left-[37px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#0b0d18] border-2 border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.45)] group-hover:scale-125 group-hover:bg-cyan-400 transition-all" />

              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono text-cyan-200 font-extrabold px-2.5 py-0.5 sm:px-3.5 sm:py-1 rounded-lg bg-cyan-950 border border-cyan-400/70 shadow-[0_0_12px_rgba(6,182,212,0.2)] shrink-0 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  {exp.period}
                </span>
                <h3 className="text-base sm:text-xl font-extrabold text-white tracking-tight">
                  {exp.company}
                </h3>
                <span className="text-slate-500 text-sm hidden sm:inline">•</span>
                <span className="text-xs sm:text-base font-bold text-amber-300">
                  {exp.role}
                </span>
              </div>

              <p className="text-xs sm:text-base text-slate-200 leading-relaxed font-sans break-keep">
                {exp.description}
              </p>

              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1">
                <span className="text-xs sm:text-sm font-mono text-slate-400 font-bold">프로젝트:</span>
                {exp.projects.map((p, i) => (
                  <span 
                    key={i} 
                    className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-xs sm:text-sm font-mono"
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
