export default function todoForm(onAdd) {
  const form = document.createElement("form");
  form.className = "todo-form";

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Enter...";
  input.required = true;

  const button = document.createElement("button");
  button.type = "submit";
  button.textContent = "Add";

  form.appendChild(input);
  form.appendChild(button);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = input.value;
    onAdd(value);
    input.value = "";
  });

  return form;
}
