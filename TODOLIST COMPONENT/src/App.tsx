import { useState } from "react";
import style from "./ex.module.less";
import TodoList from "./TodoList";

export type TodoListType = {
  id: number;
  todo: string;
  isDone: boolean;
};

export function App() {
  const [text, setText] = useState<string>("");
  const [todoList, setTodoList] = useState<TodoListType[]>([]);

  const addTodo = () => {
    if (!text.trim()) {
      alert("등록할 일정을 입력해주세요!");
      return;
    }
    setTodoList([
      ...todoList,
      { id: todoList.length, todo: text, isDone: false },
    ]);
    setText("");
  };

  const removeTodo = (id: number) => {
    setTodoList(todoList.filter((todo) => todo.id != id));
  };
  const toggleChecked = (id: number) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const tasks = () => {
    if (todoList.some((todo) => todo.isDone === true)) {
      return todoList.filter((todo) => todo.isDone === false).length;
    }
    return todoList.length;
  };

  return (
    <div className={style.mainLayout}>
      <div className={style.top}>TodoList</div>
      <div className={style.todoInput}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="오늘 할 일을 추가해보세요!"
        />
      </div>
      <TodoList
        todoList={todoList}
        toggleChecked={toggleChecked}
        removeTodo={removeTodo}
      />
      <div className={style.bottom}>
        <div className={style.item1}>오늘 할 일 {tasks()} </div>
        <div className={style.item2}>
          <button className={style.bottomButton} onClick={addTodo}>
            추가하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

/*
export type TodoList = {
  id: number;
  todo: string;
  isDone: boolean;
};



export type Person = {
  id: number;
  name: string;
  age: number;
};

export type Persons = {
  persons: Person[];
};

function Proops(proops: person)

*/
