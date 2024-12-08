import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const app = document.createElement("div");
  app.className = "app";

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const renderList = () => {
    const list = document.querySelector(".todo-list");
    if (list) list.remove();
    app.appendChild(
      TodoList(tasks, (task) => {
        const index = tasks.indexOf(task);
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderList();
      })
    );
  };

  app.appendChild(Header());
  app.appendChild(
    TodoForm((task) => {
      tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderList();
    })
  );
  renderList();
  app.appendChild(Footer());

  return app;
}
