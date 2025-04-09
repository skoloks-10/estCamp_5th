// 1. 입력 요소에 대한 정보를 가져옵니다.
// - 입력과 관련된 요소: input, form
// - 출력과 관련된 요소: todo-list
// - (도전) 정보와 관련된 요소: total-todo, rest-todo

// 2. form 이벤트
// - 입력값이 있을 때 요소를 추가
// - (도전) 전체 할일, 남은 할일 갱신

// 3. 이벤트 위임
// - 체크박스가 눌리면 완료 상태로 바꿈
// - 삭제 버튼이 눌리면 요소를 삭제
// - (도전) 전체 할일, 남은 할일 갱신

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#todo-input");
  const todoList = document.querySelector("#todo-list");
  const totalTodo = document.querySelector("#total-todo");
  const restTodo = document.querySelector("#rest-todo");

  let todoCount = 0;
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTodo();
  });

  const addTodo = () => {
    if (input.value.trim() === "") {
      alert("입력 값이 없습니다");
      return;
    }

    const key = todoCount;
    todoCount += 1;

    const todoItem = document.createElement("div");
    const todoCheckbox = document.createElement("input");
    const todoText = document.createElement("span");
    const todoDeleteBtn = document.createElement("button");

    todoItem.setAttribute("data-key", key);
    todoItem.appendChild(todoCheckbox);
    todoItem.appendChild(todoText);
    todoItem.appendChild(todoDeleteBtn);
    todoList.appendChild(todoItem);

    todoCheckbox.type = "checkbox";
    todoCheckbox.addEventListener("click", (e) => {
      if (e.target.checked) {
        todoItem.style.textDecoration = "line-through";
      } else {
        todoItem.style.textDecoration = "";
      }
    });

    todoText.textContent = input.value;

    todoDeleteBtn.textContent = "삭제";
    todoDeleteBtn.addEventListener("click", () => {
      removeTodo(key);
    });
  };

  const removeTodo = (key) => {
    const todoItem = document.querySelector(`[data-key="${key}"]`);
    todoList.removeChild(todoItem);
  };
});
