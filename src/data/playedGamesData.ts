import { MOBILE_GAMES_LIST } from './mobileGamesData';
import { OTHER_GAMES_LIST } from './otherGamesData';

export type GamePlatform = 'steam' | 'ps5' | 'switch' | 'mobile' | 'other';

export interface PlayedGameItem {
  appId: string;
  name: string;
  hoursPlayed?: number;
  genre: string;
  audioFocus: string;
  tag: string;
  headerImg?: string;
  steamUrl: string;
  platform?: GamePlatform;
}

export const PLAYED_GAMES_LIST: PlayedGameItem[] = [
  {
    appId: "578080",
    name: "PUBG: BATTLEGROUNDS",
    hoursPlayed: 950.5,
    genre: "배틀로얄 FPS",
    audioFocus: "초장거리 총성 음속돌파 소닉붐과 실내외 벽면 오클루전, 3D 풋스텝 공간 지각 믹싱",
    tag: "SPATIAL AUDIO & OCCLUSION",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/578080/header.jpg",
    steamUrl: "https://store.steampowered.com/app/578080/"
  },
  {
    appId: "359550",
    name: "Tom Clancy's Rainbow Six Siege",
    hoursPlayed: 880.3,
    genre: "택티컬 하이퍼 FPS",
    audioFocus: "파괴 가능한 벽체와 바닥 구멍을 통해 굴절되는 사운드 프로파게이션(Sound Propagation)",
    tag: "DYNAMIC PROPAGATION",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/359550/header.jpg",
    steamUrl: "https://store.steampowered.com/app/359550/"
  },
  {
    appId: "1973530",
    name: "Limbus Company",
    hoursPlayed: 752.5,
    genre: "다크 판타지 턴제 전략 RPG",
    audioFocus: "E.G.O 스킬 발동 시 왜곡되는 글리치 신스와 피격 시 가학적이고 날카로운 타격 임팩트",
    tag: "DARK SYNTH & IMPACT",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1973530/header.jpg",
    steamUrl: "https://store.steampowered.com/app/1973530/"
  },
  {
    appId: "582010",
    name: "Monster Hunter: World",
    hoursPlayed: 735.6,
    genre: "헌팅 액션 RPG",
    audioFocus: "고룡 포효의 저음역대 진동, 육질별 무기 타격 저항감 및 생태계 앰비언스 사운드",
    tag: "CREATURE SFX & ROAR",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/header.jpg",
    steamUrl: "https://store.steampowered.com/app/582010/"
  },
  {
    appId: "3513350",
    name: "Wuthering Waves (명조)",
    hoursPlayed: 470.8,
    genre: "오픈월드 액션 RPG",
    audioFocus: "패링·회피 저스트 타이밍 슬로우 트랜지션 및 공명 스킬의 화려한 고음역 사운드 연출",
    tag: "PARRY & RESONANCE",
    headerImg: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3513350/a545d2be527e3848918cc4fe17d237f70ced5f90/capsule_231x87.jpg",
    steamUrl: "https://store.steampowered.com/app/3513350/"
  },
  {
    appId: "346110",
    name: "ARK: Survival Evolved",
    hoursPlayed: 315.6,
    genre: "오픈월드 공룡 생존",
    audioFocus: "원시 환경의 날씨 변화(폭우·낙뢰) 사운드와 초대형 공룡의 압도적인 발걸음 저음역",
    tag: "WEATHER & SCALE",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/346110/header.jpg",
    steamUrl: "https://store.steampowered.com/app/346110/"
  },
  {
    appId: "905370",
    name: "Conqueror's Blade (컨커러스 블레이드)",
    hoursPlayed: 292.8,
    genre: "중세 전술 대규모 공성전 MMO",
    audioFocus: "수백 명 병력의 전열 함성, 공성 병기 파쇄음 및 전장 드럼 기반 다이내믹 오케스트레이션",
    tag: "SIEGE WARFARE & FOLEY",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/905370/header.jpg",
    steamUrl: "https://store.steampowered.com/app/905370/"
  },
  {
    appId: "1172470",
    name: "Apex Legends",
    hoursPlayed: 287.4,
    genre: "히어로 하이퍼 배틀로얄",
    audioFocus: "쉴드 크랙 시 카타르시스를 주는 유리 파편 피치 사운드와 슬라이딩 가속 폴리 사운드",
    tag: "FEEDBACK CUES & VELOCITY",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172470/header.jpg",
    steamUrl: "https://store.steampowered.com/app/1172470/"
  },
  {
    appId: "389730",
    name: "TEKKEN 7",
    hoursPlayed: 278.5,
    genre: "3D 대전 격투",
    audioFocus: "카운터 히트 시 슬로우모션 사운드 덕킹(Ducking)과 둔탁한 골절·타격 서브우퍼 베이스",
    tag: "HIT STOP & IMPACT",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/389730/header.jpg",
    steamUrl: "https://store.steampowered.com/app/389730/"
  },
  {
    appId: "1086940",
    name: "Baldur's Gate 3",
    hoursPlayed: 243.1,
    genre: "CRPG 대작",
    audioFocus: "주문 영창 보컬 레이어링, 주사위 굴림 사운드 감성 및 턴제 상태이상 마법 피드백",
    tag: "SPELL CHANT & DICE",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg",
    steamUrl: "https://store.steampowered.com/app/1086940/"
  },
  {
    appId: "1049590",
    name: "Eternal Return (이터널 리턴)",
    hoursPlayed: 203.2,
    genre: "쿼터뷰 애니메이션 배틀로얄",
    audioFocus: "지역별 소음 핑 시스템, 금지구역 사이렌 사운드 및 캐릭터 스킬 연계 타격 사운드",
    tag: "UI RADAR & SKILL SFX",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1049590/header.jpg",
    steamUrl: "https://store.steampowered.com/app/1049590/"
  },
  {
    appId: "105600",
    name: "Terraria",
    hoursPlayed: 194.4,
    genre: "2D 샌드박스 어드벤처",
    audioFocus: "지하 바이옴별 앰비언스 변화, 칩튠 감성의 레트로 보스 BGM 및 채광 타격감",
    tag: "RETRO & BIOME AMBIENCE",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg",
    steamUrl: "https://store.steampowered.com/app/105600/"
  },
  {
    appId: "1091500",
    name: "Cyberpunk 2077",
    hoursPlayed: 184.0,
    genre: "오픈월드 SF 액션 RPG",
    audioFocus: "나이트 시티의 미래지향적 사이버네틱 왜곡음, 차량 엔진 사운드와 인더스트리얼 신스",
    tag: "SCI-FI & SYNTHWAVE",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg",
    steamUrl: "https://store.steampowered.com/app/1091500/"
  },
  {
    appId: "2139460",
    name: "Once Human",
    hoursPlayed: 175.9,
    genre: "초자연 포스트 아포칼립스",
    audioFocus: "스타더스트 변이체의 그로테스크한 음향, 오염 구역 감지기 비프음과 기괴한 이계 앰비언스",
    tag: "MUTANT & WEIRD AUDIO",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2139460/header.jpg",
    steamUrl: "https://store.steampowered.com/app/2139460/"
  },
  {
    appId: "294100",
    name: "RimWorld",
    hoursPlayed: 167.4,
    genre: "SF 식민지 시뮬레이터",
    audioFocus: "잔잔한 어쿠스틱 기타 테마와 습격 경고 사이렌의 극적인 심리적 대비 효과",
    tag: "CONTRAST & ALARM",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/294100/header.jpg",
    steamUrl: "https://store.steampowered.com/app/294100/"
  },
  {
    appId: "261550",
    name: "Mount & Blade II: Bannerlord",
    hoursPlayed: 149.8,
    genre: "중세 기병 액션 RPG",
    audioFocus: "말발굽의 땅 울림, 방패에 꽂히는 화살 세례와 근접 냉병기 맞부딪힘의 사실적 폴리",
    tag: "MELEE FOLEY & CAVALRY",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/261550/header.jpg",
    steamUrl: "https://store.steampowered.com/app/261550/"
  },
  {
    appId: "1142710",
    name: "Total War: WARHAMMER III",
    hoursPlayed: 148.3,
    genre: "다크 판타지 대전략",
    audioFocus: "카오스 악마 세력의 사악한 음성 보코더 이펙트 및 대규모 마법 폭발 공간감",
    tag: "MAGIC BLAST & VOICE FX",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1142710/header.jpg",
    steamUrl: "https://store.steampowered.com/app/1142710/"
  },
  {
    appId: "553850",
    name: "HELLDIVERS 2",
    hoursPlayed: 134.5,
    genre: "협동 분대 슈터",
    audioFocus: "궤도 폭격의 압도적인 음압감, 오토마톤 기계 행진음과 벅스 무리의 위협적인 고주파",
    tag: "ORBITAL BOMB & DYNAMICS",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553850/header.jpg",
    steamUrl: "https://store.steampowered.com/app/553850/"
  },
  {
    appId: "108600",
    name: "Project Zomboid",
    hoursPlayed: 128.8,
    genre: "하드코어 좀비 생존",
    audioFocus: "문 두드리는 소리, 시야 밖 점프스케어 바이올린 스트링 및 심장 박동 긴장도 사운드",
    tag: "TENSION & JUMPSCARE",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/108600/header.jpg",
    steamUrl: "https://store.steampowered.com/app/108600/"
  },
  {
    appId: "625960",
    name: "Stoneshard",
    hoursPlayed: 112.7,
    genre: "턴제 하드코어 로그라이크",
    audioFocus: "중세 여관의 따뜻한 모닥불 앰비언스와 부상 부위별 고통 신음 및 묵직한 무기 피격음",
    tag: "IMMERSIVE FOLEY",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/625960/header.jpg",
    steamUrl: "https://store.steampowered.com/app/625960/"
  },
  {
    appId: "1771300",
    name: "Kingdom Come: Deliverance II",
    hoursPlayed: 98.2,
    genre: "중세 고증 현실주의 RPG",
    audioFocus: "플레이트 풀아머의 덜거덕거리는 금속 마찰음과 보헤미아 숲의 고증된 자연 음향",
    tag: "HISTORICAL METAL FOLEY",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1771300/header.jpg",
    steamUrl: "https://store.steampowered.com/app/1771300/"
  },
  {
    appId: "3321460",
    name: "Shadowverse: Worlds Beyond",
    hoursPlayed: 86.5,
    genre: "전략 카드 배틀 CCG",
    audioFocus: "초진화 연출 시 사운드 트위스트와 리더 스킬 발동 시 화려한 인터랙티브 음향",
    tag: "CARD SFX & EVOLUTION",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3321460/header.jpg",
    steamUrl: "https://store.steampowered.com/app/3321460/"
  },
  {
    appId: "1147560",
    name: "Skul: The Hero Slayer",
    hoursPlayed: 85.9,
    genre: "2D 로그라이트 액션",
    audioFocus: "스컬 머리 교체 시 스와핑 SFX 및 각성 변신 시 속도감 넘치는 칩 사운드 액센트",
    tag: "SNAPPY ACTION SFX",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1147560/header.jpg",
    steamUrl: "https://store.steampowered.com/app/1147560/"
  },
  {
    appId: "2246340",
    name: "Monster Hunter Wilds",
    hoursPlayed: 81.8,
    genre: "차세대 수렵 액션",
    audioFocus: "황폐기와 풍요기 환경 전환에 따른 동적 BGM 크로스페이드 및 집중 약점 타격음",
    tag: "DYNAMIC BGM & WEAKPOINT",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2246340/header.jpg",
    steamUrl: "https://store.steampowered.com/app/2246340/"
  },
  {
    appId: "1970440",
    name: "Heaven Burns Red (헤븐 번즈 레드)",
    hoursPlayed: 80.2,
    genre: "드라마틱 감성 RPG",
    audioFocus: "마에다 준 특유의 감성 피아노 보컬 멜로디와 스킬 컷신 오디오 싱크로나이즈",
    tag: "EMOTIONAL PIANO & VOCAL",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1970440/header.jpg",
    steamUrl: "https://store.steampowered.com/app/1970440/"
  },
  {
    appId: "1446780",
    name: "MONSTER HUNTER RISE",
    hoursPlayed: 77.8,
    genre: "경쾌한 수렵 액션",
    audioFocus: "밧줄벌레 공중 활공 바람 가르는 소리와 카무라 마을 전통 악기 앙상블 테마",
    tag: "ACROBATIC SFX & FOLK",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1446780/header.jpg",
    steamUrl: "https://store.steampowered.com/app/1446780/"
  },
  {
    appId: "1808500",
    name: "ARC Raiders",
    hoursPlayed: 74.5,
    genre: "협동 익스트랙션 슈터",
    audioFocus: "거대 아크 기계 드론의 전자 음향과 버려진 미래 지구의 황량한 바람 앰비언스",
    tag: "DRONE AUDIO & INDUSTRIAL",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1808500/header.jpg",
    steamUrl: "https://store.steampowered.com/app/1808500/"
  },
  {
    appId: "2484250",
    name: "별이되어라2: 베다의 기사들",
    hoursPlayed: 73.3,
    genre: "다크 판타지 2D 액션 RPG",
    audioFocus: "묵직한 중세 검격 타격음과 고전 벨트스크롤 감성의 저음역 둔탁한 타격감",
    tag: "HEAVY BLADE FOLEY",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2484250/header.jpg",
    steamUrl: "https://store.steampowered.com/app/2484250/"
  },
  {
    appId: "1623730",
    name: "Palworld / 팰월드",
    hoursPlayed: 72.5,
    genre: "오픈월드 서바이벌 크래프팅",
    audioFocus: "팰들의 아기자기한 음성 디자인과 총기 사운드의 유쾌한 대비 및 거점 작업 폴리",
    tag: "VOICE DESIGN & CRAFT",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1623730/header.jpg",
    steamUrl: "https://store.steampowered.com/app/1623730/"
  },
  {
    appId: "1997040",
    name: "MARVEL SNAP",
    hoursPlayed: 64.2,
    genre: "전략 카드 배틀",
    audioFocus: "스냅(SNAP) 선언 시 긴장감을 고조시키는 큐 사운드와 구역 공개 시 묵직한 반향",
    tag: "STAKES & UI AUDITORY",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1997040/header.jpg",
    steamUrl: "https://store.steampowered.com/app/1997040/"
  },
  {
    appId: "381210",
    name: "Dead by Daylight",
    hoursPlayed: 55.4,
    genre: "비대칭 서바이벌 호러",
    audioFocus: "살인마 접근 시 심장 박동(Terror Radius)의 단계별 증폭과 발전기 수리 실패 폭음",
    tag: "TERROR RADIUS & HORROR",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/381210/header.jpg",
    steamUrl: "https://store.steampowered.com/app/381210/"
  },
  {
    appId: "1937780",
    name: "Total War: PHARAOH (파라오)",
    hoursPlayed: 48.6,
    genre: "고대 청동기 대전략",
    audioFocus: "사막 모래폭풍의 청각 차폐 및 이집트 고대 악기 기반 전장 분위기 사운드스케이프",
    tag: "SANDSTORM & ANCIENT",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1937780/header.jpg",
    steamUrl: "https://store.steampowered.com/app/1937780/"
  },
  {
    appId: "1172620",
    name: "Sea of Thieves",
    hoursPlayed: 47.6,
    genre: "오픈월드 해적 멀티플레이",
    audioFocus: "선체 침수 시 수압과 삐걱거리는 목재음, 파도와 바람 세기에 따른 항해 사운드",
    tag: "OCEAN DYNAMICS & WOOD",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172620/header.jpg",
    steamUrl: "https://store.steampowered.com/app/1172620/"
  },
  {
    appId: "1252600",
    name: "ANOTHER EDEN (어나더 에덴)",
    hoursPlayed: 47.1,
    genre: "시공초월 모바일/PC RPG",
    audioFocus: "미츠다 야스노리 특유의 서정적인 어쿠스틱 오케스트레이션과 시대별 마을 테마",
    tag: "JRPG ORCHESTRA",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1252600/header_koreana.jpg",
    steamUrl: "https://store.steampowered.com/app/1252600/"
  },
  {
    appId: "1188930",
    name: "크로노 아크 (Chrono Ark)",
    hoursPlayed: 47.0,
    genre: "덱빌딩 로그라이트 RPG",
    audioFocus: "카드 셔플 및 핸드 드로우 사운드, 조사단 전투 스킬의 경쾌한 타격 피드백",
    tag: "DECKBUILDING & CARDS",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1188930/header.jpg",
    steamUrl: "https://store.steampowered.com/app/1188930/"
  },
  {
    appId: "1158310",
    name: "Crusader Kings III",
    hoursPlayed: 46.2,
    genre: "중세 대전략 시뮬레이션",
    audioFocus: "중세 궁정 악기 앙상블과 모략·암살 성공 시 음침하고 섬뜩한 심리적 효과음",
    tag: "MEDIEVAL COURT & PLOT",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1158310/header.jpg",
    steamUrl: "https://store.steampowered.com/app/1158310/"
  },
  {
    appId: "1604030",
    name: "V Rising",
    hoursPlayed: 45.8,
    genre: "뱀파이어 액션 생존 RPG",
    audioFocus: "고딕 호러 성채 건축 폴리와 흡혈 시의 묵직한 서브 베이스 타격감",
    tag: "GOTHIC HORROR & DRAIN",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1604030/header.jpg",
    steamUrl: "https://store.steampowered.com/app/1604030/"
  },
  {
    appId: "378760",
    name: "Pixel Starships",
    hoursPlayed: 44.7,
    genre: "SF 8비트 함선 전략",
    audioFocus: "레트로 칩튠 SF 효과음 및 함선 레이저 포격 레트로 사운드스케이프",
    tag: "8-BIT SCI-FI CHIPTUNE",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/378760/header.jpg",
    steamUrl: "https://store.steampowered.com/app/378760/"
  },
  {
    appId: "960170",
    name: "DJMAX RESPECT V",
    hoursPlayed: 44.4,
    genre: "정통 리듬 액션",
    audioFocus: "밀리초 단위 정밀 레이턴시 오디오 믹싱, 키음 피드백 및 하이파이 음악 트랙",
    tag: "PRECISION LATENCY & BEAT",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/960170/header.jpg",
    steamUrl: "https://store.steampowered.com/app/960170/"
  },
  {
    appId: "2073850",
    name: "THE FINALS",
    hoursPlayed: 44.0,
    genre: "환경 파괴 하이퍼 FPS",
    audioFocus: "건물 붕괴 콘크리트 파쇄음, 경기장 캐스터 현장감 및 코인 분출 파편 사운드",
    tag: "DESTRUCTION & CASTER",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2073850/header.jpg",
    steamUrl: "https://store.steampowered.com/app/2073850/"
  },
  {
    appId: "582660",
    name: "검은사막 (Black Desert)",
    hoursPlayed: 40.8,
    genre: "MMORPG / 오픈월드",
    audioFocus: "말발굽 지형별 폴리와 묵직한 공방 타격음, 광활한 대륙 오픈필드 자연 음향",
    tag: "HORSE FOLEY & AMBIENCE",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582660/header.jpg",
    steamUrl: "https://store.steampowered.com/app/582660/"
  },
  {
    appId: "2444750",
    name: "Shape of Dreams",
    hoursPlayed: 40.3,
    genre: "액션 로그라이크",
    audioFocus: "몽환적인 신스 패드 앰비언스와 속도감 넘치는 스킬 투사체 파쇄 효과음",
    tag: "DREAMY SYNTH & SLICE",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2444750/header.jpg",
    steamUrl: "https://store.steampowered.com/app/2444750/"
  },
  {
    appId: "2050650",
    name: "BIOHAZARD RE:4 (Resident Evil 4)",
    hoursPlayed: 39.0,
    genre: "서바이벌 서스펜스 호러",
    audioFocus: "전기톱의 위협적인 엔진 고주파, 패링 금속음 및 공간 음향 긴장도",
    tag: "CHAINSAW & SURVIVAL",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg",
    steamUrl: "https://store.steampowered.com/app/2050650/"
  },
  {
    appId: "1966720",
    name: "Lethal Company",
    hoursPlayed: 37.3,
    genre: "협동 근접 음성 공포",
    audioFocus: "거리감·벽 차폐에 따라 울리고 왜곡되는 근접 무전기 음성(Proximity Chat)",
    tag: "PROXIMITY CHAT & HORROR",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1966720/header.jpg",
    steamUrl: "https://store.steampowered.com/app/1966720/"
  },
  {
    appId: "431960",
    name: "Wallpaper Engine",
    hoursPlayed: 35.3,
    genre: "라이브 배경화면 유틸리티",
    audioFocus: "오디오 비주얼라이저 스펙트럼 반응 및 시스템 사운드 최적화",
    tag: "SPECTRUM VISUALIZER",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/431960/header.jpg",
    steamUrl: "https://store.steampowered.com/app/431960/"
  },
  {
    appId: "453480",
    name: "Shadowverse",
    hoursPlayed: 34.9,
    genre: "디지털 TCG",
    audioFocus: "카드 플레이 피격음과 추종자 소환 보이스 오버 및 리더 대사 믹싱",
    tag: "VOICEOVER & CARD CUES",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/453480/header.jpg",
    steamUrl: "https://store.steampowered.com/app/453480/"
  },
  {
    appId: "1782120",
    name: "ZERO Sievert",
    hoursPlayed: 32.7,
    genre: "탑다운 포스트 아포칼립스 익스트랙션",
    audioFocus: "황무지의 적막한 바람 소리와 깜짝 조우하는 돌연변이의 기괴한 괴성",
    tag: "POST-APOCALYPSE TOP-DOWN",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1782120/header.jpg",
    steamUrl: "https://store.steampowered.com/app/1782120/"
  },
  {
    appId: "1149460",
    name: "ICARUS 외계 행성 서바이벌",
    hoursPlayed: 32.1,
    genre: "하드코어 SF 생존",
    audioFocus: "외계 폭풍우 발생 시 청각 압박감과 산소 부족 경고음 및 벌목 폴리",
    tag: "ALIEN STORM & FOLEY",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1149460/header.jpg",
    steamUrl: "https://store.steampowered.com/app/1149460/"
  },
  {
    appId: "3983810",
    name: "더 스파이크 크로스 (The Spike Cross)",
    hoursPlayed: 30.4,
    genre: "2D 배구 스포츠 액션",
    audioFocus: "강력한 스파이크 임팩트 샷과 체육관 실내 코트 마찰음(스니커즈 스퀴크)",
    tag: "SPORTS IMPACT & COURT",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3983810/8c3b601b67c3cd20f1c63bf9a042ed16622fbc29/header.jpg",
    steamUrl: "https://store.steampowered.com/app/3983810/"
  },
  {
    appId: "1621690",
    name: "Core Keeper",
    hoursPlayed: 29.8,
    genre: "지하 샌드박스 어드벤처",
    audioFocus: "지하 동굴의 축축한 물방울 낙하음과 곡괭이 채광 피치 사운드",
    tag: "CAVE AMBIENCE & MINING",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1621690/header.jpg",
    steamUrl: "https://store.steampowered.com/app/1621690/"
  },
  {
    appId: "322330",
    name: "Don't Starve Together",
    hoursPlayed: 29.7,
    genre: "협동 고딕 생존 어드벤처",
    audioFocus: "캐릭터별 고유 악기 음색 보이스 대사 및 정신력 감소 시 그림자 음향",
    tag: "INSTRUMENT VOICES & SANITY",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/322330/header.jpg",
    steamUrl: "https://store.steampowered.com/app/322330/"
  },
  {
    appId: "306130",
    name: "The Elder Scrolls Online",
    hoursPlayed: 27.8,
    genre: "판타지 MMORPG",
    audioFocus: "탐리엘 대륙의 방대한 앰비언스와 종족별 판타지 테마 오케스트라",
    tag: "FANTASY AMBIENCE",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/306130/header.jpg",
    steamUrl: "https://store.steampowered.com/app/306130/"
  },
  {
    appId: "552520",
    name: "Far Cry 5",
    hoursPlayed: 27.2,
    genre: "오픈월드 액션 어드벤처",
    audioFocus: "호프 카운티의 컬트 찬송가 음악과 미국 시골 자연의 야생 동물 음향",
    tag: "CULT HYMNS & NATURE",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/552520/header.jpg",
    steamUrl: "https://store.steampowered.com/app/552520/"
  },
  {
    appId: "593600",
    name: "PixARK",
    hoursPlayed: 27.0,
    genre: "복셀 샌드박스 생존",
    audioFocus: "블록 파괴음과 아기자기하게 재해석된 공룡 크리처 울음소리",
    tag: "VOXEL FOLEY",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/593600/header.jpg",
    steamUrl: "https://store.steampowered.com/app/593600/"
  },
  {
    appId: "1085660",
    name: "데스티니 가디언즈 (Destiny 2)",
    hoursPlayed: 26.9,
    genre: "SF 액션 MMO 슈터",
    audioFocus: "궁극기 발동 시 웅장한 SF 신스 라이저와 외계 종족 무기별 고유 사운드",
    tag: "SCI-FI RISER & EXOTIC",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1085660/header.jpg",
    steamUrl: "https://store.steampowered.com/app/1085660/"
  },
  {
    appId: "1190340",
    name: "SUPER PEOPLE Testing Grounds",
    hoursPlayed: 23.6,
    genre: "배틀로얄 슈터",
    audioFocus: "슈퍼스킬 각성 사운드와 도심 시가전 총성 반향음",
    tag: "SUPER SKILL & URBAN",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1190340/header.jpg",
    steamUrl: "https://store.steampowered.com/app/1190340/"
  },
  {
    appId: "1377380",
    name: "Night of the Dead",
    hoursPlayed: 23.3,
    genre: "좀비 디펜스 생존",
    audioFocus: "트랩 작동 기계음과 야간 웨이브 밀려오는 좀비 무리의 그로울링",
    tag: "TRAP MECHANISM & HORDE",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1377380/header.jpg",
    steamUrl: "https://store.steampowered.com/app/1377380/"
  },
  {
    appId: "211820",
    name: "Starbound",
    hoursPlayed: 22.4,
    genre: "SF 2D 샌드박스",
    audioFocus: "우주 행성 탐사 시 흐르는 평화로운 피아노 테마와 광선 빔 채광음",
    tag: "SPACE PIANO & BEAM",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/211820/header.jpg",
    steamUrl: "https://store.steampowered.com/app/211820/"
  },
  {
    appId: "272510",
    name: "NARUTO SHIPPUDEN: UNS Revolution",
    hoursPlayed: 21.3,
    genre: "애니메이션 닌자 대전",
    audioFocus: "차크라 개방 음향, 오의 컷신 오디오 싱크 및 격렬한 인술 타격감",
    tag: "ANIME SFX & CHAKRA",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/272510/header.jpg",
    steamUrl: "https://store.steampowered.com/app/272510/"
  },
  {
    appId: "3059070",
    name: "The Headliners",
    hoursPlayed: 20.3,
    genre: "캐주얼 / 시뮬레이션",
    audioFocus: "헤드라인 뉴스 속보 징글과 유쾌한 카툰 스타일 UI 사운드",
    tag: "CARTOON UI & JINGLE",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3059070/62f137f87bbbe03ff34fe64f79aec4059532e849/header.jpg",
    steamUrl: "https://store.steampowered.com/app/3059070/"
  },
  {
    appId: "1042550",
    name: "디지몬 스토리 사이버 슬루스 해커스 메모리",
    hoursPlayed: 19.4,
    genre: "디지털 육성 RPG",
    audioFocus: "전뇌 공간 EDEN의 디지털 글리치 사운드와 진화 연출 SFX",
    tag: "CYBER GLITCH & EVOLUTION",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1042550/header.jpg",
    steamUrl: "https://store.steampowered.com/app/1042550/"
  },
  {
    appId: "3164500",
    name: "Schedule 1",
    hoursPlayed: 17.8,
    genre: "인디 공포 / 전략",
    audioFocus: "밀폐된 공간의 저주파 럼블(Rumble)과 긴박한 타이머 째깍거림",
    tag: "TICKING & LOW RUMBLE",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3164500/header.jpg",
    steamUrl: "https://store.steampowered.com/app/3164500/"
  },
  {
    appId: "1857090",
    name: "Norland (놀랜드)",
    hoursPlayed: 16.9,
    genre: "중세 왕국 경영 시뮬레이션",
    audioFocus: "중세 마을 장작 타는 소리, 주민들의 왁자지껄한 대화 앰비언스",
    tag: "MEDIEVAL TOWN AMBIENCE",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1857090/header.jpg",
    steamUrl: "https://store.steampowered.com/app/1857090/"
  },
  {
    appId: "2456740",
    name: "inZOI (인조이)",
    hoursPlayed: 16.5,
    genre: "차세대 인생 시뮬레이션",
    audioFocus: "현대 도시의 정밀한 환경음(교통, 카페)과 감정 상호작용 인터랙티브 보이스",
    tag: "NEXT-GEN LIFE FOLEY",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2456740/header.jpg",
    steamUrl: "https://store.steampowered.com/app/2456740/"
  },
  {
    appId: "1404210",
    name: "Red Dead Online",
    hoursPlayed: 15.5,
    genre: "서부 오픈월드 액션",
    audioFocus: "리볼버 공이치기 장전음, 황야의 휘파람 바람 소리와 전설적인 서부극 스코어",
    tag: "REVOLVER FOLEY & WESTERN",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1404210/header.jpg",
    steamUrl: "https://store.steampowered.com/app/1404210/"
  },
  {
    appId: "1281930",
    name: "tModLoader",
    hoursPlayed: 15.3,
    genre: "테라리아 모드 엔진",
    audioFocus: "커스텀 유저 모드 사운드트랙 확장 및 신규 무기 피격 효과음 통합",
    tag: "MOD AUDIO EXTENSION",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1281930/header.jpg",
    steamUrl: "https://store.steampowered.com/app/1281930/",
    platform: "steam"
  },
  // --- PlayStation 5 ---
  {
    appId: "ps5-persona5-royal",
    name: "페르소나 5 더 로열 (Persona 5 Royal)",
    hoursPlayed: 93.0,
    genre: "스타일리시 JRPG",
    audioFocus: "애시드 재즈·훵크 퓨전 보컬 사운드트랙과 턴제 총공격(All-Out Attack) 컷인 글래스 SFX",
    tag: "ACID JAZZ & STYLISH SFX",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1687950/header.jpg",
    steamUrl: "https://www.playstation.com/ko-kr/games/persona-5-royal/",
    platform: "ps5"
  },
  {
    appId: "ps5-fifa-22",
    name: "피파 22 (FIFA 22)",
    hoursPlayed: 25.0,
    genre: "스포츠 축구 시뮬레이션",
    audioFocus: "대형 스타디움 수만 관중의 실시간 응원가 챈트와 골포스트 강타 시 둔탁한 메탈릭 공진음",
    tag: "STADIUM CROWD & FOLEY",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1506830/header.jpg",
    steamUrl: "https://www.playstation.com/ko-kr/games/ea-sports-fifa-22/",
    platform: "ps5"
  },
  {
    appId: "ps5-outer-worlds",
    name: "더 아우터 월드 (The Outer Worlds)",
    hoursPlayed: 24.0,
    genre: "SF 1인칭 RPG",
    audioFocus: "할시온 식민지의 레트로 퓨처리즘 신스 배경음과 외계 플라즈마 에너지 웨폰 충전 효과음",
    tag: "RETRO SCI-FI & PLASMA",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/578650/header.jpg",
    steamUrl: "https://www.playstation.com/ko-kr/games/the-outer-worlds/",
    platform: "ps5"
  },
  {
    appId: "ps5-metro-exodus",
    name: "메트로 엑소더스 (Metro Exodus)",
    hoursPlayed: 19.0,
    genre: "포스트 아포칼립스 FPS",
    audioFocus: "방독면 정화통 교체 호흡음, 가이거 계수기 방사능 크랙클 및 오로라호 증기 기관차 사운드",
    tag: "GEIGER COUNTER & FOLEY",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/412020/header.jpg",
    steamUrl: "https://www.playstation.com/ko-kr/games/metro-exodus/",
    platform: "ps5"
  },
  {
    appId: "ps5-last-of-us-2",
    name: "더 라스트 오브 어스 파트 2 (The Last of Us Part II)",
    hoursPlayed: 18.0,
    genre: "시네마틱 서바이벌 액션",
    audioFocus: "론도 기반 어쿠스틱 로닌 기타 선율, 감염체 클리커(Clicker) 초음파 찰칵거림의 극대화된 공포",
    tag: "CLICKER SFX & ACOUSTIC",
    headerImg: "/games/ps5/ps5_last_of_us_2.jpg",
    steamUrl: "https://www.playstation.com/ko-kr/games/the-last-of-us-part-ii-remastered/",
    platform: "ps5"
  },
  {
    appId: "ps5-ghost-of-yotei",
    name: "고스트 오브 요테이 (Ghost of Yōtei)",
    hoursPlayed: 18.0,
    genre: "오픈월드 사무라이 액션",
    audioFocus: "북해도 요테이산 눈보라 환경음, 핫샤쿠 샤쿠하치 피리 선율 및 발도술 카타나 절삭음",
    tag: "SNOW AMBIENCE & KATANA",
    headerImg: "/games/ps5/ps5_ghost_of_yotei.jpg",
    steamUrl: "https://www.playstation.com/ko-kr/games/ghost-of-yotei/",
    platform: "ps5"
  },
  {
    appId: "ps5-one-piece-pw4",
    name: "원피스 해적무쌍 4 (Pirate Warriors 4)",
    hoursPlayed: 17.0,
    genre: "무쌍 액션",
    audioFocus: "기어 4 바운드맨 고무 탄성 폭발음과 거대 보스 전장 분쇄 이펙트의 묵직한 타격 레이어링",
    tag: "MUSOU IMPACT & CARTOON SFX",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1089090/header.jpg",
    steamUrl: "https://www.playstation.com/ko-kr/games/one-piece-pirate-warriors-4/",
    platform: "ps5"
  },
  {
    appId: "ps5-unicorn-overlord",
    name: "유니콘 오버로드 (Unicorn Overlord)",
    hoursPlayed: 15.0,
    genre: "택티컬 시뮬레이션 RPG",
    audioFocus: "바닐라웨어 특유의 우아한 오케스트라 팡파르와 기마대 돌격 갑옷 찰랑거림 폴리 사운드",
    tag: "TACTICAL ORCHESTRA & FOLEY",
    headerImg: "/games/ps5/ps5_unicorn_overlord.jpg",
    steamUrl: "https://www.playstation.com/ko-kr/games/unicorn-overlord/",
    platform: "ps5"
  },
  {
    appId: "ps5-stellar-blade",
    name: "스텔라 블레이드 (Stellar Blade)",
    hoursPlayed: 13.0,
    genre: "스타일리시 SF 액션 RPG",
    audioFocus: "보컬 트랙 기반 탐험 BGM과 저스트 패링 성공 시 쨍하게 울려 퍼지는 고음역 스파크 사운드",
    tag: "JUST PARRY & CYBER VOCAL",
    headerImg: "/games/ps5/ps5_stellar_blade.jpg",
    steamUrl: "https://www.playstation.com/ko-kr/games/stellar-blade/",
    platform: "ps5"
  },
  {
    appId: "ps5-last-of-us-1",
    name: "더 라스트 오브 어스 파트 1 (The Last of Us Part I)",
    hoursPlayed: 12.0,
    genre: "시네마틱 액션 어드벤처",
    audioFocus: "구스타보 산타올라야의 차랑고 현악 테마, 듀얼센스 템페스트 3D 빗소리 공간 오디오",
    tag: "TEMPEST 3D RAIN & FOLEY",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg",
    steamUrl: "https://www.playstation.com/ko-kr/games/the-last-of-us-part-i/",
    platform: "ps5"
  },
  {
    appId: "ps5-spiderman-miles-morales",
    name: "마블 스파이더맨: 마일즈 모랄레스",
    hoursPlayed: 11.0,
    genre: "오픈월드 액션 어드벤처",
    audioFocus: "베놈 블래스트 전기 방전 지직거림과 뉴욕 할렘 힙합 트랩 비트의 스타일리시한 조화",
    tag: "VENOM BLAST & TRAP BEATS",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817190/header.jpg",
    steamUrl: "https://www.playstation.com/ko-kr/games/marvels-spider-man-miles-morales/",
    platform: "ps5"
  },
  {
    appId: "ps5-horizon-forbidden-west",
    name: "호라이즌 포비든 웨스트 (Forbidden West)",
    hoursPlayed: 10.0,
    genre: "오픈월드 액션 RPG",
    audioFocus: "수중 잠영 앰비언스 오디오와 거대 기계수 떨림 및 풀링 와이어 화살 발사 임팩트",
    tag: "UNDERWATER 3D & MECHA SFX",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2420110/header.jpg",
    steamUrl: "https://www.playstation.com/ko-kr/games/horizon-forbidden-west/",
    platform: "ps5"
  },
  {
    appId: "ps5-horizon-zero-dawn",
    name: "호라이즌 제로 던 (Horizon Zero Dawn)",
    hoursPlayed: 8.0,
    genre: "오픈월드 액션 RPG",
    audioFocus: "선사 시대 원시 자연음과 전자 기계 울음소리의 이질적인 대비, 부위 파괴 쾌감 SFX",
    tag: "NATURE VS MECHA ACOUSTICS",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1151640/header.jpg",
    steamUrl: "https://www.playstation.com/ko-kr/games/horizon-zero-dawn-remastered/",
    platform: "ps5"
  },
  {
    appId: "ps5-death-stranding-2",
    name: "데스 스트랜딩 2: 온 더 비치 (Death Stranding 2)",
    hoursPlayed: 7.0,
    genre: "시네마틱 스트랜드 어드벤처",
    audioFocus: "지형 변화에 따른 유동적인 앰비언스 사운드스케이프와 로우 로어(Low Roar) 감성 보컬",
    tag: "CINEMATIC STRAND & AMBIENT",
    headerImg: "/games/ps5/ps5_death_stranding_2.jpg",
    steamUrl: "https://www.playstation.com/ko-kr/games/death-stranding-2-on-the-beach/",
    platform: "ps5"
  },
  {
    appId: "ps5-spiderman-2",
    name: "마블 스파이더맨 2 (Marvel's Spider-Man 2)",
    hoursPlayed: 5.0,
    genre: "오픈월드 슈퍼히어로 액션",
    audioFocus: "웹윙 활강 시 고속 바람 3D 패닝 사운드와 심비오트 촉수 타격의 묵직한 유기체 질감",
    tag: "WEB-WINGS 3D & SYMBIOTE SFX",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817070/header.jpg",
    steamUrl: "https://www.playstation.com/ko-kr/games/marvels-spider-man-2/",
    platform: "ps5"
  },
  {
    appId: "ps5-pathfinder-wotr",
    name: "패스파인더: 의인의 분노 (Pathfinder)",
    hoursPlayed: 2.0,
    genre: "정통 아이소메트릭 CRPG",
    audioFocus: "성전 기사단의 합창 코러스 BGM과 주사위 굴림 다이스 롤 및 주문 영창 라틴 보이스",
    tag: "CRPG CHANT & DICE FOLEY",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1184370/header.jpg",
    steamUrl: "https://www.playstation.com/ko-kr/games/pathfinder-wrath-of-the-righteous/",
    platform: "ps5"
  },
  // --- Nintendo Switch ---
  {
    appId: "switch-pokemon-violet",
    name: "포켓몬스터 바이올렛 (Pokémon Violet)",
    hoursPlayed: 75.0,
    genre: "오픈월드 RPG",
    audioFocus: "테라스탈 변신 시 크리스탈 프리즘 사운드와 에드 시런(Ed Sheeran) 콜라보 삽입곡 테마",
    tag: "TERASTAL & OPEN WORLD",
    headerImg: "/games/switch_pokemon_violet.png",
    steamUrl: "https://www.pokemonkorea.co.kr/scarlet_violet",
    platform: "switch"
  },
  {
    appId: "switch-mh-rise",
    name: "몬스터 헌터 라이즈 (스위치판)",
    hoursPlayed: 70.0,
    genre: "헌팅 액션",
    audioFocus: "카무라 마을의 와풍(和風) 코러스 보컬 테마와 밧줄벌레 와이어 액션 풍절음 및 무기 타격음",
    tag: "WAFU VOCAL & WIREBUG",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1446780/header.jpg",
    steamUrl: "https://www.monsterhunter.com/rise/kr/",
    platform: "switch"
  },
  {
    appId: "switch-pokemon-arceus",
    name: "포켓몬 레전드 아르세우스 (Legends Arceus)",
    hoursPlayed: 40.0,
    genre: "액션 RPG",
    audioFocus: "히스이 지방의 고대 일본풍 국악기 편곡과 몬스터볼 투척 및 수풀 은신 잔디 스퀴크 사운드",
    tag: "HISUI FOLK & STEALTH",
    headerImg: "/games/switch_pokemon_arceus.jpg",
    steamUrl: "https://www.pokemonkorea.co.kr/legends_arceus",
    platform: "switch"
  },
  {
    appId: "switch-pokemon-sword",
    name: "포켓몬스터 소드 (Pokémon Sword)",
    hoursPlayed: 35.0,
    genre: "RPG",
    audioFocus: "가라르 체육관 관중 함성과 다이맥스 배틀 시 웅장한 EDM·스타디움 락 비트",
    tag: "STADIUM EDM & CHEER",
    headerImg: "/games/switch_pokemon_sword.jpg",
    steamUrl: "https://www.pokemonkorea.co.kr/sword_shield",
    platform: "switch"
  },
  {
    appId: "switch-pokemon-za",
    name: "포켓몬 레전드 Z-A (Legends Z-A)",
    hoursPlayed: 30.0,
    genre: "도시 재개발 액션 RPG",
    audioFocus: "미르시티 메갈로폴리스 도시 환경음과 메가진화 복각 시의 고주파 에너지 파동 SFX",
    tag: "URBAN REDEVELOP & MEGA",
    headerImg: "/games/switch_pokemon_za.png",
    steamUrl: "https://www.pokemon.com/us/pokemon-video-games/pokemon-legends-z-a",
    platform: "switch"
  },
  {
    appId: "switch-pokemon-champions",
    name: "포켓몬 유나이트 (Pokémon UNITE)",
    hoursPlayed: 20.0,
    genre: "팀 전략 배틀 / MOBA",
    audioFocus: "골 에리어 득점 시 팡파르 및 레쿠쟈 등장 시 급박한 하이퍼 브라스 브레이크다운",
    tag: "GOAL FANFARE & MOBA",
    headerImg: "/games/switch_pokemon_unite.png",
    steamUrl: "https://www.pokemonkorea.co.kr/pokemon-unite",
    platform: "switch"
  },
  {
    appId: "switch-hades-2",
    name: "하데스 2 (Hades II - Switch)",
    hoursPlayed: 9.0,
    genre: "로그라이크 액션 RPG",
    audioFocus: "멜리노에의 마법 주술 시전음, 대런 코브(Darren Korb)의 지중해 메탈 프로그레시브 락",
    tag: "MEDITERRANEAN METAL",
    headerImg: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145350/header.jpg",
    steamUrl: "https://www.supergiantgames.com/games/hades-ii/",
    platform: "switch"
  },
  {
    appId: "switch-mario-3d-world",
    name: "슈퍼 마리오 3D 월드 + 퓨리 월드",
    hoursPlayed: 6.0,
    genre: "3D 액션 플랫포머",
    audioFocus: "빅밴드 브라스 재즈 스윙 연주와 고양이 마리오 변신 귀여운 야옹 폴리 효과음",
    tag: "BIGBAND JAZZ & CAT FOLEY",
    headerImg: "/games/switch_mario_3d_world.jpg",
    steamUrl: "https://www.nintendo.com/ko-kr/switch/3dworld/",
    platform: "switch"
  },
  // --- Other Standalone / Battle.net / Riot Games (그외 게임) ---
  ...OTHER_GAMES_LIST,
  // --- Mobile Games (277 Titles, No hours displayed) ---
  ...MOBILE_GAMES_LIST
];
