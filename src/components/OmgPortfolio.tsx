import React from 'react';
import { ArrowLeft, ArrowDown, ArrowUpRight, AudioLines, Headphones, Layers, Radio } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';
import { FloatingControls } from './FloatingControls';
import { soundEngine } from '../utils/soundEngine';

const backLink = '#project-experience';
const linkStyle = 'inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-bold text-cyan-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300';

const roles = [
  { number: '01', title: 'UI 사운드 제작', label: 'UI SOUND DESIGN', description: '팀 내에서 역할을 분담하고, UI를 주요 담당 영역으로 맡아 관련 사운드를 제작했습니다.' },
  { number: '02', title: '중력·반중력 사운드', label: 'GRAVITY / ANTI-GRAVITY', description: '특정 무기로 생성되는 중력·반중력 효과의 사운드를 주요 담당 영역으로 맡아 작업했습니다.' },
  { number: '03', title: '게임 엔진 적용', label: 'ENGINE IMPLEMENTATION', description: '담당 사운드의 제작과 함께 게임 엔진에 적용하는 작업을 진행했습니다.' },
];

const goals = [
  { icon: AudioLines, label: 'SPACE / CLEANING', title: '우주에서의 청소', description: '우주를 배경으로 청소를 목표로 하는 게임이라는 설정을 사운드 콘셉트의 출발점으로 삼았습니다.' },
  { icon: Headphones, label: 'RESTRAINED COMEDY', title: '마냥 밝지만은 않은 코믹함', description: '기본적인 코믹함은 살리되, 지나치게 천진난만하고 밝은 느낌으로 흐르지 않도록 방향을 잡았습니다.' },
  { icon: Layers, label: 'TONAL BALANCE', title: '심각함과 가벼움 사이', description: '너무 심각하지도, 너무 가볍지도 않게. 게임의 유머와 분위기 사이에서 무게의 균형을 잡는 사운드를 지향했습니다.' },
];

function SectionHeading({ number, label, title }: { number: string; label: string; title: string }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-3 border-b border-slate-800/80 pb-3.5 sm:pb-4">
      <h2 className="flex items-center gap-3 text-xl sm:text-3xl font-extrabold tracking-tight break-keep">
        <span className="text-cyan-400 text-sm sm:text-base font-mono shrink-0">{number}.</span>
        {title}
      </h2>
      <span className="text-[10px] sm:text-xs text-slate-500 font-mono tracking-widest">{label}</span>
    </div>
  );
}

