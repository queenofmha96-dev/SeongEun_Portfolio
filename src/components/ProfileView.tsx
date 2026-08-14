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
    <div className="max-w-5xl mx-auto space-y-12 animate-fadeIn text-slate-100 font-sans py-2">
      
      {/* 1. Header & Bio Intro */}
      <div className="space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
          <div className="flex items-center gap-5">
            {/* Avatar Badge */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-cyan-400 via-teal-500 to-amber-400 p-[1.5px] shadow-lg flex-shrink-0">
              <div className="w-full h-full bg-[#0b0d18] rounded-[14px] flex items-center justify-center">
                <Radio className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400" />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2.5">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {profile.name}
                </h1>
                <span className="px-2.5 py-0.5 rounded-md bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
                  {profile.title}
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold flex items-center gap-1">
                  <Briefcase className="w-3 h-3" />
                  {profile.experienceYears}년 차
                </span>
              </div>

              <p className="text-amber-300 font-medium text-xs sm:text-sm">
                {profile.tagline}
              </p>
            </div>
          </div>

          {/* Contact Badges */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-300">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span className="font-bold text-white">{profile.email}</span>
            </div>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>{profile.location}</span>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> ABOUT DIRECTOR
          </h3>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans max-w-4xl">
            {profile.bio}
          </p>
        </div>

      </div>

      {/* 2. Skills & Tools (Flat Clean Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4 border-t border-slate-800/80">
        
        {/* Audio Middleware Skills */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-800/80 pb-2">
            <Shield className="w-4 h-4 text-cyan-400" />
            <h3 className="text-sm font-bold text-white">오디오 미들웨어 & 핵심 숙련도</h3>
          </div>

          <div className="space-y-3.5">
            {profile.skills.map((skill, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-200 font-medium">{skill.name}</span>
                  <span className="text-cyan-300 font-mono font-bold text-[11px]">{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DAW & Hardware */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-800/80 pb-2">
            <Sliders className="w-4 h-4 text-amber-400" />
            <h3 className="text-sm font-bold text-white">소프트웨어 DAW & 스튜디오 장비</h3>
          </div>

          <div className="space-y-4 text-xs">
            <div>
              <span className="text-[11px] font-mono text-slate-400 block mb-2 font-bold uppercase">
                주요 사용 오디오 엔진 / DAW
              </span>
              <div className="flex flex-wrap gap-2">
                {profile.tools.map((t, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 font-mono text-xs flex items-center gap-1.5"
                  >
                    <Disc className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{t.name}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] font-mono text-slate-400 block mb-2 font-bold uppercase flex items-center gap-1">
                <Cpu className="w-3.5 h-3.5 text-emerald-400" /> 스튜디오 하드웨어
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300 font-mono">
                {profile.hardware.map((hw, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    <span className="truncate">{hw}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* 3. Clean Career Timeline */}
      <div className="space-y-6 pt-4 border-t border-slate-800/80">
        
        <div className="flex items-center gap-2.5">
          <Award className="w-5 h-5 text-cyan-400" />
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            주요 경력 사항 (CAREER HISTORY)
          </h2>
        </div>

        {/* Open Timeline without nested boxes */}
        <div className="relative border-l-2 border-slate-800 ml-3 pl-6 space-y-8">
          {profile.experience.map((exp, idx) => (
            <div key={idx} className="relative space-y-2 group">
              {/* Dot on line */}
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:scale-125 transition-transform" />

              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-base sm:text-lg font-bold text-white">{exp.company}</h3>
                  <span className="text-slate-500">•</span>
                  <span className="text-xs sm:text-sm font-semibold text-amber-300">{exp.role}</span>
                </div>

                <span className="text-xs font-mono text-cyan-400 font-bold px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800">
                  {exp.period}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {exp.description}
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs font-mono text-slate-500 font-semibold">프로젝트:</span>
                {exp.projects.map((p, i) => (
                  <span 
                    key={i} 
                    className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono"
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
