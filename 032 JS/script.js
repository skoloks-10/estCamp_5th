class TodoItem {
  constructor(todo, status) {
    this.todo = todo;
    this.status = status;
  }
}

class TodoList extends TodoItem {
  constructor() {
    super();
    this.todoList = [];
  }
  changeStatus(todo, status) {
    this.todoList.forEach((item) => {
      if (item.todo === todo) {
        item.status = status;
        console.log(`할일-${todo} \n상태-${status}\n\t변경되었습니다.`);
      }
    });
  }

  addItem(todo, status) {
    this.todoList.push(new TodoItem(todo, status));
    console.log(`할일-${todo} \n상태-${status}\n\t추가되었습니다.`);
  }
  getItems() {
    return console.log(this.todoList);
  }
  removeItem(todo) {
    const index = this.todoList.findIndex((item) => item.todo === todo);
    this.todoList.splice(index, 1);
    console.log(
      `할일-${todo} \n상태-${this.todoList[index].status}\n\t삭제되었습니다.`
    );
  }
  getLeftTodoCount() {
    return console.log(
      `남은 할일 - ${this.todoList.filter((item) => item.status === "진행중").length} 개`
    );
  }
}

const todolist = new TodoList();

todolist.addItem("공부", "진행중");
todolist.addItem("운동", "완료");
todolist.addItem("독서", "진행중");
todolist.addItem("게임", "완료");
todolist.addItem("영화", "진행중");
todolist.addItem("음악", "완료");
todolist.addItem("여행", "진행중");
todolist.addItem("요리", "완료");

todolist.getItems();
todolist.getLeftTodoCount();
console.log("===================================");
todolist.removeItem("게임");
console.log("===================================");
todolist.getItems();
todolist.getLeftTodoCount();
console.log("===================================");
todolist.changeStatus("독서", "완료");
todolist.getItems();
todolist.getLeftTodoCount();
console.log("===================================");
