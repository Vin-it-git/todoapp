import { useState } from "react";
import TodoItems from "./TodoItem";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const[todos, setTodos] = useState([])
  function handleSubmit(e){
    e.preventDefault();
    setTodos([...todos, todo])
    setTodo("");

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {todos.map((item)=>(
        <TodoItems item = {item}  key={item}/>
      ))}
    </div>
  );
}
