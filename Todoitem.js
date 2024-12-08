export default function todoItem(task, onDelete) {
  const item = document.createElement("div");
  item.className = "todo-item";

  const text = document.createElement("span");
  text.textContent = task;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => onDelete(task));

  item.appendChild(text);
  item.appendChild(deleteButton);

  return item;
}
