
const games = [
  {
    name: "블루 아카이브",
    color: "#69BDF1",
    icon: "bluearchive-icon.png",
    background: "bluearchive-bg.png"
  },
  { name: "명조", color: "#545064" },
  { name: "엔드필드", color: "#D6A65C" },
  { name: "이환", color: "#E58AB9" },
  { name: "트릭컬", color: "#F2B95D" },
  { name: "리버스 1999", color: "#827E69" },
  { name: "스텔라소라", color: "#8D9BEA" },
  { name: "몬길", color: "#C78163" },
  { name: "니케", color: "#B96868" },
  { name: "홀로라이브 드림즈", color: "#6BB8C6" }
];

const gameList = document.getElementById("game-list");
let selectedGame = 0;

games.forEach((game, index) => {
  const card = document.createElement("div");
  card.className = "game-card";

  if (game.icon) {
    card.style.backgroundImage = `url("${game.icon}")`;
    card.style.backgroundSize = "cover";
    card.style.backgroundPosition = "center";
  } else {
    card.textContent = game.name;
    card.style.backgroundColor = game.color;
  }

  card.addEventListener("click", () => {
    selectedGame = index;
    updateSelection();
  });

  gameList.appendChild(card);
});

function updateSelection() {
  const cards = document.querySelectorAll(".game-card");
  const game = games[selectedGame];

  cards.forEach((card, index) => {
    card.classList.toggle("selected", index === selectedGame);
  });

  document.body.style.backgroundImage = game.background
    ? `linear-gradient(
        90deg,
        rgba(10, 16, 30, 0.65),
        rgba(10, 16, 30, 0.2)
      ), url("${game.background}")`
    : "linear-gradient(135deg, #19283e, #10141e)";

  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundAttachment = "fixed";
}

updateSelection();
