import TodoItems from "./TodoItem";
import styles from "./todolist.module.css";
export default function TodoList({ todos, setTodos }) {
  return (
    <div className={styles.list}>
      {todos.map((item) => (
        <TodoItems item={item} key={item.name} setTodos={setTodos} todos={todos}/>
      ))}
    </div>
  );
}
