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
      "남을 깔보는 것을 좋아하는 학생회장이지만, 그 실상은 가오가 몸을 지배하는 바보이자 졸보이다.",
      "선도부에게 유치한 트집을 잡고 정신승리를 하거나 상대방에게 막말을 내뱉는 등 허세를 부리곤 한다."
    ],
    sdImage: "../images/bluearchive/profiles/makoto.png",
    variants: {
      default: {
        name: "마코토", label: "DEFAULT", image: "../images/bluearchive/variants/makoto/default.png",
        memorialImage: "../images/bluearchive/memorial/makoto/default.png", memorialVideo: "",
        weaponImage: "../images/bluearchive/weapons/makoto/default.png", weaponName: "마코토 전용 저격총", weaponType: "SR",
        role: "딜러 · SPECIAL · BACK", attackType: "관통", defenseType: "특수장갑",
        equipment: ["../images/bluearchive/equipment/gloves.png", "../images/bluearchive/equipment/bag.png", "../images/bluearchive/equipment/watch.png"],
        exVideo: "", // 기본 의상 EX 영상 파일명이 확인되면 경로 입력
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
        weaponImage: "../images/bluearchive/weapons/makoto/default.png", weaponName: "마코토 전용 저격총", weaponType: "SR",
        role: "딜러 · STRIKER · BACK", attackType: "신비", defenseType: "중장갑",
        equipment: ["../images/bluearchive/equipment/hat.png", "../images/bluearchive/equipment/hairpin.png", "../images/bluearchive/equipment/watch.png"],
        exVideo: "", // 수영복 EX 영상 파일명이 확인되면 경로 입력
        skills: {
          ex: {single:[145,166,210,232,275], few:[169,194,245,270,321], many:[401,461,581,642,762], cost:[6,6,6,6,6]},
          basic:[17.5,18.3,19.2,22.7,23.6,24.5,28,28.9,29.7,33.2],
          enhanced:[14,14.7,15.4,18.2,18.9,19.6,22.4,23.1,23.8,26.6],
          sub: {crit:[10,10.5,11,13.1,13.6,14.1,16.1,16.6,17.1,19.1], defense:[11.4,12,12.6,14.9,15.5,16,18.3,18.9,19.5,21.8]}
        }
      }
    }
  }
};
