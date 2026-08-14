import React, { useState } from 'react';
import { Phone, Mail, Check, Copy } from 'lucide-react';
import { SoundDirectorProfile } from '../types';
import { soundEngine } from '../utils/soundEngine';

interface ContactViewProps {
  profile: SoundDirectorProfile;
  onResetDefaults?: () => void;
  onExportData?: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ profile }) => {
  const [copiedType, setCopiedType] = useState<'phone' | 'email' | null>(null);

  const phoneNum = "010-2144-6086";
  const emailAddr = profile.email || "livurlife94@naver.com";

  const handleCopy = (text: string, type: 'phone' | 'email', e: React.MouseEvent) => {
    e.stopPropagation();
    soundEngine.playClick();
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <div className="w-full space-y-8 py-2 animate-fadeIn text-white font-sans">
      
      {/* Container Box without border */}
      <div className="space-y-7">
        
        {/* Intro */}
        <div className="space-y-2.5 text-left">
          <h3 className="text-2xl sm:text-3xl font-black text-white font-sans tracking-tight">
            GET IN TOUCH
          </h3>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans max-w-3xl">
            게임 오디오 디렉팅, SFX 디자인, BGM 작곡 및 입사/외주 협업 문의를 환영합니다.
          </p>
        </div>

        {/* 2 Columns Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 max-w-5xl">
          
          {/* 1. Phone Card */}
          <div className="p-6 rounded-2xl bg-[#0f121d] border border-slate-800/90 hover:border-cyan-500/60 transition-all flex flex-col justify-between space-y-5 group shadow-lg">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  Phone / Mobile
                </span>
                <Phone className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
              <a
                href={`tel:${phoneNum}`}
                className="block text-lg sm:text-xl font-mono font-black text-white hover:text-cyan-300 transition-colors"
              >
                {phoneNum}
              </a>
            </div>

            <button
              onClick={(e) => handleCopy(phoneNum, 'phone', e)}
              className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/90 hover:border-cyan-400/80 text-xs sm:text-sm font-mono font-bold text-slate-200 hover:text-cyan-300 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              {copiedType === 'phone' ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">복사완료</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>번호 복사</span>
                </>
              )}
            </button>
          </div>

          {/* 2. Email Card */}
          <div className="p-6 rounded-2xl bg-[#0f121d] border border-slate-800/90 hover:border-amber-500/60 transition-all flex flex-col justify-between space-y-5 group shadow-lg">
            <div className="space-y-2.5 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm font-mono font-bold text-amber-400 uppercase tracking-wider">
                  Email Address
                </span>
                <Mail className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
              </div>
              <a
                href={`mailto:${emailAddr}`}
                className="block text-base sm:text-lg font-mono font-bold text-white hover:text-amber-300 transition-colors truncate"
                title={emailAddr}
              >
                {emailAddr}
              </a>
            </div>

            <button
              onClick={(e) => handleCopy(emailAddr, 'email', e)}
              className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/90 hover:border-amber-400/80 text-xs sm:text-sm font-mono font-bold text-slate-200 hover:text-amber-300 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              {copiedType === 'email' ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">복사완료</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>주소 복사</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
