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
    <div className="w-full max-w-3xl mx-auto space-y-6 py-2 animate-fadeIn text-white font-sans">
      
      {/* Container Box without border */}
      <div className="space-y-6">
        
        {/* Intro */}
        <div className="space-y-2 text-left">
          <h3 className="text-xl sm:text-2xl font-extrabold text-white font-sans tracking-tight">
            GET IN TOUCH
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed font-sans">
            게임 오디오 디렉팅, SFX 디자인, BGM 작곡 및 입사/외주 협업 문의를 환영합니다.
          </p>
        </div>

        {/* 2 Columns Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* 1. Phone Card */}
          <div className="p-5 rounded-xl bg-[#0f121d] border border-slate-800/80 hover:border-cyan-500/50 transition-all flex flex-col justify-between space-y-4 group">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  Phone
                </span>
                <Phone className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
              <a
                href={`tel:${phoneNum}`}
                className="block text-base font-mono font-bold text-white hover:text-cyan-300 transition-colors"
              >
                {phoneNum}
              </a>
            </div>

            <button
              onClick={(e) => handleCopy(phoneNum, 'phone', e)}
              className="w-full py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-400/60 text-xs font-mono font-bold text-slate-300 hover:text-cyan-300 transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              {copiedType === 'phone' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">복사완료</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>번호 복사</span>
                </>
              )}
            </button>
          </div>

          {/* 2. Email Card */}
          <div className="p-5 rounded-xl bg-[#0f121d] border border-slate-800/80 hover:border-amber-500/50 transition-all flex flex-col justify-between space-y-4 group">
            <div className="space-y-2 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-wider">
                  Email
                </span>
                <Mail className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
              </div>
              <a
                href={`mailto:${emailAddr}`}
                className="block text-sm font-mono font-bold text-white hover:text-amber-300 transition-colors truncate"
                title={emailAddr}
              >
                {emailAddr}
              </a>
            </div>

            <button
              onClick={(e) => handleCopy(emailAddr, 'email', e)}
              className="w-full py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-400/60 text-xs font-mono font-bold text-slate-300 hover:text-amber-300 transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              {copiedType === 'email' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">복사완료</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
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
