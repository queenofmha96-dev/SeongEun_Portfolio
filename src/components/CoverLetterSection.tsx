import React from 'react';

export const CoverLetterSection: React.FC = () => {
  return (
    <div className="rounded-2xl bg-[#0c0e18] border border-slate-800/80 p-6 sm:p-8 md:p-10 shadow-lg">
      <div className="space-y-6 text-sm sm:text-base text-slate-300 font-sans leading-relaxed break-keep">
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white tracking-tight pb-3 border-b border-slate-800">
          사운드로 플레이어에게 잊지 못할 몰입과 타격감을 선사하는 사운드 디자이너
        </h3>

        <div className="space-y-4 text-slate-300 text-sm sm:text-[15px] leading-relaxed">
          <p>
            안녕하세요! 게임 사운드 디자이너 양성은입니다.
          </p>

          <p>
            화려한 시각 효과와 캐릭터의 액션 호흡에 맞춘 SFX Multi-Layering, 공간감 있는 3D 오디오 연출, 그리고 게임의 세계관을 관통하는 사운드스케이프 설계를 전문으로 합니다.
          </p>

          <p className="text-slate-400">
            이곳에 작성하실 자기소개서 내용(지원 동기, 사운드 제작 철학, 실무 역량 및 협업 경험 등)을 자유롭게 채워 넣으실 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
};
