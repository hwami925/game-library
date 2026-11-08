// STEP 22: 학생별 데이터 저장소. 새로운 학생은 이 객체에 추가합니다.
// 학생 ID는 영문 소문자/숫자/하이픈만 사용합니다.
window.STUDENT_DATABASE = {
  hoshino: {
    id: "hoshino", name: "타카나시 호시노", shortName: "호시노",
    school: "아비도스 고등학교", club: "대책위원회", grade: "3학년",
    age: "17살", height: "145cm", birthday: "1월 2일", hobby: "낮잠, 빈둥대기",
    introduction: [
      "아저씨 같은 말투를 즐겨 쓰며 업무보다는 장난치기를 좋아한다.",
      "때로는 위원회에 부족한 부분을 채워주며, 일이 시작되면 다른 아이들을 지켜주기 위해 가장 앞에서 분투한다."
    ],
    sdImage: "../images/bluearchive/profiles/hoshino.png",
    variants: {
      default: { name: "호시노", label: "DEFAULT", image: "../images/bluearchive/variants/hoshino/default.png", memorialImage: "../images/bluearchive/memorial/hoshino/default.png", memorialVideo: "fcR8KYVzjpg", weaponImage: "../images/bluearchive/weapons/hoshino/default.png", weaponName: "호루스의 눈 + 진압 방패 '아이언 호루스'", weaponType: "SG", role: "탱커", attackType: "관통", defenseType: "중장갑", equipment: ["../images/bluearchive/equipment/shoes.png", "../images/bluearchive/equipment/bag.png", "../images/bluearchive/equipment/charm.png", "../images/bluearchive/equipment/favorite/hoshino.png"], exVideo: "../images/bluearchive/skills/hoshino/defalult-ex.mp4", skills: { ex:[435,501,566,632,697], basic:[100,105,110,130,135,140,160,165,171,191], enhanced:[14,14.7,15.4,18.2,18.9,19.6,22.4,23.1,23.8,26.6], sub:[108,113,118,140,145,151,172,178,183,205] } },
      swimsuit: {
        name: "호시노(수영복)", label: "SWIMSUIT", image: "../images/bluearchive/variants/hoshino/swimsuit.png",
        memorialImage: null, memorialVideo: "", detailsReady: true,
        weaponImage: null, weaponName: "무기 이름 준비 중", weaponType: "SG",
        role: "서포터", attackType: "폭발", defenseType: "특수장갑",
        equipment: ["../images/bluearchive/equipment/shoes.png", "../images/bluearchive/equipment/bag.png", "../images/bluearchive/equipment/charm.png"],
        exVideo: null,
        skills: {
          ex: { attack: [26.5,28.5,32.5,34.5,38.5], explosive: [68.3,73.4,83.6,88.8,99], cost: [6,6,6,6,5] },
          basic: { damage: [283,297,312,340,354,368,397,411,425,454], heal: [75,75,75,82.6,82.6,82.6,90.1,90.1,90.1,97.6] },
          enhanced: [11.2,11.4,11.7,12.8,13.1,13.4,14.5,14.8,15.1,16.2],
          sub: [360,378,396,468,486,504,576,594,612,684]
        }
      },
      armed: { name: "호시노(무장)", label: "ARMED", image: "../images/bluearchive/variants/hoshino/armed.png", memorialImage: null, memorialVideo: "", detailsReady: false }
    }
  }
};
