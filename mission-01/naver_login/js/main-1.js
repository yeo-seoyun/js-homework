// 범쌤의 코드 풀이 ~~~ !!

/*

1. 'email' 정규표현식을 사용한 validation
2. 'pw' 정규표현식을 사용한 validation
3. 상태 변수 관리
4. '로그인 버튼'을 클릭시 조건처리

*/
(function () {
  // 💡 html 태그 불러오기 (querySelector)
  const emailInput = document.querySelector("#userEmail");
  const passwordInput = document.querySelector("#userPassword");
  const loginButton = document.querySelector(".btn-login");

  let emailpass = false;
  let pwpass = false;

  // 💡 email 확인
  function handleCheckEmail() {
    let value = this.value;

    if (emailReg(value)) {
      // success
      this.classList.remove("is--invalid");
      emailpass = true;
    } else {
      this.classList.add("is--invalid");
      emailpass = false;
    }
  }

  // 💡 password 확인
  function handleCheckpw() {
    let value = this.value;

    if (pwReg(value)) {
      // success
      this.classList.remove("is--invalid");
      pwpass = true;
    } else {
      this.classList.add("is--invalid");
      pwpass = false;
    }
  }

  // 💡 login 확인, 일치 시 다음 페이지로 이동
  function handleLogin(e) {
    e.preventDefault();

    if (emailpass && pwpass) {
      const id = emailInput.value;
      const pw = passwordInput.value;
      const getUserId = user.id; // 비동기 => 1s
      const getUserPw = user.pw; // 비동기 => 1s

      console.log(getUserId, getUserPw);

      if (id === getUserId && pw === getUserPw) {
        // console.log('로그인 성공')
        window.location.href = "welcome.html";
      }
    } else {
      gsap.to("form", {
        y: 10,
        repeat: 8,
        yoyo: true,
        duration: 0.08,
        clearProps: true,
      });
    }
  }

  // 💡 eventhandler
  passwordInput.addEventListener("input", handleCheckEmail);
  passwordInput.addEventListener("input", handleCheckpw);
  loginButton.addEventListener("input", handleLogin);

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
    return re.test(String(text).toLowerCase());
  }
})();
