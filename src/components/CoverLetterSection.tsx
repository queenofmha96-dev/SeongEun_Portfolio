import React from 'react';
import { Compass, Sparkles, Flame, FileText } from 'lucide-react';

export const CoverLetterSection: React.FC = () => {
  return (
    <div className="space-y-6 sm:space-y-8 font-sans">
      
      {/* Sub-header Guide / Metadata */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-mono text-slate-400 px-1 border-b border-slate-800/60 print:border-slate-300 pb-2">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-cyan-400 print:text-slate-800" />
          <span className="text-slate-300 print:text-slate-900 font-semibold">지원자 양성은</span>
          <span className="text-slate-600">•</span>
          <span className="print:text-slate-800">사운드 디자이너 자기소개서 전문</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-500 no-print">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>가독성 최적화 여백 • 줄간격 2.0x 적용</span>
        </div>
      </div>

      {/* Narrative Chapters Container (Flat, Distinct Cards with Comfortable Whitespace) */}
      <div className="space-y-8 sm:space-y-10 print:space-y-4">
        
        {/* Chapter 01: Life Story & Path to Game Sound Design */}
        <article className="rounded-2xl bg-[#0a0c16]/90 border border-slate-800/80 p-6 sm:p-8 md:p-10 shadow-lg hover:border-slate-700/80 transition-colors break-inside-avoid print:break-inside-avoid print:p-4 print:border-slate-300 print:bg-slate-50/60 print:shadow-none">
          {/* Chapter Header */}
          <header className="flex flex-col sm:flex-row sm:items-center gap-3 border-b border-slate-800/80 print:border-slate-300 pb-4 sm:pb-5 print:pb-2 mb-6 sm:mb-8 print:mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-950/90 border border-cyan-500/50 text-cyan-300 font-mono text-xs sm:text-sm font-bold shrink-0 self-start sm:self-auto print:bg-slate-200 print:text-slate-900 print:border-slate-400">
              <Compass className="w-3.5 h-3.5 text-cyan-400 print:text-slate-800" />
              챕터 01
            </span>
            <h3 className="text-base sm:text-xl md:text-2xl font-extrabold text-white print:text-slate-950 tracking-tight break-keep">
              게임과 함께 자란 나의 삶, 그리고 사운드로 이어지는 여정
            </h3>
          </header>

          {/* Paragraphs with Generous Breathing Room and Optimal Line-Height */}
          <div className="space-y-6 sm:space-y-7 print:space-y-2.5 text-slate-200 print:text-slate-800 text-sm sm:text-base md:text-[16.5px] print:text-[11.5px] leading-[1.95] sm:leading-[2.1] print:leading-[1.65] tracking-[-0.01em] break-keep max-w-4xl">
            <p>
              어릴 적 저는 부모님을 따라 중국에서 생활하게 되었습니다. 언어 소통이 어려웠던 시절, 혼자 있는 시간이 많았던 저는 자연스럽게 게임에 몰두하게 되었습니다. 워크래프트, 디아블로, 카운터 스트라이크 등 다양한 게임을 즐기며, 게임 속 세계가 주는 몰입감과 사운드의 힘에 매료되었습니다.
            </p>

            <p>
              중학교 2학년 무렵, 중국어로 친구들과 소통이 가능해지면서 온라인 게임을 함께 즐기기 시작했습니다. 던전앤파이터, 크로스파이어, 블레이드 앤 소울 등 여러 게임을 접하며, 게임 사운드가 플레이 경험에 얼마나 큰 영향을 미치는지 체감할 수 있었습니다. 그때부터 막연히 '게임을 만드는 사람'이 되고 싶다는 생각이 마음 한켠에 자리 잡았습니다.
            </p>

            <p>
              성인이 되면서 현실의 불안과 미래에 대한 고민 속에서도 게임은 제게 위로와 몰입의 공간이었습니다. 그러던 중, '내가 좋아하는 게임을 만드는 일에 참여할 수 있다면 어떨까?'라는 생각이 들었고, 그 계기로 사운드 디자인을 배우기 시작했습니다.
            </p>

            <p>
              사운드 디자인을 공부하며, 제가 오랜 시간 즐겨왔던 게임들이 단순한 취미가 아닌 지식과 경험의 기반이 되었음을 느꼈습니다. 다양한 게임의 사운드 구조, 분위기 연출 방식을 이해하며, 저만의 시각으로 사운드를 디자인할 수 있는 자신감도 생겼습니다.
            </p>

            {/* Chapter 01 Closing Commitment Callout */}
            <div className="mt-4 print:mt-2 p-4 sm:p-5 print:p-2.5 rounded-xl bg-cyan-950/25 border-l-4 border-cyan-400 print:border-slate-600 print:bg-slate-100 text-slate-100 print:text-slate-900 font-medium leading-[1.95] sm:leading-[2.1] print:leading-[1.65]">
              <p>
                앞으로는 제가 느껴온 게임의 감동을 소리로 표현하여, 플레이어에게 더 깊은 몰입감과 감정을 전달하는 사운드 디자이너가 되고 싶습니다. 저의 경험과 열정을 바탕으로 게임의 완성도를 높이는 데 기여하고자 합니다.
              </p>
            </div>
          </div>
        </article>

        {/* Chapter 02: Turning Point & Path to Sound Design */}
        <article className="rounded-2xl bg-[#0a0c16]/90 border border-slate-800/80 p-6 sm:p-8 md:p-10 shadow-lg hover:border-slate-700/80 transition-colors break-inside-avoid print:break-inside-avoid print:p-4 print:border-slate-300 print:bg-slate-50/60 print:shadow-none">
          {/* Chapter Header */}
          <header className="flex flex-col sm:flex-row sm:items-center gap-3 border-b border-slate-800/80 print:border-slate-300 pb-4 sm:pb-5 print:pb-2 mb-6 sm:mb-8 print:mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-950/90 border border-amber-500/50 text-amber-300 font-mono text-xs sm:text-sm font-bold shrink-0 self-start sm:self-auto print:bg-slate-200 print:text-slate-900 print:border-slate-400">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 print:text-slate-800" />
              챕터 02
            </span>
            <h3 className="text-base sm:text-xl md:text-2xl font-extrabold text-white print:text-slate-950 tracking-tight break-keep">
              게임 사운드 디자인을 시작한 계기
            </h3>
          </header>

          {/* Paragraphs */}
          <div className="space-y-6 sm:space-y-7 print:space-y-2.5 text-slate-200 print:text-slate-800 text-sm sm:text-base md:text-[16.5px] print:text-[11.5px] leading-[1.95] sm:leading-[2.1] print:leading-[1.65] tracking-[-0.01em] break-keep max-w-4xl">
            <p>
              어릴 적부터 게임을 진심으로 좋아했고 언젠가 내 손으로 직접 게임을 만들고 싶다는 꿈을 품고 있었지만, 어디서부터 첫 발을 떼어야 할지 몰라 마음속 오랜 동경으로만 남겨두고 있었습니다. 그러던 중, 직장에서 사운드 디자인을 전문적으로 공부하던 동료와 인연이 닿게 되었습니다. 그 동료와 게임에 대한 깊은 대화를 나누며, 단순한 효과음을 넘어 플레이어의 감각을 깨우고 가상 세계에 생명력을 불어넣는 게임 사운드의 결정적인 가치와 영향력을 깊이 체감하게 되었습니다.
            </p>

            <p>
              화면 너머의 세계가 사운드라는 레이어를 통해 어떻게 살아 숨 쉬고, 플레이어에게 강렬한 몰입감과 피드백을 전달하는지 깨달은 순간, 이것이 바로 제가 열정을 바쳐 파고들 길이라는 확신이 들었습니다. 오랜 망설임을 끝내고 본격적으로 사운드 디자인 전문 교육에 뛰어들었고, 기초 음향 이론부터 DAW 시퀀싱, 엔진 연동에 이르기까지 배움의 폭을 넓히며 지금까지 하루도 빠짐없이 꾸준히 학습하여 실력을 탄탄하게 키워가고 있습니다.
            </p>
          </div>
        </article>

        {/* Chapter 03: Motivation & Relentless Effort in Sound Design */}
        <article className="rounded-2xl bg-[#0a0c16]/90 border border-slate-800/80 p-6 sm:p-8 md:p-10 shadow-lg hover:border-slate-700/80 transition-colors break-inside-avoid print:break-inside-avoid print:p-4 print:border-slate-300 print:bg-slate-50/60 print:shadow-none">
          {/* Chapter Header */}
          <header className="flex flex-col sm:flex-row sm:items-center gap-3 border-b border-slate-800/80 print:border-slate-300 pb-4 sm:pb-5 print:pb-2 mb-6 sm:mb-8 print:mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-950/90 border border-cyan-500/50 text-cyan-300 font-mono text-xs sm:text-sm font-bold shrink-0 self-start sm:self-auto print:bg-slate-200 print:text-slate-900 print:border-slate-400">
              <Flame className="w-3.5 h-3.5 text-cyan-400 print:text-slate-800" />
              챕터 03
            </span>
            <h3 className="text-base sm:text-xl md:text-2xl font-extrabold text-white print:text-slate-950 tracking-tight break-keep">
              지원 동기 및 사운드 디자인 역량을 키우기 위한 치열한 노력
            </h3>
          </header>

          {/* Paragraphs */}
          <div className="space-y-6 sm:space-y-7 print:space-y-2.5 text-slate-200 print:text-slate-800 text-sm sm:text-base md:text-[16.5px] print:text-[11.5px] leading-[1.95] sm:leading-[2.1] print:leading-[1.65] tracking-[-0.01em] break-keep max-w-4xl">
            <p>
              사운드 디자인을 배우기 시작하면서 제 실력이 아직 많이 부족하다는 것을 항상 느꼈습니다. 그렇기 때문에 좀 더 실력 발전을 위해 많은 노력을 기울였습니다. 평소 즐겨 하던 게임들의 사운드를 이전보다 훨씬 정밀하게 분석하기 시작했습니다. 전투 장면이나 주변 환경 소리에서 어떤 주파수 대역과 질감을 중요시하는지, 어떤 느낌의 사운드를 배치하는지 등, 저만의 생각에 갇히지 않고 다른 훌륭한 사운드 디자이너들의 작업물에 집중하며 제가 부족한 점은 무엇인지, 배울 점은 무엇인지 치열하게 파고들었습니다.
            </p>

            <p>
              서브컬처 장르 중 <strong className="text-cyan-300 print:text-slate-950 font-semibold">‘붕괴: 스타레일’</strong> 같은 게임은 역동적인 장면 전환과 화려한 연출이 많아 의도된 사운드 연출이 극대화되어 있음을 느꼈고, 이를 면밀히 캐치하여 영상 테마와 호흡을 맞추는 연출적 사운드를 고심하며 제작해 보았습니다. 반면 <strong className="text-amber-300 print:text-slate-950 font-semibold">‘고스트 오브 쓰시마’</strong>는 과장된 판타지 세계관이 아닌 실제 역사를 기반으로 한 중후한 분위기였기에, 인위적인 효과음보다는 가장 본질적인 기본 <strong className="text-white print:text-slate-950 font-semibold">Foley 사운드의 사실적인 질감</strong>을 최우선으로 고려하며 사운드를 디자인했습니다.
            </p>

            <p>
              또한 평소 영화, 애니메이션, 게임 공식 트레일러를 꾸준히 찾아보며 연출에 활용되는 기믹이나 사운드 믹싱 기법들을 하나하나 분석했습니다. 새로운 작업에 도전할 때마다 사운드 연출의 스펙트럼과 바리에이션을 넓히는 것을 목표로 삼았고, 연출이나 음향 밸런스가 뛰어난 영상들은 체계적으로 아카이빙하여 레퍼런스로 연구하고 있습니다.
            </p>

            {/* Closing Synthesis Callout */}
            <div className="mt-4 print:mt-2 p-4 sm:p-5 print:p-2.5 rounded-xl bg-amber-950/20 border-l-4 border-amber-400/80 print:border-slate-600 print:bg-slate-100 text-slate-100 print:text-slate-900 font-medium leading-[1.95] sm:leading-[2.1] print:leading-[1.65]">
              <p>
                게임을 진심으로 좋아하는 게이머이지만 개인적인 취향이 있었기에 과거에는 많이 접하지 않았던 장르들도 있었습니다. 하지만 전문 사운드 디자이너로서의 스펙트럼을 넓히기 위해, 개인적인 선호와 상관없이 평소 접해보지 않았던 다양한 장르의 게임들까지 직접 플레이하고 뜯어보며 오디오 구조를 분석하는 노력을 지속하고 있습니다.
              </p>
            </div>
          </div>
        </article>

      </div>

    </div>
  );
};

