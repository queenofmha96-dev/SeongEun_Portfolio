import React from 'react';
import { 
  Award, Cpu, Disc, Mail, MapPin, Briefcase, Shield, Sliders, Radio, Sparkles, CheckCircle
} from 'lucide-react';
import { SoundDirectorProfile } from '../types';

interface ProfileViewProps {
  profile: SoundDirectorProfile;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ profile }) => {
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

            <div className="space-y-1.5 min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight whitespace-nowrap break-keep">
                  {profile.name}
                </h1>
                <span className="px-3 py-1 rounded-lg bg-cyan-950/90 border border-cyan-500/40 text-cyan-300 text-xs sm:text-sm font-mono font-bold whitespace-nowrap">
                  {profile.title}
                </span>
                <span className="px-3 py-1 rounded-lg bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-mono font-bold flex items-center gap-1.5 whitespace-nowrap">
                  <Briefcase className="w-3.5 h-3.5" />
                  {profile.experienceYears}년 차
                </span>
              </div>

              <p className="text-amber-300 font-semibold text-sm sm:text-base break-keep">
                {profile.tagline}
              </p>
            </div>
          </div>

          {/* Contact Badges */}
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
        </div>

        {/* Bio Section */}
        <div className="space-y-3">
          <h3 className="text-sm font-mono font-black text-cyan-400 uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" /> ABOUT DIRECTOR
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
            <h3 className="text-base sm:text-lg font-extrabold text-white">오디오 미들웨어 & 핵심 숙련도</h3>
          </div>

          <div className="space-y-3.5">
            {profile.skills.map((skill, idx) => (
              <div
                key={idx}
                className="p-3.5 sm:p-4 rounded-xl bg-[#090b13] border border-slate-800/80 hover:border-slate-700/80 transition-colors space-y-1.5"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm sm:text-base text-slate-100 font-bold font-sans">
                    {skill.name}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold shrink-0 ${
                      skill.tag === '주력'
                        ? 'bg-cyan-950/90 border border-cyan-500/50 text-cyan-300'
                        : 'bg-slate-800/90 border border-slate-700/80 text-slate-300'
                    }`}
                  >
                    {skill.tag}
                  </span>
                </div>
                <p className="text-[13px] sm:text-sm text-slate-400 font-sans leading-relaxed">
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
            주요 경력 사항 (CAREER HISTORY)
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
