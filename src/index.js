import "./style.css";

import tasks from "./data.js";

const tasksList = tasks;
console.log(tasksList);
function component() {
  const tasksSort = tasksList.sort((a, b) => a.index - b.index);
  const element = document.querySelector("#list");
  tasksSort.forEach((task) => {
    const taskElement = document.createElement("li");
    taskElement.classList.add("items");
    taskElement.innerHTML = `
          <div>
            <input type='checkbox' ${task.completed ? "checked" : ""}
        class='box' name='car'>
            <input for=''  class='task' id='task' value='${task.description}'>
          </div>
          <div>
          <button class='remove-btn'>x</button>
          </div>
        `;
    element.appendChild(taskElement);
  });
  return element;
}
document.body.appendChild(component());
