// 범쌤의 코드 풀이 ~~~ !!

// 이벤트 위임으로 코드 짜기

const nav = document.querySelector(".nav");
const visual = document.querySelector(".visual img");
const nickName = document.querySelector(".nickName");
const list = document.querySelectorAll(".nav li");

const audio = [
  new AudioPlayer(`./assets/audio/ember.m4a`),
  new AudioPlayer(`./assets/audio/wade.m4a`),
  new AudioPlayer(`./assets/audio/clod.m4a`),
  new AudioPlayer(`./assets/audio/gale.m4a`),
];

function setBgColor({ target: t, colorA, colorB }) {
  if (typeof t === "string") t = document.querySelector(t);
  if (!colorB) {
    t.style.background = colorA;
  }

  t.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`;
}

function setImage(target, data) {
  if (target.hasAttribute("src")) {
    target.src = `./assets/${data.name.toLowerCase()}.jpeg`;
    target.alt = data.alt;
  }
}

function setNameText(target, data) {
  target.textContent = data.name;
}

function setAudioPlayer(index) {
  if (audio[index].isPlaying()) return;

  audio.forEach((sound) => sound.stop());
  audio[index].play();
}

function handleClick(e) {
  const target = e.target;

  const li = target.closest("li");
  if (!li) return;

  const index = li.dataset.index - 1;
  const source = data[index];

  list.forEach((item) => item.classList.remove("is-active"));
  li.classList.add("is-active");

  setBgColor({
    target: "body",
    colorA: source.color[0],
    colorB: source.color[1],
  });

  setImage(visual, source);
  setNameText(nickName, source);

  setAudioPlayer(index);
}

nav.addEventListener("click", handleClick);
