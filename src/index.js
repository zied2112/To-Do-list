import './style.css';

const tasks = [
  {
    index: 0,
    description: 'Do the dishes',
    completed: true,
  },
  {
    index: 2,
    description: 'Do the laundry',
    completed: false,
  },
  {
    index: 1,
    description: 'Do the homework',
    completed: false,
  }];
function component() {
  const tasksSort = tasks.sort((a, b) => a.index - b.index);
  const element = document.querySelector('#list');
  tasksSort.forEach((task) => {
    const taskElement = document.createElement('li');
    taskElement.classList.add('items');
    taskElement.innerHTML = `
          <div>
            <input type='checkbox' ${task.completed ? 'checked' : ''}
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
