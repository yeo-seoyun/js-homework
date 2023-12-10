/*

1. 'email' 정규표현식을 사용한 validation
2. 'pw' 정규표현식을 사용한 validation
3. 상태 변수 관리
4. '로그인 버튼'을 클릭시 조건처리

*/

// 💡 html 태그 불러오기 (querySelector)
const email = document.querySelector("#userEmail");
const password = document.querySelector("#userPassword");
const loginButton = document.querySelector(".btn-login");

// 💡 email 확인
email.addEventListener("input", function () {
  if (emailReg(email.value)) {
    email.classList.remove("is--invalid");
  } else {
    email.classList.add("is--invalid");
  }
});

// 💡 password 확인
password.addEventListener("input", function () {
  if (pwReg(password.value)) {
    // true면 remove
    password.classList.remove("is--invalid");
  } else {
    // false면 add
    password.classList.add("is--invalid");
  }
});

// 💡 email, password 일치 시 다음 페이지로 이동
// window.location.href = 'welcome.html'
loginButton.addEventListener("click", () => {
  if () {
    window.location.href = "welcome.html";
  }
});

// 사용자 아이디, 비밀번호
const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

// 사용자 이메일 확인 코드
function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

// 사용자 비밀번호 확인 코드
function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  // 영어, 숫자, 특수문자 포함
  // const re = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-]).{6,16}$/;
  // -> 영어, 특수문자 포함
  return re.test(String(text).toLowerCase());
}
