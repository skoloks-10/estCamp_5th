const $loginForm = document.getElementById("login-form");

const $usernameInput = document.getElementById("username");
const $passwordInput = document.getElementById("password");
const $rememberCheckbox = document.getElementById("remember");
const $labelRemember = $rememberCheckbox.parentElement;
const $loginBtn = document.getElementById("login-btn");

const $usernameError = document.getElementById("username-error");
const $passwordError = document.getElementById("password-error");
const $loginError = document.getElementById("login-error");

const API_URL = "https://dev.wenivops.co.kr/services/fastapi-crud";

async function signup(username, password) {
  try {
    const response = await fetch(`${API_URL}/1/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error("회원가입에 실패했습니다.");
    }

    const data = await response.json();
    if (data?.message === "User created successfully") {
      alert("회원가입 성공!");
    } else if (data?.message == "User already exists") {
      alert("이미 존재하는 회원입니다.");
    }
  } catch (error) {
    console.error("회원가입 오류:", error);
  }
}

async function getUserList() {
  try {
    const response = await fetch(`${API_URL}/1/login_user_info`);

    if (!response.ok) {
      throw new Error("유저 정보 조회에 실패했습니다.");
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("유저 정보 조회 오류:", error);
    throw error;
  }
}

async function login(username, password) {
  try {
    const response = await fetch(`${API_URL}/1/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error("로그인에 실패했습니다.");
    }

    const data = await response.json();

    if (data?.message === "Login success") {
      return data;
    } else {
      throw new Error("아이디 혹은 비밀번호가 일치하지 않습니다.");
    }
  } catch (error) {
    console.error("로그인 오류:", error);
    throw error;
  }
}

$loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = $usernameInput.value;
  const password = $passwordInput.value;

  const isUsernameValid = username.trim() !== "";
  if (isUsernameValid) {
    $usernameInput.classList.remove("error");
    $usernameError.style.display = "none";
  } else {
    $usernameInput.classList.add("error");
    $usernameError.innerText = "아이디를 입력해주세요.";
    $usernameError.style.display = "block";
    $usernameInput.focus();
    return;
  }

  const isPasswordValid = password.trim() !== "";
  console.log("isPasswordValid", isPasswordValid);
  if (isPasswordValid) {
    $passwordInput.classList.remove("error");
    $passwordError.style.display = "none";
  } else {
    $passwordInput.classList.add("error");
    $passwordError.innerText = "비밀번호를 입력해주세요.";
    $passwordError.style.display = "block";
    $passwordInput.focus();
    return;
  }

  login(username, password)
    .then((data) => {
      alert(`환영합니다! ${username}님!`);
    })
    .catch((error) => {
      console.error("로그인 실패", error);

      $loginError.innerText = error?.message || "로그인에 실패했습니다.";
      $loginError.style.display = "block";
    });
});

$usernameInput.addEventListener("input", () => {
  $usernameError.style.display = "none";
  $usernameInput.classList.remove("error");
  $loginError.style.display = "none";
});

$passwordInput.addEventListener("input", () => {
  $passwordError.style.display = "none";
  $passwordInput.classList.remove("error");
  $loginError.style.display = "none";
});

$rememberCheckbox.addEventListener("change", () => {
  $labelRemember.classList.toggle("checked");
});
