import React from 'react';
import { Sparkles, Target, Headphones, Users, Compass } from 'lucide-react';

export const CoverLetterSection: React.FC = () => {
  return (
    <div className="rounded-2xl bg-[#0c0e18] border border-slate-800/80 p-6 sm:p-9 md:p-12 shadow-xl space-y-10">
      
      {/* Title Header */}
      <div className="space-y-3 pb-6 border-b border-slate-800/80">
        <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs sm:text-sm font-bold tracking-wider">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>COVER LETTER & DESIGN PHILOSOPHY</span>
        </div>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug break-keep">
          사운드로 플레이어에게 잊지 못할 몰입과 손끝의 타격감을 선사하는 사운드 디자이너
        </h3>
        <p className="text-sm sm:text-base text-slate-400 font-sans break-keep">
          게임 연출의 핵심인 SFX, Foley, 3D 공간 음향 설계를 통해 게임 세계관의 완성도를 끌어올립니다.
        </p>
      </div>

      {/* Main Narrative Paragraphs */}
      <div className="space-y-8 text-slate-200 text-sm sm:text-base md:text-[17px] font-sans leading-relaxed sm:leading-loose break-keep">
        
        {/* Section 1: Life Story & Path to Game Sound Design */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5 text-white font-bold text-base sm:text-lg">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <h4>01. 게임과 함께 자란 나의 삶, 그리고 사운드로 이어지는 여정</h4>
          </div>
          <div className="text-slate-300 pl-4 border-l-2 border-slate-800 space-y-3.5 leading-relaxed sm:leading-loose">
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
            <p className="text-slate-200 font-medium">
              앞으로는 제가 느껴온 게임의 감동을 소리로 표현하여, 플레이어에게 더 깊은 몰입감과 감정을 전달하는 사운드 디자이너가 되고 싶습니다. 저의 경험과 열정을 바탕으로 게임의 완성도를 높이는 데 기여하고자 합니다.
            </p>
          </div>
        </div>

        {/* Section 2: Turning Point & Path to Sound Design */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5 text-white font-bold text-base sm:text-lg">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <h4>02. 게임 사운드 디자인을 시작한 계기</h4>
          </div>
          <div className="text-slate-300 pl-4 border-l-2 border-slate-800 space-y-3.5 leading-relaxed sm:leading-loose">
            <p>
              어릴 적부터 게임을 좋아하고, 그 게임을 직접 만들고 싶다는 꿈을 꾸었지만 어떻게 시작해야 할지 몰라 그저 마음속에만 담아두었습니다. 
              그러던 중 일하는 직장에서 사운드 디자인을 공부하고 있는 아르바이트 친구를 만나게 되었고, 그 친구를 통해 게임 사운드의 중요성과 그 영향력을 알게 되었습니다.
            </p>
            <p>
              게임 사운드가 어떻게 게임의 몰입감을 높이고, 사용자 경험을 더욱 풍부하게 만드는지에 대해 깊은 관심을 가지게 되었고, 이 분야에 도전하고자 결심을 했습니다. 
              그 친구의 권유로 사운드 디자인 학원을 다니기 시작했고, 지금까지 꾸준히 학습하며 실력을 키워가고 있습니다.
            </p>
          </div>
        </div>

        {/* Section 3: Motivation & Relentless Effort in Sound Design */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5 text-white font-bold text-base sm:text-lg">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <h4>03. 지원 동기 및 사운드 디자인 역량을 키우기 위한 치열한 노력</h4>
          </div>
          <div className="text-slate-300 pl-4 border-l-2 border-slate-800 space-y-3.5 leading-relaxed sm:leading-loose">
            <p>
              사운드 디자인을 배우기 시작하면서 제 실력이 아직 많이 부족하다는 것을 항상 느꼈습니다. 그렇기 때문에 좀 더 실력 발전을 위해 많은 노력을 기울였습니다. 평소 즐겨 하던 게임들의 사운드를 이전보다 훨씬 정밀하게 분석하기 시작했습니다. 전투 장면이나 주변 환경 소리에서 어떤 주파수 대역과 질감을 중요시하는지, 어떤 느낌의 사운드를 배치하는지 등, 저만의 생각에 갇히지 않고 다른 훌륭한 사운드 디자이너들의 작업물에 집중하며 제가 부족한 점은 무엇인지, 배울 점은 무엇인지 치열하게 파고들었습니다.
            </p>
            <p>
              서브컬처 장르 중 <strong className="text-cyan-300 font-semibold">‘붕괴: 스타레일’</strong> 같은 게임은 역동적인 장면 전환과 화려한 연출이 많아 의도된 사운드 연출이 극대화되어 있음을 느꼈고, 이를 면밀히 캐치하여 영상 테마와 호흡을 맞추는 연출적 사운드를 고심하며 제작해 보았습니다. 반면 <strong className="text-amber-300 font-semibold">‘고스트 오브 쓰시마’</strong>는 과장된 판타지 세계관이 아닌 실제 역사를 기반으로 한 중후한 분위기였기에, 인위적인 효과음보다는 가장 본질적인 기본 <strong className="text-white font-semibold">Foley 사운드의 사실적인 질감</strong>을 최우선으로 고려하며 사운드를 디자인했습니다.
            </p>
            <p>
              또한 평소 영화, 애니메이션, 게임 공식 트레일러를 꾸준히 찾아보며 연출에 활용되는 기믹이나 사운드 믹싱 기법들을 하나하나 분석했습니다. 새로운 작업에 도전할 때마다 사운드 연출의 스펙트럼과 바리에이션을 넓히는 것을 목표로 삼았고, 연출이나 음향 밸런스가 뛰어난 영상들은 체계적으로 아카이빙하여 레퍼런스로 연구하고 있습니다.
            </p>
            <p>
              게임을 진심으로 좋아하는 게이머이지만 개인적인 취향이 있었기에 과거에는 많이 접하지 않았던 장르들도 있었습니다. 하지만 전문 사운드 디자이너로서의 스펙트럼을 넓히기 위해, 개인적인 선호와 상관없이 평소 접해보지 않았던 다양한 장르의 게임들까지 직접 플레이하고 뜯어보며 오디오 구조를 분석하는 노력을 지속하고 있습니다.
            </p>
          </div>
        </div>

      </div>

      {/* Core Values / Summary Grid */}
      <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <div className="p-4 rounded-xl bg-[#080a12] border border-slate-800/80 space-y-2">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase">
            <Headphones className="w-4 h-4" />
            <span>Sound Craft</span>
          </div>
          <h5 className="text-white font-bold text-sm">차별화된 오디오 퀄리티</h5>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            자체 폴리 레코딩과 정밀 레이어링으로 게임 고유의 아이덴티티를 살리는 시그니처 사운드 구현
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#080a12] border border-slate-800/80 space-y-2">
          <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase">
            <Target className="w-4 h-4" />
            <span>Interactive Tech</span>
          </div>
          <h5 className="text-white font-bold text-sm">실시간 인터랙티브 연동</h5>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            UE5 MetaSound 및 미들웨어 기반 파라미터 제어로 상황에 맞게 반응하는 적응형 오디오 구축
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#080a12] border border-slate-800/80 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase">
            <Users className="w-4 h-4" />
            <span>Global & Team</span>
          </div>
          <h5 className="text-white font-bold text-sm">적극적인 소통 & 글로벌</h5>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            타 파트와의 긴밀한 싱크 조율 및 중국어 원어민 역량을 통한 해외 보이스 디렉팅 지원
          </p>
        </div>

      </div>

    </div>
  );
};

