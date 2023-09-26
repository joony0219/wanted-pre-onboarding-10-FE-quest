const idInput = document.querySelector("#idInput");
const passwordInput = document.querySelector("#passwordInput");
const loginButton = document.querySelector("#loginButton");
const idValue = document.querySelector("#idValue");
const passwordValue = document.querySelector("#passwordValue");

// 로그인 버튼 이벤트
loginButton.addEventListener("click", handleSubmit);

// 이벤트 함수
async function handleSubmit(e) {
  e.preventDefault();
  console.log(`아이디: ${idInput.value}`);
  console.log(`비밀번호: ${passwordInput.value}`);

  idValue.innerHTML = `아이디: ${idInput.value}`;
  passwordValue.innerHTML = `비밀번호: ${passwordInput.value}`;
}
