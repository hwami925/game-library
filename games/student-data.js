// STEP 25: 학생별 데이터 저장소. 학생 ID는 영문 소문자/숫자/하이픈만 사용합니다.
window.STUDENT_DATABASE = {
  hoshino: {
    id: "hoshino", name: "타카나시 호시노", shortName: "호시노",
    school: "아비도스 고등학교", club: "대책위원회", grade: "3학년",
    age: "17살", height: "145cm", birthday: "1월 2일", hobby: "낮잠, 빈둥대기",
    introduction: ["아저씨 같은 말투를 즐겨 쓰며 업무보다는 장난치기를 좋아한다.", "때로는 위원회에 부족한 부분을 채워주며, 일이 시작되면 다른 아이들을 지켜주기 위해 가장 앞에서 분투한다."],
    sdImage: "../images/bluearchive/profiles/hoshino.png",
    variants: {
      default: { name: "호시노", label: "DEFAULT", image: "../images/bluearchive/variants/hoshino/default.png", memorialImage: "../images/bluearchive/memorial/hoshino/default.png", memorialVideo: "z8RGNS2H3uY", weaponImage: "../images/bluearchive/weapons/hoshino/default.png", weaponName: "호루스의 눈 + 진압 방패 '아이언 호루스'", weaponType: "SG", role: "탱커", attackType: "관통", defenseType: "중장갑", equipment: ["../images/bluearchive/equipment/shoes.png", "../images/bluearchive/equipment/bag.png", "../images/bluearchive/equipment/charm.png", "../images/bluearchive/equipment/favorite/hoshino.png"], exVideo: "../images/bluearchive/skills/hoshino/defalult-ex.mp4", skills: { ex:[435,501,566,632,697], basic:[100,105,110,130,135,140,160,165,171,191], enhanced:[14,14.7,15.4,18.2,18.9,19.6,22.4,23.1,23.8,26.6], sub:[108,113,118,140,145,151,172,178,183,205] } },
      swimsuit: {
        name: "호시노(수영복)", label: "SWIMSUIT", image: "../images/bluearchive/variants/hoshino/swimsuit.png",
        memorialImage: "../images/bluearchive/memorial/hoshino/swimsuit.png", memorialVideo: "_mms5xHEql0", detailsReady: true,
        weaponImage: "../images/bluearchive/weapons/hoshino/default.png", weaponName: "호루스의 눈 + 진압 방패 '아이언 호루스'", weaponType: "SG",
        role: "서포터", attackType: "폭발", defenseType: "특수장갑",
        equipment: ["../images/bluearchive/equipment/shoes.png", "../images/bluearchive/equipment/bag.png", "../images/bluearchive/equipment/charm.png"],
        exVideo: "../images/bluearchive/skills/hoshino/swimsuit-ex.mp4",
        skills: {
          ex: { attack: [26.5,28.5,32.5,34.5,38.5], explosive: [68.3,73.4,83.6,88.8,99], cost: [6,6,6,6,5] },
          basic: { damage: [283,297,312,340,354,368,397,411,425,454], heal: [75,75,75,82.6,82.6,82.6,90.1,90.1,90.1,97.6] },
          enhanced: [11.2,11.4,11.7,12.8,13.1,13.4,14.5,14.8,15.1,16.2],
          sub: [360,378,396,468,486,504,576,594,612,684]
        }
      },
      armed: {
        name: "호시노(무장)", label: "ARMED", image: "../images/bluearchive/variants/hoshino/armed.png",
        memorialImage: "../images/bluearchive/memorial/hoshino/armed.png", memorialVideo: "ZgMRJAkPYwo", detailsReady: true,
        weaponType: "SG", attackType: "신비", defenseType: "중장갑",
        equipment: ["../images/bluearchive/equipment/hat.png", "../images/bluearchive/equipment/bag.png", "../images/bluearchive/equipment/watch.png"],
        modes: {
          defense: {
            role: "탱커", weaponImage: "../images/bluearchive/weapons/hoshino/default.png",
            weaponName: "호루스의 눈 + 진압 방패 '아이언 호루스'",
            exVideo: "../images/bluearchive/skills/hoshino/armed-defense-ex.mp4",
            skills: {
              ex: {attack:[82.5,94.9,119,132,156], hp:[39.5,42.4,54.3,57.2,69.1], cost:[4,4,4,4,4]},
              basic:[12.7,13.3,13.9,16.5,17.1,17.8,20.3,20.9,21.6,24.1],
              enhanced:[11.2,11.4,11.7,12.8,13.1,13.4,14.5,14.8,15.1,16.2],
              sub:[10.1,10.6,11.1,13.2,13.7,14.2,16.2,16.7,17.2,19.3]
            }
          },
          attack: {
            role: "딜러", weaponImage: "../images/bluearchive/weapons/hoshino/armed-attack.png",
            weaponName: "호루스의 눈 + 보조 권총", 
            exVideo: "../images/bluearchive/skills/hoshino/armed-attack-ex.mp4",
            skills: {
              ex: {single:[78.5,90.3,113,125,149], area:[264,304,383,423,503], cost:[6,6,6,6,6]},
              basic:[211,221,232,274,284,295,337,348,358,400],
              enhanced:[11.2,11.7,12.3,14.5,15.1,15.6,17.9,18.4,19,21.2],
              sub: {ignore:[60,60,60,60,60,60,60,60,60,85], attack:[7.4,7.7,8.1,9.6,9.9,10.3,11.8,12.2,12.5,14], damage:[79,83,86.9,102,106,110,126,130,134,150]}
            }
          }
        }
      }
    }
  },
  makoto: {
    id: "makoto", name: "하누마 마코토", shortName: "마코토",
    school: "게헨나 학원", club: "만마전", grade: "3학년",
    age: "18살", height: "169cm", birthday: "3월 19일", hobby: "계획, 음모 꾸미기, 이부키랑 놀아주기",
    introduction: [
      "게헨나의 학생회 만마전의 회장이다.",
      "남을 깔보는 것을 좋아하는 학생회장이지만, 그 실상은 가오가 몸을 지배하는 바보이자 쫄보이다.",
      "선도부에게 유치한 트집을 잡고 정신승리를 하거나 상대방에게 막말을 내뱉는 등 허세를 부리곤 한다."
    ],
    sdImage: "../images/bluearchive/profiles/makoto.png",
    variants: {
      default: {
        name: "마코토", label: "DEFAULT", image: "../images/bluearchive/variants/makoto/default.png",
        memorialImage: "../images/bluearchive/memorial/makoto/default.png", memorialVideo: "oYy19ROA9-s",
        weaponImage: "../images/bluearchive/weapons/makoto/default.png", weaponName: "유아독존", weaponType: "SR",
        role: "딜러 · SPECIAL", attackType: "관통", defenseType: "특수장갑",
        equipment: ["../images/bluearchive/equipment/gloves.png", "../images/bluearchive/equipment/bag.png", "../images/bluearchive/equipment/watch.png"],
        exVideo: "../images/bluearchive/skills/makoto/default-ex.mp4", // 기본 의상 EX 영상 파일명이 확인되면 경로 입력
        skills: {
          ex: {few:[155,179,226,249,296], mid:[311,358,451,498,592], many:[519,597,753,831,987], cost:[6,6,6,6,6]},
          basic:[8.3,8.7,9.2,10.8,11.2,11.7,13.3,13.8,14.2,15.8],
          enhanced:[14,14.7,15.4,18.2,18.9,19.6,22.4,23.1,23.8,26.6],
          sub:[15.9,16.7,17.5,20.7,21.5,22.3,25.5,26.3,27,30.2]
        }
      },
      swimsuit: {
        name: "마코토(수영복)", label: "SWIMSUIT", image: "../images/bluearchive/variants/makoto/swimsuit.png",
        memorialImage: "../images/bluearchive/memorial/makoto/swimsuit.png", memorialVideo: "bqd3crd66XU",
        weaponImage: "../images/bluearchive/weapons/makoto/default.png", weaponName: "유아독존", weaponType: "SR",
        role: "딜러 · STRIKER", attackType: "신비", defenseType: "중장갑",
        equipment: ["../images/bluearchive/equipment/hat.png", "../images/bluearchive/equipment/hairpin.png", "../images/bluearchive/equipment/watch.png"],
        exVideo: "../images/bluearchive/skills/makoto/swimsuit-ex.mp4", // 수영복 EX 영상 파일명이 확인되면 경로 입력
        skills: {
          ex: {single:[145,166,210,232,275], few:[169,194,245,270,321], many:[401,461,581,642,762], cost:[6,6,6,6,6]},
          basic:[17.5,18.3,19.2,22.7,23.6,24.5,28,28.9,29.7,33.2],
          enhanced:[14,14.7,15.4,18.2,18.9,19.6,22.4,23.1,23.8,26.6],
          sub: {crit:[10,10.5,11,13.1,13.6,14.1,16.1,16.6,17.1,19.1], defense:[11.4,12,12.6,14.9,15.5,16,18.3,18.9,19.5,21.8]}
        }
      }
    }
  }  ,iroha: {
    id: "iroha", name: "나츠메 이로하", shortName: "이로하",
    school: "게헨나 학원", club: "만마전", grade: "2학년",
    age: "16살", height: "151cm", birthday: "11월 16일", hobby: "독서, 땡땡이 치기",
    introduction: [
      "무능한 상사인 마코토와는 다르게 현실을 직시하며 이성적인 대응을 하는, 비교적 유능한 부하로서 고생하는 모습을 보여준다.",
      "귀차니즘으로 가득한 이로하이지만, 게헨나와 학생회장 마코토가 일으키는 말썽 때문에 매일 불평과 한숨을 내쉬면서 업무를 해결해 나간다."
    ],
    sdImage: "../images/bluearchive/profiles/iroha.png",
    variants: {
      default: {
        name: "이로하", label: "DEFAULT", image: "../images/bluearchive/variants/iroha/default.png",
        memorialImage: "../images/bluearchive/memorial/iroha/default.png", memorialVideo: "K7He_Ci-OY4",
        weaponImage: "../images/bluearchive/weapons/iroha/default.png", weaponName: "만마전 제식 권총", weaponType: "HG",
        role: "딜러 · SPECIAL", attackType: "신비", defenseType: "중장갑",
        equipment: ["../images/bluearchive/equipment/hat.png", "../images/bluearchive/equipment/badge.png", "../images/bluearchive/equipment/watch.png", "../images/bluearchive/equipment/favorite/iroha.png"],
        exVideo: "../images/bluearchive/skills/iroha/default-ex.mp4",
        skills: {
          ex: {attack:[11.2,15.5,22.9,28.8,38.5], cost:[8,8,7,7,6]},
          basic:[43.8,46,48.3,57,59.2,61.4,70.2,72.3,74.6,83.3],
          tankBasic:[279,293,307,363,377],
          enhanced:[14,14.7,15.4,18.2,18.9,19.6,22.4,23.1,23.8,26.6],
          sub:[9.1,9.5,10,11.8,12.3,12.7,14.5,15,15.5,17.3]
        }
      },
      swimsuit: {
        name: "이로하(수영복)", label: "SWIMSUIT", image: "../images/bluearchive/variants/iroha/swimsuit.png",
        memorialImage: "../images/bluearchive/memorial/iroha/swimsuit.png", memorialVideo: "wgRuYUZV_zw",
        weaponImage: "../images/bluearchive/weapons/iroha/default.png", weaponName: "만마전 제식 권총", weaponType: "HG",
        role: "딜러 · STRIKER", attackType: "폭발", defenseType: "특수장갑",
        equipment: ["../images/bluearchive/equipment/hat.png", "../images/bluearchive/equipment/badge.png", "../images/bluearchive/equipment/watch.png"],
        exVideo: "../images/bluearchive/skills/iroha/swimsuit-ex.mp4",
        skills: {
          ex: {damage:[881,1013,1278,1410,1674], cost:[4,4,4,4,4]},
          basic:[13.7,14.4,15.1,17.9,18.6,19.3,22,22.7,23.4,26.1],
          enhanced:[14,14.7,15.4,18.2,18.9,19.6,22.4,23.1,23.8,26.6],
          sub:[13.2,13.9,14.6,17.2,17.9,18.5,21.2,21.9,22.5,25.2]
        }
      }
    }
  }
  ,ibuki: {
    id: "ibuki", name: "탄가 이부키", shortName: "이부키",
    school: "게헨나 학원", club: "만마전", grade: "1학년",
    age: "11살", height: "128cm", birthday: "4월 14일", hobby: "예술과 복습, 인형 모으기",
    introduction: ["굉장히 어리고 귀여운 외모에 행동조차 어린애 같아 마코토와 이로하를 비롯한 만마전의 부원들에게 굉장히 과보호를 받고 있다."],
    sdImage: "../images/bluearchive/profiles/ibuki.png",
    variants: {
      default: {
        name: "이부키", label: "DEFAULT", image: "../images/bluearchive/variants/ibuki/default.png",
        memorialImage: "../images/bluearchive/memorial/ibuki/default.png", memorialVideo: "jgmHxdVy2JI",
        weaponImage: "../images/bluearchive/weapons/ibuki/default.png", weaponName: "빵야빵야! 쨩", weaponType: "AR",
        role: "서포터 · STRIKER", attackType: "신비", defenseType: "중장갑",
        equipment: ["../images/bluearchive/equipment/gloves.png", "../images/bluearchive/equipment/hairpin.png", "../images/bluearchive/equipment/charm.png"],
        exVideo: "../images/bluearchive/skills/ibuki/default-ex.mp4",
        exVideos: {normal:"../images/bluearchive/skills/ibuki/default-ex.mp4",tank:"../images/bluearchive/skills/ibuki/default-tank-ex.mp4"},
        skills: {
          ex: {normal:[26.4,30.4,38.3,42.3,50.2], tank:[246,256,274,283,302], normalCost:[3,3,3,3,3],tankCost:[5,5,5,5,5]},
          basic: {damage:[204,214,225,266,276,286,327,337,347,388], attackDown:[18.6,18.6,18.6,20.4,20.4,20.4,22.3,22.3,22.3,24.1]},
          enhanced:[14,14.7,15.4,18.2,18.9,19.6,22.4,23.1,23.8,26.6],
          sub:[90,94.5,99,117,121,126,144,148,153,171]
        }
      },
      swimsuit: {
        name: "이부키(수영복)", label: "SWIMSUIT", image: "../images/bluearchive/variants/ibuki/swimsuit.png",
        memorialImage: "../images/bluearchive/memorial/ibuki/swimsuit.png", memorialVideo: "vIANe8IrueE",
        weaponImage: "../images/bluearchive/weapons/ibuki/default.png", weaponName: "빵야빵야! 쨩", weaponType: "AR",
        role: "서포터 · SPECIAL", attackType: "폭발", defenseType: "특수장갑",
        equipment: ["../images/bluearchive/equipment/shoes.png", "../images/bluearchive/equipment/badge.png", "../images/bluearchive/equipment/charm.png"],
        exVideo: "../images/bluearchive/skills/ibuki/swimsuit-ex1.mp4",
        exVideos: {first:"../images/bluearchive/skills/ibuki/swimsuit-ex1.mp4",second:"../images/bluearchive/skills/ibuki/swimsuit-ex2.mp4"},
        skills: {
          ex: {damage:[31.9,36.7,46.3,51.1,60.7], firstCost:[0,0,0,0,0],secondCost:[3,3,3,3,3]},
          basic: {tank:[7.9,8.3,8.7,10.3,10.7,11.1,12.7,13.1,13.5,15.1],dealer:[7.9,8.3,8.7,10.3,10.7,11.1,12.7,13.1,13.5,15.1],support:[7.5,7.9,8.3,9.8,10.2,10.5,12,12.4,12.8,14.3]},
          enhanced:[14,14.7,15.4,18.2,18.9,19.6,22.4,23.1,23.8,26.6],
          sub:[10.6,11.2,11.7,13.8,14.4,14.9,17,17.6,18.1,20.2]
        }
      }
    }
  }
  ,satsuki: {
    id: "satsuki", name: "쿄고쿠 사츠키", shortName: "사츠키",
    school: "게헨나 학원", club: "만마전", grade: "3학년",
    age: "17살", height: "172cm", birthday: "4월 10일", hobby: "마인드컨트롤 연구, 쇼핑",
    introduction: [
      "만마전의 정보부장 직위를 맡고 있다.",
      "타인을 조종하는 것에 관심이 많은지 세뇌 프로그램이나 최면술 등을 신봉하고 있다.",
      "야심찬 계획을 세우지만 실제로 성공한 사례는 드물다."
    ],
    sdImage: "../images/bluearchive/profiles/satsuki.png",
    variants: {
      default: {
        name: "사츠키", label: "DEFAULT", image: "../images/bluearchive/variants/satsuki/default.png",
        memorialImage: "../images/bluearchive/memorial/satsuki/default.png", memorialVideo: "G2uP3HGnHgU",
        weaponImage: "../images/bluearchive/weapons/satsuki/default.png", weaponName: "NK 델타", weaponType: "HG",
        role: "딜러 · SPECIAL", attackType: "폭발", defenseType: "중장갑",
        equipment: ["../images/bluearchive/equipment/hat.png", "../images/bluearchive/equipment/bag.png", "../images/bluearchive/equipment/watch.png"],
        exVideo: "../images/bluearchive/skills/satsuki/default-ex.mp4",
        skills: {
          ex: {pierce:[366,421,531,586,696], damage:[870,1000,1261,1392,1653], cost:[3,3,3,3,3]},
          basic:[14.3,15,15.7,18.6,19.3,20,22.9,23.6,24.3,27.2],
          enhanced:[14,14.7,15.4,18.2,18.9,19.6,22.4,23.1,23.8,26.6],
          sub:[9.1,9.5,10,11.8,12.3,12.7,14.5,15,15.5,17.3]
        }
      },
      swimsuit: {
        name: "사츠키(수영복)", label: "SWIMSUIT", image: "../images/bluearchive/variants/satsuki/swimsuit.png",
        memorialImage: "../images/bluearchive/memorial/satsuki/swimsuit.png", memorialVideo: "Y8Abx6xcdL4",
        weaponImage: "../images/bluearchive/weapons/satsuki/default.png", weaponName: "NK 델타", weaponType: "HG",
        role: "힐러 · STRIKER", attackType: "진동", defenseType: "탄력장갑",
        equipment: ["../images/bluearchive/equipment/gloves.png", "../images/bluearchive/equipment/hairpin.png", "../images/bluearchive/equipment/necklace.png"],
        exVideo: "../images/bluearchive/skills/satsuki/swimsuit-ex.mp4",
        skills: {
          ex: {ally:[164,189,238,263,312], self:[115,115,132,132,150], cost:[2,2,2,2,2]},
          basic: {defense:[20.3,20.3,20.3,22.3,22.3,22.3,24.4,24.4,24.4,26.4], damage:[197,207,217,236,246,256,275,285,295,315]},
          enhanced:[14,14.7,15.4,18.2,18.9,19.6,22.4,23.1,23.8,26.6],
          sub: {heal:[48.6,51,53.5,63.2,65.6,68,77.8,80.2,82.6,92.3], attack:[10.3,10.8,11.3,13.4,13.9,14.4,16.5,17,17.5,19.6]}
        }
      }
    }
  }
  ,chiaki: {
    id: "chiaki", name: "모토미야 치아키", shortName: "치아키",
    school: "게헨나 학원", club: "만마전", grade: "2학년",
    age: "16살", height: "167cm", birthday: "9월 22일", hobby: "주간지 발행, 친구 사귀기",
    introduction: [
      "게헨나 학생회 만마전의 의뢰이자 잡책을 맡고 있는 서기.",
      "마코토의 행각을 한심하게 바라보는 이로하와 달리 마코토의 모습을 보면서 재미있어하며 좋아하는 타입.",
      "서기라는 포지션 때문에 마코토가 말을 하다가 도중에 끼어들기도 하며, 사진기를 휴대하고 다니면서 사건을 기록한다."
    ],
    sdImage: "../images/bluearchive/profiles/chiaki.png",
    variants: {
      default: {
        name: "치아키", label: "DEFAULT", image: "../images/bluearchive/variants/chiaki/default.png",
        memorialImage: "../images/bluearchive/memorial/chiaki/default.png", memorialVideo: "rFt2PfTdXJo",
        weaponImage: "../images/bluearchive/weapons/chiaki/default.png", weaponName: "돌격소총", weaponType: "AR",
        role: "딜러 · STRIKER", attackType: "진동", defenseType: "특수장갑",
        equipment: ["../images/bluearchive/equipment/hat.png", "../images/bluearchive/equipment/hairpin.png", "../images/bluearchive/equipment/charm.png"],
        exVideo: "../images/bluearchive/skills/chiaki/default-ex.mp4",
        skills: {
          ex: {damage:[1459,1677,2115,2334,2772], cost:[6,6,6,6,6]},
          basic:[32.9,34.6,36.2,42.8,44.5,46.1,52.7,54.3,56,63.1],
          enhanced:[14,14.7,15.4,18.2,18.9,19.6,22.4,23.1,23.8,26.6],
          sub:[24.7,25.9,27.2,32.1,33.3,34.6,39.5,40.8,42,46.9]
        }
      },
      swimsuit: {
        name: "치아키(수영복)", label: "SWIMSUIT", image: "../images/bluearchive/variants/chiaki/swimsuit.png",
        memorialImage: "../images/bluearchive/memorial/chiaki/swimsuit.png", memorialVideo: "7AezlUJkQGc",
        weaponImage: "../images/bluearchive/weapons/chiaki/default.png", weaponName: "돌격소총", weaponType: "AR",
        role: "딜러 · SPECIAL", attackType: "관통", defenseType: "중장갑",
        equipment: ["../images/bluearchive/equipment/hat.png", "../images/bluearchive/equipment/hairpin.png", "../images/bluearchive/equipment/watch.png"],
        exVideo: "../images/bluearchive/skills/chiaki/swimsuit-ex.mp4",
        skills: {
          ex: {first:[530,610,769,849,1008], second:[267,307,387,427,508], cost:[4,4,4,4,4]},
          basic:[14,14.7,15.4,18.2,19,19.7,22.5,23.2,23.9,26.7],
          enhanced:[14,14.7,15.4,18.2,18.9,19.6,22.4,23.1,23.8,26.6],
          sub:[15.9,16.7,17.5,20.7,21.5,22.3,25.5,26.3,27,30.2]
        }
      }
    }
  }
};
