import './style.css';
import tasks from './data.js';

const tasksList = tasks;

const list = document.querySelector('#list');
function component() {
  const tasksSort = tasksList.sort((a, b) => a.index - b.index);
  const element = document.createElement('ul');
  tasksSort.forEach((task) => {
    const taskElement = document.createElement('li');
    taskElement.classList.add('items');
    taskElement.innerHTML = `
          <div>
            <input type='checkbox' ${task.completed ? 'checked' : ''}
        class='box' >
            <input class='task' id='task' value='${task.description}'>
          </div>
          <div>
          <button class='remove-btn'>x</button>
          </div>
        `;
    element.appendChild(taskElement);
  });
  return element;
}
list.appendChild(component());
