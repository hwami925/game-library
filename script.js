
const games = [
  {
    name: "블루 아카이브",
    color: "#69BDF1",
    icon: "bluearchive-icon.png",
    background: "bluearchive-bg.jpg",
    description: "학생 정보 · 학교 · 동아리 · 캐릭터별 상세 정보",
    slug: "bluearchive"
  },
{
  name: "명조",
  color: "#545064",
  icon: "wuthering-icon.jpg",
  background: "wuthering-bg.jpg",
  description: "캐릭터 정보 · 에코 · 파티 조합",
  slug: "wuthering-waves"
},
{
  name: "엔드필드",
  color: "#D6A65C",
  icon: "endfield-icon.png",
  background: "endfield-bg.png",
  description: "오퍼레이터 · 전투 · 기지 및 공략",
  slug: "endfield"
},
{
  name: "이환",
  color: "#E58AB9",
  icon: "neverness-icon.png",
  background: "neverness-bg.jpg",
  description: "캐릭터 정보 · 세계관 · 게임 가이드",
  slug: "neverness"
},
  {
    name: "트릭컬",
    color: "#F2B95D",
    description: "사도 정보 · 덱 편성 · 공략",
    slug: "trickcal"
  },
  {
    name: "리버스 1999",
    color: "#827E69",
    description: "캐릭터 정보 · 팀 조합 · 육성",
    slug: "reverse1999"
  },
  {
    name: "스텔라소라",
    color: "#8D9BEA",
    description: "캐릭터 정보 · 편성 · 게임 가이드",
    slug: "stellasora"
  },
  {
    name: "몬길",
    color: "#C78163",
    description: "캐릭터 정보 · 전투 · 공략",
    slug: "mongil"
  },
  {
    name: "니케",
    color: "#B96868",
    description: "니케 정보 · 스쿼드 · 전투 공략",
    slug: "nikke"
  },
  {
    name: "홀로라이브 드림즈",
    color: "#6BB8C6",
    description: "캐릭터 정보 · 게임 가이드",
    slug: "hololive-dreams"
  },
  {
    name: "스타세이비어",
    color: "#7C9FE8",
    description: "캐릭터 정보 · 팀 편성 · 육성",
    slug: "star-savior"
  },
  {
    name: "림버스 컴퍼니",
    color: "#A57A63",
    description: "인격 · E.G.O · 덱 편성 · 공략",
    slug: "limbus-company"
  }
];

const gameList = document.getElementById("game-list");
const backgroundLayer = document.getElementById("background-layer");
const gameTitle = document.getElementById("game-title");
const gameDescription = document.getElementById("game-description");
const gameNumber = document.getElementById("game-number");
const selectorCount = document.getElementById("selector-count");
const enterButton = document.getElementById("enter-button");

let selectedGame = 0;

// 게임 아이콘 생성
games.forEach((game, index) => {
  const card = document.createElement("div");
  card.className = "game-card";
  card.setAttribute("role", "button");
  card.setAttribute("tabindex", "0");
  card.setAttribute("aria-label", game.name);
  card.title = game.name;

  if (game.icon) {
    card.style.backgroundImage = `url("${game.icon}")`;
  } else {
    card.textContent = game.name;
    card.style.backgroundColor = game.color;
  }


const selectGame = () => {
  changeGame(index);
};


  card.addEventListener("click", selectGame);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectGame();
    }
  });

  gameList.appendChild(card);
});

// 선택한 게임 표시
function updateSelection() {
  const game = games[selectedGame];
  const cards = document.querySelectorAll(".game-card");

  cards.forEach((card, index) => {
    const isSelected = index === selectedGame;
    card.classList.toggle("selected", isSelected);
    card.setAttribute("aria-pressed", String(isSelected));
  });

  gameTitle.textContent = game.name;
  gameDescription.textContent = game.description;

  gameNumber.textContent =
    `${String(selectedGame + 1).padStart(2, "0")} / ${games.length}`;

  selectorCount.textContent = `${games.length} GAMES`;

  if (game.background) {
    backgroundLayer.style.backgroundImage = `
      linear-gradient(
        90deg,
        rgba(9, 16, 29, 0.82),
        rgba(9, 16, 29, 0.15)
      ),
      url("${game.background}")
    `;
  } else {
    backgroundLayer.style.backgroundImage = `
      linear-gradient(
        135deg,
        ${game.color},
        #101827 85%
      )
    `;
  }

  cards[selectedGame].scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "nearest"
  });
}

let transitionTimer;

function changeGame(index) {
  if (index === selectedGame) return;

  clearTimeout(transitionTimer);

  backgroundLayer.classList.add("fade-out");
  document.getElementById("game-info").classList.add("fade-out");

  transitionTimer = setTimeout(() => {
    selectedGame = index;
    updateSelection();

    backgroundLayer.classList.remove("fade-out");
    document.getElementById("game-info").classList.remove("fade-out");
  }, 300);
}

// 이전 게임
document.getElementById("prev-button").addEventListener("click", () => {
  changeGame((selectedGame - 1 + games.length) % games.length);
});

// 다음 게임
document.getElementById("next-button").addEventListener("click", () => {
  changeGame((selectedGame + 1) % games.length);
});

// 입장 버튼
enterButton.addEventListener("click", () => {
  const game = games[selectedGame];
  const target = `games/${game.slug}.html`;

  // 개별 게임 페이지는 추후 제작
  alert(`${game.name} 페이지는 아직 제작 중이야!`);
  console.log("예정된 페이지:", target);
});

// 최초 화면
updateSelection();
