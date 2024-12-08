import TodoItem from "./TodoItem";

export default function TodoList(tasks, onDelete) {
  const list = document.createElement("div");
  list.className = "todo-list";

  tasks.forEach((task) => {
    const item = TodoItem(task, onDelete);
    list.appendChild(item);
  });

  return list;
}
