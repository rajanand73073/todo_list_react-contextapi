import React from "react";
import { useState } from "react";
import { useTodo } from "../contexts/Todocontexts";

function TodoForm() {
  const [todoTitle, settodoTitle] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todoTitle) return;
    addTodo({ todoTitle, completed: false });
    settodoTitle("");
  };

  return (
    <form className="flex" onSubmit={add}>
      <input
        type="text"
        value={todoTitle}
        onChange={(e) => settodoTitle(e.target.value)}
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
