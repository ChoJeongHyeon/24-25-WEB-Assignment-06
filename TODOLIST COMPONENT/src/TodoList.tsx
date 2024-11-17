import { TodoListType } from "./App";
import style from "./TodoList.module.less";

type Props = {
  todoList: TodoListType[];
  toggleChecked: (id: number) => void;
  removeTodo: (id: number) => void;
};

function TodoList({ todoList, toggleChecked, removeTodo }: Props) {
  return (
    <div className={style.todoListContainer}>
      {todoList.map((todo) => (
        <div key={todo.id} className={style.todoList}>
          <input
            type="checkbox"
            id={"check${todo.id}"}
            checked={todo.isDone}
            onClick={() => toggleChecked(todo.id)}
            className={style.checkboxchange}
          />
          <label
            className={style.chekBoxLabel}
            htmlFor={"check${todo.id}"}
          ></label>
          <span className={todo.isDone ? style.ischeck : ""}>{todo.todo}</span>
          <button
            className={style.removeTodo}
            onClick={() => removeTodo(todo.id)}
          >
            삭제
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
