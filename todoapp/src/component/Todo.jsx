import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  function handleSubmit(e){
    e.preventDefault()
    
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
