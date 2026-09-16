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
    <div className="w-full space-y-14 print:space-y-4 animate-fadeIn text-slate-100 font-sans py-2 print:py-0">
      
      {/* 1. Header & Bio Intro */}
      <div className="space-y-6 print:space-y-3">

        {/* Top: Profile Identity & Actions */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-6 bg-[#0c0e18]/60 p-4 sm:p-5 print:p-3 rounded-2xl border border-slate-800/80 print:border-slate-300">
          
          {/* Main Info Block: Left (Photo + Name) + Vertical Line + Right (Contact Info) */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 min-w-0 flex-1">
            
            {/* Left: Resume Photo + Name */}
            <div className="flex items-center gap-4 sm:gap-5 min-w-0 shrink-0">
              {/* Resume Photo Frame (Permanent Original Photo - Pure Display) */}
              <div 
                className="relative w-20 h-[106px] sm:w-24 sm:h-[128px] md:w-28 md:h-[148px] print:w-20 print:h-[106px] rounded-xl sm:rounded-2xl border border-slate-700/80 print:border-slate-400 bg-[#090b14] flex-shrink-0 overflow-hidden shadow-xl print:shadow-none"
              >
                <img 
                  src={profilePhoto} 
                  alt={`${profile.name} 프로필 사진`} 
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Name */}
              <div className="space-y-1 sm:space-y-1.5 min-w-0">
                <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-cyan-400 print:text-slate-600 uppercase">
                  GAME SOUND DESIGNER
                </span>
                <h1 className="text-xl sm:text-2xl md:text-3xl print:text-2xl font-extrabold text-white print:text-slate-950 tracking-tight break-keep">
                  {profile.name}
                </h1>
              </div>
            </div>

            {/* Vertical Divider (Desktop & Tablet) / Horizontal Divider (Mobile) */}
            <div className="hidden sm:block w-[1px] self-stretch bg-gradient-to-b from-transparent via-slate-700/80 to-transparent shrink-0 print:bg-slate-300" />
            <div className="block sm:hidden h-[1px] w-full bg-slate-800/80 print:bg-slate-300" />

            {/* Right: Contact & Language Info */}
            <div className="flex flex-col justify-center space-y-2 text-xs sm:text-sm font-medium print:text-[11px] print:space-y-1">
              {/* Phone */}
              <div className="flex items-center gap-2.5">
                <span className="text-slate-400 print:text-slate-600 text-xs print:text-[11px] font-mono w-14 shrink-0">연락처</span>
                <a
                  href="tel:010-4991-1314"
                  className="flex items-center gap-1.5 text-cyan-300 print:text-slate-900 hover:text-cyan-200 transition-colors font-mono"
                  title="전화 걸기"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 print:text-slate-700 shrink-0" />
                  <span className="whitespace-nowrap font-bold">010-4991-1314</span>
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5">
                <span className="text-slate-400 print:text-slate-600 text-xs print:text-[11px] font-mono w-14 shrink-0">이메일</span>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-1.5 text-amber-300 print:text-slate-900 hover:text-amber-200 transition-colors font-mono"
                  title="이메일 보내기"
                >
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 print:text-slate-700 shrink-0" />
                  <span className="whitespace-nowrap font-bold">{profile.email}</span>
                </a>
              </div>

              {/* Chinese Native */}
              <div className="flex items-center gap-2.5">
                <span className="text-slate-400 print:text-slate-600 text-xs print:text-[11px] font-mono w-14 shrink-0">외국어</span>
                <div className="flex items-center gap-1.5 text-slate-200 print:text-slate-900">
                  <Languages className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 print:text-slate-700 shrink-0" />
                  <span className="whitespace-nowrap font-semibold">중국어 Native (원어민)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Quick Action Buttons (Share & Print) - Screen Only */}
          <div className="flex sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-2 sm:gap-2.5 shrink-0 pt-2 lg:pt-0 border-t border-slate-800/70 lg:border-t-0 no-print print:hidden">
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
        <div className="p-5 sm:p-7 md:p-8 print:p-3 rounded-2xl bg-[#0a0c16]/90 border border-slate-800/80 print:border-slate-300 shadow-md print:shadow-none space-y-5 print:space-y-2">
          <div className="flex items-center justify-between border-b border-slate-800/70 print:border-slate-300 pb-3 print:pb-1">
            <h3 className="text-xs sm:text-sm font-mono font-black text-cyan-400 print:text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400 print:text-slate-700" /> ABOUT SOUND DESIGNER • 소개
            </h3>
            <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
              SOUND PHILOSOPHY & DIRECTION
            </span>
          </div>

          <p className="text-sm sm:text-base md:text-[16.5px] print:text-xs text-slate-200 print:text-slate-800 leading-[1.95] sm:leading-[2.05] print:leading-relaxed font-sans break-keep">
            {profile.bio}
          </p>

          <div className="p-4 sm:p-5 print:p-2 rounded-xl bg-cyan-950/20 print:bg-slate-50 border-l-4 border-cyan-400 print:border-slate-700 text-xs sm:text-sm md:text-[14.5px] print:text-xs text-slate-200 print:text-slate-900 font-sans leading-relaxed">
            <span className="text-cyan-300 print:text-slate-950 font-bold font-mono block mb-1">SOUND PHILOSOPHY :</span>
            <span className="italic">"{profile.philosophy}"</span>
          </div>
        </div>

      </div>

      {/* 2. Skills & Tools (Flat Clean Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 print:gap-4 pt-8 sm:pt-10 print:pt-4 border-t border-slate-800/80 print:border-slate-300">
        
        {/* Audio Middleware Skills */}
        <div className="space-y-5 print:space-y-2">
          <div className="flex items-center gap-2.5 border-b border-slate-800/70 print:border-slate-300 pb-3 print:pb-1">
            <Shield className="w-5 h-5 text-cyan-400 print:text-slate-700" />
            <h3 className="text-base sm:text-lg print:text-sm font-extrabold text-white print:text-slate-950">오디오 미들웨어 & 작업 스킬</h3>
          </div>

          <div className="space-y-3 print:space-y-1.5">
            {profile.skills.map((skill, idx) => (
              <div
                key={idx}
                className="p-3.5 sm:p-4 print:p-2 rounded-xl bg-[#090b13] border border-slate-800/80 print:border-slate-300 hover:border-cyan-500/40 hover:bg-[#0c0e17] transition-all space-y-1.5 print:space-y-0.5 break-inside-avoid"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 print:bg-slate-700 shrink-0" />
                    <span className="text-sm sm:text-base print:text-xs text-slate-100 print:text-slate-900 font-bold font-sans">
                      {skill.name}
                    </span>
                  </div>
                  {skill.tag && (
                    <span className="text-[10px] sm:text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-cyan-950/70 text-cyan-300 print:bg-slate-100 print:text-slate-800 border border-cyan-500/40 print:border-slate-300 shrink-0">
                      {skill.tag}
                    </span>
                  )}
                </div>
                <p className="text-[13px] sm:text-sm print:text-[11px] text-slate-400 print:text-slate-700 font-sans leading-relaxed pl-3.5">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* DAW & Hardware */}
        <div className="space-y-5 print:space-y-2">
          <div className="flex items-center gap-2.5 border-b border-slate-800/70 print:border-slate-300 pb-3 print:pb-1">
            <Sliders className="w-5 h-5 text-amber-400 print:text-slate-700" />
            <h3 className="text-base sm:text-lg print:text-sm font-extrabold text-white print:text-slate-950">소프트웨어 DAW & 스튜디오 장비</h3>
          </div>

          <div className="space-y-5 print:space-y-2">
            <div>
              <span className="text-xs sm:text-sm print:text-xs font-mono text-slate-400 print:text-slate-700 block mb-2.5 print:mb-1 font-bold uppercase">
                주요 사용 오디오 엔진 / DAW
              </span>
              <div className="flex flex-wrap gap-2.5 print:gap-1.5">
                {profile.tools.map((t, idx) => (
                  <span 
                    key={idx} 
                    className="px-3.5 py-2 print:px-2.5 print:py-1 rounded-xl bg-slate-900 border border-slate-800 print:border-slate-300 text-slate-100 print:text-slate-900 font-mono text-xs sm:text-sm print:text-xs font-semibold flex items-center gap-2 hover:border-cyan-500/50 transition-colors"
                  >
                    <Disc className="w-4 h-4 text-cyan-400 print:text-slate-700" />
                    <span>{t.name}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 print:pt-1">
              <span className="text-xs sm:text-sm print:text-xs font-mono text-slate-400 print:text-slate-700 block mb-2.5 print:mb-1 font-bold uppercase flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-emerald-400 print:text-slate-700" /> 스튜디오 하드웨어
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 print:gap-1 text-slate-200 print:text-slate-800 font-mono text-xs sm:text-sm print:text-xs">
                {profile.hardware.map((hw, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-cyan-400 print:text-slate-700 flex-shrink-0 mt-0.5" />
                    <span className="leading-snug break-words">{hw}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* 3. Clean Career Timeline */}
      <div className="space-y-7 print:space-y-3 pt-8 sm:pt-10 print:pt-4 border-t border-slate-800/80 print:border-slate-300">
        
        <div className="flex items-center gap-3">
          <Award className="w-6 h-6 text-cyan-400" />
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            프로젝트 & 사운드 디자인 이력 (PROJECT & EXPERIENCE)
          </h2>
        </div>

        {/* Open Timeline without nested boxes */}
        <div className="relative border-l-2 border-slate-800 print:border-slate-400 ml-3 sm:ml-4 pl-5 sm:pl-7 space-y-10 print:space-y-4">
          {profile.experience.map((exp, idx) => {
            const isCurrent = exp.period.includes('Present') || exp.role.includes('진행 중');
            return (
              <div key={idx} className="relative space-y-3 print:space-y-1.5 group break-inside-avoid">
                {/* Dot on line */}
                <div
                  className={`absolute -left-[29px] sm:-left-[37px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#0b0d18] border-2 transition-all ${
                    isCurrent
                      ? 'border-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.7)] group-hover:scale-125 group-hover:bg-emerald-400'
                      : 'border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.45)] group-hover:scale-125 group-hover:bg-cyan-400'
                  }`}
                />

                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-extrabold px-2.5 py-0.5 sm:px-3.5 sm:py-1 rounded-lg border shadow-sm shrink-0 whitespace-nowrap ${
                      isCurrent
                        ? 'text-emerald-300 bg-emerald-950/90 border-emerald-500/70 shadow-[0_0_14px_rgba(16,185,129,0.25)]'
                        : 'text-cyan-200 bg-cyan-950 border-cyan-400/70 shadow-[0_0_12px_rgba(6,182,212,0.2)]'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                        isCurrent ? 'bg-emerald-400 animate-pulse' : 'bg-cyan-400'
                      }`}
                    />
                    {exp.period}
                  </span>
                  <h3 className="text-base sm:text-xl font-extrabold text-white tracking-tight">
                    {exp.company}
                  </h3>
                  <span className="text-slate-500 text-sm hidden sm:inline">•</span>
                  <span
                    className={`text-xs sm:text-base font-bold ${
                      isCurrent ? 'text-emerald-300' : 'text-amber-300'
                    }`}
                  >
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
                      className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg border text-xs sm:text-sm font-mono ${
                        isCurrent
                          ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-200'
                          : 'bg-slate-900 border-slate-800 text-slate-200'
                      }`}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
};
