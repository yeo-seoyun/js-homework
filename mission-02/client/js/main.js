/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const navigation = document.querySelector("nav ul");
const visualImage = document.querySelector(".visual img");
const body = document.querySelector("body");
const nickName = document.querySelector(".nickName");

function handleClick(e) {
  e.preventDefault();

  let li = e.target.closest("li");
  if (!li) return;

  let index = li.dataset.index;

  const list = Array.from(navigation.children);

  // is-active 추가,제거 하기
  list.forEach((li) => li.classList.remove("is-active"));
  li.classList.add("is-active");

  // 이미지 바꾸기
  visualImage.src = `./assets/${data[index - 1].src}`;
  visualImage.alt = data[index - 1].alt;

  // 텍스트 바꾸기
  nickName.textContent = data[index - 1].name;
}

navigation.addEventListener("click", handleClick);