export function OmgPortfolio() {
  return (
    <div className="relative min-h-screen bg-[#07080f] text-slate-100 selection:bg-cyan-400 selection:text-slate-950 font-sans">
      <ParticleCanvas />
      <div className="relative z-10">
        <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-[#06070c]/95 backdrop-blur-md">
          <div className="mx-auto max-w-[1240px] flex items-center justify-between gap-3 px-4 sm:px-8 py-3">
            <a href={backLink} className={linkStyle} onMouseEnter={() => soundEngine.playHover()} onClick={() => soundEngine.playClick()}>
              <ArrowLeft className="size-4 shrink-0" aria-hidden="true" /> 프로젝트 이력
            </a>
            <span className="text-[10px] sm:text-xs font-mono tracking-widest text-slate-400 whitespace-nowrap">SEONGEUN / GAME AUDIO</span>
          </div>
        </header>

        <main className="mx-auto max-w-[1240px] px-4 sm:px-6 md:px-8 pb-16 sm:pb-24">
          <section aria-labelledby="omg-title" className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16 items-center py-12 sm:py-20 lg:py-24">
            <div>
              <p className="text-xs font-mono tracking-[0.18em] text-cyan-400">GAME AUDIO PORTFOLIO / 2026</p>
              <h1 id="omg-title" tabIndex={-1} className="mt-5 text-8xl sm:text-[9rem] leading-none font-black tracking-tighter outline-none">OMG<span className="text-cyan-400">.</span></h1>
              <p className="mt-3 text-xl sm:text-3xl font-bold tracking-tight text-slate-200">Sound Design & Implementation</p>
              <p className="mt-6 max-w-lg text-base sm:text-lg leading-relaxed text-slate-400 break-keep">우주 청소의 코믹함과 무게감 사이.<br />UI·중력·반중력 사운드 제작 및 엔진 적용.</p>
              <div className="mt-7 flex flex-wrap gap-2 text-[11px] sm:text-xs font-mono">
                {['UI SOUND', 'GRAVITY SFX', 'ENGINE IMPLEMENTATION'].map(label => (
                  <span key={label} className="rounded-lg border border-cyan-500/25 bg-cyan-950/30 px-2.5 py-1.5 text-cyan-200 whitespace-nowrap">{label}</span>
                ))}
              </div>
              <button type="button" className={`${linkStyle} mt-7`} onMouseEnter={() => soundEngine.playHover()} onClick={() => {
                soundEngine.playClick();
                document.getElementById('omg-showcase')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}>
                작업 자료 살펴보기 <ArrowDown className="size-4" aria-hidden="true" />
              </button>
            </div>

            {/* Abstract editorial graphic, not a game screenshot or playable media. */}
            <div className="relative aspect-square max-h-[440px] w-full overflow-hidden rounded-2xl border border-cyan-500/20 bg-[radial-gradient(ellipse_at_center,_rgba(6,182,212,0.14),_transparent_65%)]" aria-hidden="true">
              <span className="absolute top-5 left-5 text-[10px] font-mono tracking-[0.2em] text-slate-500">AUDIO / CONCEPT GRAPHIC</span>
              <div className="absolute inset-[13%] rounded-full border border-cyan-500/15" />
              <div className="absolute inset-[24%] rounded-full border border-cyan-400/30" />
              <div className="absolute inset-x-[8%] top-1/2 h-px bg-cyan-500/15" />
              <div className="absolute inset-y-[8%] left-1/2 w-px bg-cyan-500/15" />
              <div className="absolute inset-0 flex items-center justify-center gap-1.5 sm:gap-2">
                {[18, 30, 46, 25, 62, 83, 48, 100, 68, 38, 58, 29, 43, 23, 15].map((height, index) => (
                  <span key={index} style={{ height: `${height * 1.5}px` }} className="w-1.5 sm:w-2 rounded-full bg-cyan-300/80 shadow-[0_0_18px_rgba(6,182,212,0.3)]" />
                ))}
              </div>
              <span className="absolute bottom-5 left-5 text-[10px] font-mono tracking-[0.2em] text-cyan-400">OMG — SOUND DESIGN</span>
              <Radio className="absolute bottom-5 right-5 size-4 text-cyan-400" />
            </div>
          </section>

          <div className="space-y-12 sm:space-y-20">
            <section aria-labelledby="omg-overview">
              <SectionHeading number="01" label="PROJECT OVERVIEW" title="프로젝트 소개" />
              <div className="mt-7 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
                <div>
                  <h3 id="omg-overview" className="text-xl sm:text-2xl font-bold break-keep">게임 ‘OMG’의 사운드 디자인 협업</h3>
                  <p className="mt-4 text-sm sm:text-base leading-8 text-slate-300 break-keep">‘OMG’는 우주를 배경으로 청소를 목표로 하는 게임입니다. 팀 내에서 사운드 작업을 분담했으며, 저는 주로 UI와 특정 무기가 생성하는 중력·반중력 효과의 사운드 제작 및 게임 엔진 적용을 담당했습니다.</p>
                  <p className="mt-4 text-sm sm:text-base leading-8 text-slate-400 break-keep">현재 작업을 마무리하며 포트폴리오 자료를 정리하고 있습니다. 실제 게임 장면과 사운드 작업물은 준비되는 대로 이 페이지에서 공개합니다.</p>
                </div>
                <dl className="divide-y divide-slate-800/80 text-sm">
                  {[
                    ['PROJECT', 'OMG'],
                    ['ROLE', '사운드 제작 및 게임 엔진 적용'],
                    ['FOCUS', 'UI · 무기 중력·반중력 효과'],
                    ['YEAR', '2026'],
                    ['TEAM', 'OMG 개발팀과 역할 분담 협업'],
                    ['STATUS', '마무리 작업 중 · 자료 정리 중'],
                  ].map(([label, value]) => (
                    <div key={label} className="grid grid-cols-[72px_1fr] sm:grid-cols-[88px_1fr] gap-4 py-3.5 first:pt-0">
                      <dt className="font-mono text-xs text-slate-500 pt-0.5">{label}</dt>
                      <dd className={`break-keep ${label === 'STATUS' ? 'text-emerald-300' : 'text-slate-200'}`}>{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </section>

            <section aria-label="담당 작업">
              <SectionHeading number="02" label="MY CONTRIBUTION" title="담당 작업" />
              <div className="mt-7 grid gap-7 md:grid-cols-3 md:gap-8">
                {roles.map(role => (
                  <article key={role.number} className="border-l-2 border-cyan-500/40 pl-5">
                    <p className="font-mono text-[10px] tracking-widest text-cyan-400">{role.number} / {role.label}</p>
                    <h3 className="mt-3 text-lg font-bold break-keep">{role.title}</h3>
                    <p className="mt-3 text-sm text-slate-400 leading-7 break-keep">{role.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section aria-label="사운드 콘셉트">
              <SectionHeading number="03" label="SOUND CONCEPT" title="사운드 콘셉트" />
              <div className="mt-7 grid gap-7 md:grid-cols-3 md:gap-8">
                {goals.map(({ icon: Icon, label, title, description }) => (
                  <article key={label}>
                    <Icon className="size-6 text-cyan-400" aria-hidden="true" />
                    <p className="mt-4 text-[10px] font-mono tracking-widest text-slate-500">{label}</p>
                    <h3 className="mt-2 font-bold text-base sm:text-lg break-keep">{title}</h3>
                    <p className="mt-3 text-sm text-slate-400 leading-7 break-keep">{description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="omg-showcase" className="scroll-mt-28" aria-label="작업 자료">
              <SectionHeading number="04" label="SELECTED WORK" title="작업 자료" />
              <div className="mt-7 rounded-2xl border border-slate-800 bg-[#0b0d18]/80 px-5 py-10 sm:px-10 sm:py-14 text-center">
                <Headphones className="mx-auto size-9 text-cyan-400" aria-hidden="true" />
                <p className="mt-5 font-mono text-[10px] sm:text-xs tracking-[0.2em] text-cyan-400">GAMEPLAY & SOUND SHOWREEL</p>
                <h3 className="mt-3 text-xl sm:text-2xl font-bold">소리로 만나는 OMG</h3>
                <p className="mx-auto mt-4 max-w-lg text-sm sm:text-base text-slate-400 leading-7 break-keep">실제 게임플레이와 사운드 작업물을 담은 쇼릴을 준비하고 있습니다.</p>
                <span className="mt-6 inline-flex rounded-full border border-amber-500/30 bg-amber-950/30 px-3 py-1.5 text-xs font-bold text-amber-300">영상·음원 공개 준비 중</span>
              </div>
              <div className="mt-6 grid gap-5 sm:grid-cols-3 text-sm">
                {[
                  ['UI SOUND', 'UI 사운드', '담당 UI 사운드의 제작 과정과 결과'],
                  ['GRAVITY / ANTI-GRAVITY', '중력·반중력 사운드', '특정 무기로 생성되는 효과의 사운드'],
                  ['ENGINE IMPLEMENTATION', '엔진 적용 장면', '담당 사운드를 실제 게임에 적용한 모습'],
                ].map(([label, title, description]) => (
                  <div key={label} className="border-t border-slate-800/80 pt-5">
                    <p className="font-mono text-[10px] text-slate-500 tracking-widest">{label}</p>
                    <h3 className="mt-2 font-bold">{title}</h3>
                    <p className="mt-2 text-slate-400 leading-6 break-keep">{description}</p>
                    <p className="mt-3 text-xs text-slate-500">자료 정리 중</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-14 sm:mt-20 border-t border-slate-800/80 pt-8 sm:pt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <a href={backLink} className={linkStyle} onMouseEnter={() => soundEngine.playHover()} onClick={() => soundEngine.playClick()}>
              <ArrowLeft className="size-4" aria-hidden="true" /> 프로젝트 이력으로 돌아가기
            </a>
            <a href="mailto:queenofmha96@gmail.com" className={`${linkStyle} text-slate-400`}>
              프로젝트 문의 <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </main>
        <footer className="border-t border-slate-800/80 px-4 py-7 text-center text-[10px] sm:text-xs font-mono tracking-wider text-slate-500">© 2026 SEONGEUN YANG · GAME SOUND DESIGN</footer>
      </div>
      <FloatingControls />
    </div>
  );
}
